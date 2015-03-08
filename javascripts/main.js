Console.log("test");
var array = ["hello", "world", "fire"];

for(var e in array) { // e = 0, 1, 2
	console.log(array[e]);
}

var object = {"lexington": 44.7, "Belmont": 40.0, "Cambridge": 27};

for(var town in object) {
  console.log(town);
}
