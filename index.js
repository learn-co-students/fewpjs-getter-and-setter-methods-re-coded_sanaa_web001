// Add your Circle class here
class Circle{

  constructor (radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  get circumference(){
    return this.radius*2*Math.PI;
  }
  get area(){
    return Math.pow(this.radius,2) * Math.PI;}
    set setdiameter(diameter){
      this.radius=diameter/2;
    }
    set setr2(circumference){
      this.radius=(circumference/(2*Math.PI));
    }

}
