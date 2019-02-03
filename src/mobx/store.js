import { observable } from 'mobx';
import uniqueRandomArray from 'unique-random-array';
import shuffle from 'shuffle-array';

const NUM_OF_CONTINENTS = 3;
const NUM_OF_COUNTRIES = 4;

const initialContinents = [
  { name: 'Continent 1', selectedCountries: [], score: 0 },
  { name: 'Continent 2', selectedCountries: [], score: 0 },
  { name: 'Continent 3', selectedCountries: [], score: 0 },
];

class MobXStore {
  @observable continents = initialContinents;
  @observable generatedContinents = initialContinents;
  @observable generatedCountries = [];
  @observable draggedCountry = {};

  initializeGame() {
    const randomContinentIndexes = [];
    while (randomContinentIndexes.length < NUM_OF_CONTINENTS) {
      const randomIndex = Math.floor((Math.random() * this.continents.length));
      if (!randomContinentIndexes.includes(randomIndex)) {
        randomContinentIndexes.push(randomIndex);
      }
    }
    this.generatedContinents =
      randomContinentIndexes.map(index => ({ ...this.continents[index], selectedCountries: [], score: 0 }));
    const firstRandomGenerator = uniqueRandomArray(this.generatedContinents[0].countries);
    const secondRandomGenerator = uniqueRandomArray(this.generatedContinents[1].countries);
    const thirdRandomGenerator = uniqueRandomArray(this.generatedContinents[2].countries);
    const randomGeneratedCountries = [];
    for (let i = 0; i < NUM_OF_COUNTRIES; i++) {
      randomGeneratedCountries.push(firstRandomGenerator());
      randomGeneratedCountries.push(secondRandomGenerator());
      randomGeneratedCountries.push(thirdRandomGenerator());
    }
    this.generatedCountries = shuffle(randomGeneratedCountries);
  }

  addCountryToContinentBox(country, continentName) {
    this.generatedContinents = this.generatedContinents.map(continent => {
      if (continent.name === continentName) {
        if (continent.countries.filter(correctCountry => correctCountry.name === country.name).length === 1) {
          continent.score += 1;
          continent.selectedCountries.push({ ...country });
        } else {
          continent.selectedCountries.push({ ...country, isWrong: true });
        }
      }
      return continent;
    });
    this.generatedCountries =
      this.generatedCountries.filter(generatedCountry => country.name !== generatedCountry.name);
  }
}

export const Store = new MobXStore();
