import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';



const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "beshoymokhlisagaiby@gmail.com",
    link: "mailto:beshoymokhlisagaiby@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Beshoy Mokhlis",
    link: "https://m.me/BeshoyMokhlis",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01203649584",
    link: "https://api.whatsapp.com/send?phone=201203649584",
  }
]

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t1a7evl', 'template_7nmvnrz', form.current,'nRsA1sxpQxd1VenpJ',
      )
      e.target.reset();
    
  };

  return (
    <section className='contact' id="contact">
      <div className='top_section'>
        
        <h2>Contact Me</h2>
      </div>

      <div className='container contact_container'>


        <div className='contact_options'>
          {ContactData.map(({id,icon,title,info,link}) =>(
            <article key={id}className='contact_option'>
              {icon}
              <h3>{title}</h3>
              <h4>{info}</h4>
              <a href ={link} target='_blank'>Send Massage</a>
            </article>

          ))}

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea rows={10} name='message' placeholder='Message' required />
          <button  className='btn btn-primary'>Send Massage</button>
        </form>


      </div>
    </section>

  )
}

export default Contact
