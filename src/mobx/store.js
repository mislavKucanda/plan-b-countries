import { observable } from 'mobx';

class MobXStore {
  continents = [{ name: 'neka glupost' }];
}

export const Store = new MobXStore();
