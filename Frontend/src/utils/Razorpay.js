export default async function displayRazorpay() {
    const data = await fetch("http://localhost:3001/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
  
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      name: "Edu-Tribals.org",
      description: "Wallet Transaction",
      image: "http://localhost:3001/logo.png",
      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id)
      },
      prefill: {
        name: "Eesha Inamdar",
        email: "eyinamdar@gmail.com",
        contact: "7777777777",
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}