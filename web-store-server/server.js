/**
 * @fileoverview express server 
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios").default;
const compression = require("compression");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(compression()); // gzip and compression 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cross origin request 
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // enforce HTTPS to reach PWA compliant 
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) {
    throw error;
  }
  console.log("Server running on port", port);
});

// for strip payment
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripRes });
    }
  });
});

// for recaptcha 
app.post("/checkuser", async (req, res) => {
  if (!req.body.token) {
    return res.status(400).send({ success: false });
  }

  const response = await axios({
    url: "https://www.google.com/recaptcha/api/siteverify",
    method: "POST",
    params: {
      secret: process.env.SERVER_SITE_KEY,
      response: req.body.token
    },
  });

  if (response.data.success) {
    return res.status(200).send({ success: true });
  } else {
    return res.status(400).send({ success: false });
  }
});

// service work for enabling progress web app 
// must include service work register in index.js file 
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "service-worker.js"))
});
