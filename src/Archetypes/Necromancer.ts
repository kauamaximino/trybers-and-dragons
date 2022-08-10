import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.countInstances();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static countInstances() {
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}

export default Necromancer;