/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51JT5lLGaiK4BHGFbBatvcR6OS5EjrzBW3cdvvkRus25zMQC8FGztR8T24vcVdFiZ3GSwVYph7B5bj95TDqSrF24j009gF1nFHc");

// APT

// ~App config to get your express app running cloud function
const app = express();

// ~ Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// API ROUTES
app.get("/", (request, response) =>response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) =>{
    const total = request.query.total;
    console.log("total", total);
    const paymentIntent = await stripe.paymentIntents.create(
        {
            amount:total,
            currency:"usd"
        });
        // ok created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
});

// listen command
exports.api = functions.https.onRequest(app);
