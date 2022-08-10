import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.countInstances();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static countInstances() {
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}

export default Warrior;