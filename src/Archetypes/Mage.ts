import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.countInstances();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static countInstances() {
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}

export default Mage;