class Base {
  constructor (){
    this.baseId = Math.floor(Math.random()*99999999999999);
    this.owner = null;
    this.startedDate = new Date();
    this.lastUpdate = new Date();
    this.buildings = [];
    this.vehicles = [];
    this.characters = [];
    this.isUsing = false;
    this.path = new Path2d();
    this.removeOwner = function(){
      this.owner = null;
      this.isUsing = false;
    };
    this.setOwner = function (player){
      this.owner = player;
      this.isUsing = true;
    };
    this.entity = new entity({
      
    })
  }
}