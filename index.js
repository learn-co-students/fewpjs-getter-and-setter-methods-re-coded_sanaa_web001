class Circle {
 constructor (radius){
 this.radius = radius;
}

get diameter(){
 return this.radius*2;
}
get circumference(){
 return Math.PI*this.radius*2;
}
get area (){
 return Math.PI*this.radius**2;
}
set diameter(newD){
 return this.radius = newD/2;
}
set circumference(newC){
 return this.radius = newC/(Math.PI*2);
}
set area (newA){
 return this.radius = Math.sqrt(newA/Math.PI);
}
}
