import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter, { SimpleFighter } from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = Math.round(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race() { return this._race; }

  public get archetype() { return this._archetype; }

  public get maxLifePoints() { return this._maxLifePoints; }

  public get lifePoints() { return this._lifePoints; }

  public get strength() { return this._strength; }

  public get defense() { return this._defense; }

  public get dexterity() { return this._dexterity; }

  public get energy(): Energy {
    return {
      type_: this._archetype.energyType,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter) {
    return enemy.receiveDamage(this._strength);
  }

  levelUp() { 
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    const force: number = getRandomInt(1, 15) * 3;
    this._strength += force;
  }
}

export default Character;