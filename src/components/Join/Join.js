import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

export default function Join() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_9bonhda', 'template_mue3prk', form.current, {
            publicKey: 'hzD968-yhkVMUcmXF',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              document.getElementById('user-email').value = '';
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr/>
        <div>
            <span className="stroke-text">ready to</span>
            <span>level up</span>
        </div>
        <div>
            <span>your body</span>
            <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" id="user-email" placeholder="Enter your email" />
            <button className="btn btn-j">Join us</button>
        </form>
      </div>
    </div>
  )
}
