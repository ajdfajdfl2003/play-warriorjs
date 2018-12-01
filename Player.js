class Player {

  constructor(){
    this.hp_max = 12;
    this.hp = this.hp_max;
  }


  playTurn(warrior) {

    const space = warrior.feel();

    if(this.shouldAttack(space)){

      warrior.attack();

    }else {

      if(this.shouldRest(warrior)){

        warrior.rest();
        
      }else {

        warrior.walk();

      }
    }

    this.hp = warrior.health();
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
