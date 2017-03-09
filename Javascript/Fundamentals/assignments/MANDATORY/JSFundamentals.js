
var x = [ 3, 5, "Dojo", "rocks", "Michael", "Sensei" ];

x.push(100);
for (var i = 0; i < x.length; i ++) {
  console.log(x[i]);
}

var arrnew = ["hello", "world", "JavaScript is Fun"];
x.push(arrnew);
console.log(x)

var sum = 0;
for (var num = 0; num <= 500; num ++) {
  sum += num;
}
console.log(sum);

var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0]
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);

var sum = 0;
var avg;
var arr = [1, 5, 90, 25, -3, 0];
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
avg = sum/arr.length;
console.log(avg);


var newNinja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
}

for (var key in newNinja) {
  if (newNinja.hasOwnProperty(key)) {
    console.log(key);
    console.log(newNinja[key]);
  }
}

