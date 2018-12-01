class Player {

  constructor(){
    this.hp_max = 20;
  }


  playTurn(warrior) {

    const space = warrior.feel();

    if(this.shouldAttack(space)){
      warrior.attack();
      return;
    }

    if(this.shouldRest(warrior)){
      warrior.rest();
      return;
    }

    warrior.walk();
  }

  shouldRest(warrior) {
    return (this.hp_max - warrior.health()) >= 14;
  }

  shouldAttack(space) {
    return !space.isEmpty();
  }
  
}
