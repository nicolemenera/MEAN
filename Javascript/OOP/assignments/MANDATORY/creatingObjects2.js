
// Assignment: Creating Objects I
// We are going to create our very own constructor. 
// Create a VehicleConstructor that takes in the name, number of wheels, and 
// the number of passengers. Then complete the following tasks:

// *** Each vehicle should have a makeNoise method
// *** Using the constructor, create a Bike
// *** Redefine the Bike’s makeNoise method to print “ring ring!” 
// *** Create a Sedan
// *** Redefine the Sedan’s makeNoise method to print “Honk Honk!”
// *** Using the constructor, create a Bus
// *** Add a method to Bus that takes in the number of passengers to pick 
//     up and adds them to the passenger count

function VehicleConstructor(name, wheels, passengerNumber, speed){
  var self = this;
  
  //Private Variables
  var distance_traveled = 0;
  
  //Private METHODS
  function updateDistanceTraveled(){
    distance_traveled += self.speed
  }
  
  /*these will be the vehicle's PROPERTIES*/
  
  this.name = name;
  this.wheels = wheels;
  this.passengerNumber = passengerNumber;
  this.speed = speed || 0;

/*these will be the vehicle's METHODS*/

  this.makeNoise = function(){
    var noise = noise || "Honk Honk!";
    console.log(noise)
  }
  this.move = function(){
    updateDistanceTraveled();
    this.makeNoise();
  }
  this.checkMiles = function(){
    return distance_traveled;
  }
}

var bus = new VehicleConstructor("Bus", 8, 35, 60);
console.log(bus.checkMiles());
bus.move();
console.log(bus.checkMiles());
