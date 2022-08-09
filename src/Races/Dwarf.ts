import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countInstances();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static countInstances() {
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
}

export default Dwarf;