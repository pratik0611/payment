require('dotenv').config();
const app= require('express')();
const cors= require('cors');
const shortid= require('shortid');
const Razorpay=require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});

app.use(cors());

app.get("/logo.jpg",(req,res)=>{
    res.sendFile(path.join(__dirname,"logo.jpg"));
});

const payment_capture = 1;
const amount=1000;
const currency = "INR";

const options = {
  amount: amount * 100,
  currency,
  receipt: shortid.generate(),
  payment_capture,
};

app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 1000;
    const currency = "INR";
  
    const options = {
      amount: amount * 100,  //convert to Indian rupees
      currency,
      receipt: shortid.generate(),
      payment_capture,
      receipt: "receipt#1"
    };
  
    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
    }
});

app.listen(3001, ()=>{
  console.log('Server running on localhost:3001');
});