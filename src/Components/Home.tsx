import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Home() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_w3t17uv', 'template_5s16f4h', form.current, {
          publicKey: 'JyHwk0wdw6SS0qP5x',
        })
        .then(
          () => {
            window.alert('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <section className='home' id='home'>
      <div className="home-text">
        <h6>Best Online Learning and Internship Platform</h6>
        <h1>Accessible Online Courses For all</h1>
        <p>Own Your Learning new skills Online</p>
        <div className="latter">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_email" placeholder="Write Your Email" required />
            <input type="submit" value="send" />
          </form>
        </div>
      </div>

      <div className="home-img">
        <img src="assets/images/object.png" alt="" />
      </div>
    </section>
  );
}

export default Home;