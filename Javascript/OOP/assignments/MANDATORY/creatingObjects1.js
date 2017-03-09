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

function VehicleConstructor(name, wheels, passengerNumber){
  var vehicle = {};
  
  /*these will be the vehicle's PROPERTIES*/
  
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengerNumber = passengerNumber;

/*these will be the vehicle's METHODS*/

  vehicle.makeNoise = function(){
    console.log("making noise!")
  }
  return vehicle;
}


var bike = VehicleConstructor("bike", 2, 0);
bike.makeNoise = function(){
  console.log("Ring Ring!")
}
bike.makeNoise();


var sedan = VehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function(){
  console.log("Honk Honk!")
}
sedan.makeNoise();


var bus = VehicleConstructor("bus", 8, 1);
bus.pickUpPassengers = function(passengerNumber){
  bus.passengerNumber += passengerNumber;
}
console.log(bus.passengerNumber)
bus.pickUpPassengers(14);
console.log(bus.passengerNumber)