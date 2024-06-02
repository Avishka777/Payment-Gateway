const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_51PAu2GAHeHiratLEYWRtpKK6bi4YTJV6KO8n4VXJeWstuEk7CVd0ObfzQyzifFEq3mTs2V4NF5AT3fAcSe1FmVw100CpyHvKf5");


router.post("/payment", (req, res) => {
    console.log("start");
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
        receipt_email: req.body.email,

      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
    console.log("end");
  });

module.exports = router;
