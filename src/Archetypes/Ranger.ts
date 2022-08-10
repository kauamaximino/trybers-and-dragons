import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.countInstances();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static countInstances() {
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}

export default Ranger;