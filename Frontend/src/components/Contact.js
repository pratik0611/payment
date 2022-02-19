import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <h2 style={{"color":"#c23616"}}>&#128222; Contact Us</h2>
                <p><strong>⚫contact@Edu-Tribals.org</strong></p>
                <p><strong>⚫+212 456 982 777</strong></p>
                <h2 style={{"color":"#c23616"}}>&#128101;Visit Us</h2>
                <p><strong>⚫Visit us between 10 a.m and 7 p.m(IST).</strong></p>
                <h2 style={{"color":"#c23616"}}>&#9993; Write to us at:</h2>
                <p><strong>⚫Edu-Tribals<br/>7, Kumthekar Road<br/>Pune-411087</strong></p>
            </div>
        )
    }
}

export default Contact;