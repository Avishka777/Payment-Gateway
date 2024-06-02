import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import StripeCheckout from 'react-stripe-checkout';


const PaymentGateway = () => {

    const [stripeToken, setStripToken] = useState()

    const onToken =(token)=>{
        setStripToken(token)
    }

    useEffect(()=>{
        const makeRequest = async()=>{
            try{
                const responce = await axios.post("http://localhost:3000/api/stripe/payment",
                {
                    tokenId: stripeToken.id,
                    amount: 100,
                    email: stripeToken.email,
                    
                });
                console.log(responce);
                swal({
                    title: "Payment Successful!",
                    text: "Your payment has been processed successfully.",
                    icon: "success",
                    button: "OK",
                  });
            }catch(err){
                console.log(err);
                swal({
                  title: "Payment Unsuccessful!",
                  text: "There was an error processing your payment. Please try again later.",
                  icon: "error",
                  button: "OK",
                });
            }
        }
        if(stripeToken){
            makeRequest()
        }
    },[setStripToken])
  return (
    <div>
        <StripeCheckout name='Knowlage.net'
                        billingAddress
                        description="Payment for Course"
                        amount={1}
                        token={onToken}
                        stripeKey={"pk_test_51PAu2GAHeHiratLE7Ms4HuD72on5IDaxCrWf6wyagVxQLftAf1vptM16FE49I9WzjZ3HlsWgJZVRX5aCpnr4SxjR00jctG9rNQ"}
        >
            <button style={{
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '5px',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}>
                Pay now
              </button>

            </StripeCheckout>
    </div>
  )
}

export default PaymentGateway