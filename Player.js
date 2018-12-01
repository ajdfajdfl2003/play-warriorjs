class Player {

  playTurn(warrior) {

    const space = warrior.feel();

    if(this.shouldAttack(space)){
      warrior.attack();
      return;
    }

    warrior.walk();
  }

  shouldAttack(space) {
    return !space.isEmpty();
  }
  
}
