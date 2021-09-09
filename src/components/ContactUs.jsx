import React from "react";

const ContactUs = () => {
    return(
        <div className="contact_us" id="contact_us">
            {/* <img className="giff" src="https://bazilmalekar.github.io/New-Bluebell/public/images/giff1.gif" alt="service"></img> */}
            <h3>Service options</h3>
            <p><span>Dine-in</span> <span>Takeaway</span> <span> Delivery</span></p>
            <h3>Hours</h3>
            <p className="time">12:00pm - 10:30pm</p>
            <h5>Contact us on - (+91) 741104739, (+91) 7019352421</h5>
            <h3>Address</h3>
            <p>Saptapur 5th main behind lingayat bhavan kalkoti building, CB Nagar, Saptapur, Dharwad, Karnataka 580007</p>
            <a className="fbIcon" href="https://www.facebook.com/The-BlueBell-1225072907659260/" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
    );
}

export default ContactUs;