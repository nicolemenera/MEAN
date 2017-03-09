function addNumbers( a, b ){
  sum = a + b;
  return sum;
}

function addArrayElements( array ){
  var array_sum = 0;
  var array_length = array.length;
  for (var i = 0; i < array_length; i++) {
    addNumbers( array_sum, array[i]);
  }
  return array_sum;
}

var new_sum = addArrayElements([3,4,5]);
