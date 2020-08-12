let circle;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return Math.PI * this.diameter;
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  set diameter(Diameter) {
    this.radius = Diameter / 2;
  }
  set circumference(Circumference) {
    this.radius = Circumference / (Math.PI * 2);
  }
}
circle = new Circle(6);
circle.diameter;
circle.circumference;
circle.area;
circle.diameter = 36;
circle.circumference = 100;
