// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return 2*this.radius;
  }
  get circumference(){
    return Math.PI*2*this.radius;
  }
  get area(){
    return Math.PI*this.radius*this.radius;
  }
  // set radius(){
  //   this.radius=this.diameter/2;
  //   this.radius=this.circumference/(Math.PI*2);
  //   this.radius=Math.sqrt(this.area/(Math.PI));
  // }
  get radius(){
    return this.radius;
  }
  set radius(newRadius){
    this.radius=newRadius;
  }
  set diameter(newDiameter){
    this.diameter=newDiameter;
    return this.radius=this.diameter/2;
  }
  set circumference(newCircumference){
    this.circumference=newCircumference;
    return this.radius=this.circumference/(Math.PI*2);
  }
  set area(newArea){
    this.area=newArea;
    return this.radius=Math.sqrt(this.area/(Math.PI));
  }
}