import Race from './Race';

class Elf extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.countInstances();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static countInstances() {
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}

export default Elf;