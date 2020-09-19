// Add your Circle class here
class Circle{
  constructor(radius)
  {
    this.radius=radius;
  }

  get diameter()
  {
    let diameter = this.radius * 2;
    return  diameter;
  }
  set  diameter(diameter)
  {
    this.radius= diameter / 2;
  }


  get circumference(){
    let circumference = Math.PI * this.diameter
    return circumference
  }


  set circumference(circumference)
  {
     this.radius = circumference / ( Math.PI * 2 )
  }

   get area()
  {
    let area= Math.PI * this.radius * this.radius;
    return area
  }
   set area(area)
  {
      this.radius = Math.sqrt( area / Math.PI )
  }


}
