// Default parameters

// Ordinary function
// function sentence(name, place) {
//   console.log(name + ' likes to go to the ' + place)
// }
//
// sentence('Jim', 'library');

// Old fashioned way of setting a "default" for parameters
// function sentence(name, place) {
//   name = name || 'Jim';
//   place = place || 'library';
//   console.log(name + ' likes to go to the ' + place)
// }
//
// sentence();
// sentence('Sho', 'beach');

// New ES6 default parameter feature
// let sentence = (name = 'Jim', place = 'library') => console.log(`${name} likes to go to the ${place}`);
//
//
// sentence();
// sentence('Sho', 'beach');
// sentence(undefined, 'park');
