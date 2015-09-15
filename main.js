var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];


for(var i=0; i<animals.length -1; i++) {
 	console.log(animals[i]);
}

for(var i=0; i<animals.length; i+=2) {
 	console.log(animals[i]);
}

for(var i = animals.length; i>=0; i--) {
 	console.log(animals[i]);
}

for (var i = 0; i < animals.length; i++) {
  if (0 < i && i < animals.length - 1) {
    console.log(animals[i]);
  }
  console.log(animals[i]);
}