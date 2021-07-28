const accountSid = process.env.ACCOUNT_TWILIO ;
const authToken = process.env.TOKEN_TWILIO;
const client  = require('twilio')(accountSid, authToken);


const messageCustomer = (customer, restaurant, time, order_url) => {
  const message = `Hello ${(customer)}, your order from ${restaurant} should be ready in ${time} mins! You can check the ETA at ${order_url}.`

client.messages.create({
    body: message,
    to: '+12345678901', // Text this number
    from: '+18722334590', // From a valid Twilio number
}, (err, message) => {
  if (err) {
    return null;
  }
});
}

const messComplete = (customer, restaurant, order_url) => {
  const message = `Hello ${(customer)}, your order from ${restaurant} is now ready! You can verify at ${order_url}.`

  client.messages.create({
    body: message,
    to: '+12345678901',
    from: '+18722334590',
  }, (err, message) => {
    if (err) {
      return null;
    }
  });
}



module.exports = {
  message: messageCustomer,
  complete: messComplete
};
