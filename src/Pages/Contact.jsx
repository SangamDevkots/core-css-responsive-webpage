import React from 'react';

const Contact = () => {
  const sectionStyle = {
    backgroundImage: `url('https://media.istockphoto.com/id/537465556/photo/off-to-bag-some-deals.jpg?s=612x612&w=0&k=20&c=BdWo0lsCKwsHnDNGqnctY7naUdYOFyBRiRZ9b-AoQMY=')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  const textStyle = {
    textAlign: 'center',
    color: '#fff',
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  return (
    <>
      <section className='contactsection' style={sectionStyle}>
        <div className="contacttexts" style={textStyle}>
          <h1>Contact</h1>
          <div className="info">
            <h1>Opening hours</h1>
            <p>Monday to Friday</p>
            <h1>Information</h1>
            <ul>
              <li>Address: Kathmandu, Nepal</li>
              <li>Phone: 9843979754</li>
              <li>Email: <a href="mailto:info@dyasdyas@gmail.com">info@dyasdyas@gmail.com</a></li>
            </ul>
            <h1>Questions</h1>
            <p>Email us using this form</p>
          </div>
        </div>

       
        <form style={formStyle}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
   
      </section>
    <map name="">
           
    <div style={{ width: '100%', margin: '20px auto' }}>
          <iframe
            title="Dummy Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.953208043839!2d-122.0838!3d37.3861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80a59db99975%3A0x5a5012c3c00c1b0d!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1611176891419!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
    </map>
 
    </>
  );
}

export default Contact;
