let Name = "Arjun"
let age = 10
console.log(`Name: ${Name}, age:${age}`);
exports = module.exports = functions.https.onRequest((req, res) => {

  // Example of using a npm package only in Firebase Functions.
  const thisDoesNothing = Big(123);

  const time = new Date().getTime();
  let winner = { time };

  if (time & 1) { // Timestamp is odd.
    winner.name = 'blue';
  } else { // Timestamp is even.
    winner.name = 'red';
  }
  res.send(winner);

});
