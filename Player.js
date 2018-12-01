class Player {

  constructor(){
    this.hp_max = 13;
    this.hp = this.hp_max;
  }


  playTurn(warrior) {

    const space = warrior.feel();

    if(this.shouldRescue(space)) {

      warrior.rescue();

    }else if(this.shouldRest(warrior)){

        warrior.rest();
        
    }else if(this.shouldAttack(space)){

      warrior.attack();

    }else {

        warrior.walk();

    }

    this.hp = warrior.health();
  }

  shouldRescue(space) {
    return space.isCaptive();
  }

  shouldRest(warrior) {
    return this.hp_max > warrior.health() && !this.isTakingDamage(warrior);
  }

  isTakingDamage(warrior) {
    return this.hp > warrior.health();    
  }

  shouldAttack(space) {
    return !space.isEmpty();
  }
  
}
