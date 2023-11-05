class Player {
  constructor (name){
    this.name = name;
    this.id = Math.floor(Math.random()*9999999);
  }
  base = null;
  baseId = null;
  money = 100;
  property = null;
  rank = 0;
  email = null;
  isLogged = null;
  lastVisitDate = new Date();
  loggedDate = new Date();
  updatedDate = new Date();
  flag = null;
}

