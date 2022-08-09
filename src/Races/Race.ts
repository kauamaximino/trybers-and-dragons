abstract class Race {
  protected _name: string;
  protected _dexterity: number;
  static instances = 0;

  constructor(name: string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  abstract get maxLifePoints(): number;

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }
  
  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }
}

export default Race; 