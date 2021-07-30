const accountSid = process.env.ACCOUNT_TWILIO;
const authToken = process.env.TOKEN_TWILIO;
const phoneTwilio = process.env.PHONE_TWILIO;
const client  = require('twilio')(accountSid, authToken);

const messageCustomer = (time) => { //sends a message about when the order is ready and if they want to check the eta
  const message = `Hello customer! Your order from Teashop should be ready in ${time} mins!`;
  client.messages.create({
    body: message,
    to: phoneTwilio, // Text Akshay's number
    from: '+18722334590', // From a valid Twilio number
  },(err, message) => {
    if (err) {
      return null;
    }
    return message;
  });
};

const messComplete = (customer, number) => {//sends a message about when the order is ready and if they want to check the eta
  const message = `Hello ${(customer)}, your order from Teashop is now ready!`;
  number = String(number);
  client.messages.create({
    body: message,
    to: number, // Text this number
    from: '+18722334590',
  }, (err, message) => {
    if (err) {
      return null;
    }
    return message;
  });
};


module.exports = {
  message: messageCustomer,
  complete: messComplete
};
