import Monster from './Monster';

class Dragon extends Monster {
  constructor() {
    super();
    super.setLifePoints(999);
  }
}

export default Dragon;