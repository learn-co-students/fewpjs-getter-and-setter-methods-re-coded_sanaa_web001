// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius=radius;
    this.pi=Math.PI;
  }
set diameter(diameter){
  this.radius =diameter / 2;
}
  get diameter(){
    return this.radius * 2 ;
  }
  set circumference(circumference){
    this.radius =  (circumference / Math.PI) / 2;
  }
  get circumference (){

    return this.pi * this.diameter;
  }

  get area(){
    return this.pi * (this.radius * this.radius);
  }

}//end class circle
