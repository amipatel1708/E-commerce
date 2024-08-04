// const Stripe = require("stripe")
// console.log(process.env.STRIPE_SECRET_KEY,"abc")
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// module.exports = stripe
// config/stripe.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
module.exports = stripe;
