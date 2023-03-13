import Character from './Character';

export default class Boweman extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
