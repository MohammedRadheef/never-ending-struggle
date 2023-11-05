class Building {
  constructor(base, x, y){
    this.base = base,
    this.baseId = Math.floor(Math.random() * 9999999999)
    this.owner = base.owner;
    this.x = x;
    this.y = y;
  }
}