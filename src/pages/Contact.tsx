import React from 'react'
import MainLayout from '../components/layout/MainLayout';
import styled from 'styled-components';



const AboutImage = require("../assets/about top.jpg");
const Contact = () => {
  return (
    <MainLayout>
      <ContactPage>
        <div className="about-landing">
          <div className="overlay"></div>
          <img src={AboutImage} alt="about page" />
          <div className="hero-content">
            <h1>CONTACT US</h1>
            <p>
              Thank you for your interest in Nova Vault Enterprise. Please fill
              out the form below to ask a question, leave a statement or to
              report a technical problem and we will get back to you at our
              earliest convenience.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="heading">Contact Us</div>
        <div className="contact-form">
          {/* <form onSubmit={handleSubmit} ref={form}> */}
          <form>
            <div className="top-form">
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Full Name *"
                  name="name"
                  required
                  //   value={contactInfo.name}
                  //   onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="form-input">
                <input
                  type="email"
                  placeholder="Email Address *"
                  name="email"
                  required
                  //   value={contactInfo.email}
                  //   onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
            <div className="form-message">
              <textarea
                placeholder="Message *"
                cols={30}
                rows={10}
                name="message"
                required
                // value={contactInfo.message}
                // onChange={(e) => handleInput(e)}
              ></textarea>
            </div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </ContactPage>
    </MainLayout>
  );
}


const ContactPage = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  height: fit-content;
  padding-bottom: 3rem;
  .about-landing {
    position: relative;
    height: 40vh;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 5;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 8;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    p {
      width: 50%;
      text-align: center;
    }
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 500;
      span {
        color: var(--primary);
      }
    }
  }
  .contact-form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 40%;
    gap: 1rem;
  }
  .top-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 2%;
  }
  form .form-message,
  form .form-input {
    width: 100%;
  }
  textarea {
    width: 100%;
    resize: none;
    padding: 0.5rem 1rem;
    border:1px solid var(--light-black)
  }
  .form-input input {
    width: 100%;
    padding: 0.5rem 1rem;
    border:1px solid var(--light-black)
  }
  button {
    border: 1px solid var(--primary);
    background: var(--primary);
    color: white;
    padding: 0.5rem 2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1200px) {
    .hero-content h1 {
      font-size: 1.5rem;
    }
    .hero-content p {
      width: 90%;
      text-align: center;
    }
    .contact-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      width: 100%;
    }
    form {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;
      gap: 1rem;
    }
    .top-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 2%;
    }
    form .form-message,
    form .form-input {
      width: 100%;
    }
    textarea {
      width: 100%;
      resize: none;
      padding: 0.5rem 1rem;
    }
    .form-input input {
      width: 100%;
      padding: 0.5rem 1rem;
    }
    button {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  @media screen and (max-width: 900px) {
    .hero-content h1 {
      font-size: 1.5rem;
    }
    .hero-content p {
      width: 90%;
      text-align: center;
    }
    .contact-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      width: 100%;
    }
    form {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;
      gap: 1rem;
    }
    .top-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
    form .form-message,
    form .form-input {
      width: 100%;
    }
    textarea {
      width: 100%;
      resize: none;
      padding: 0.5rem 1rem;
    }
    .form-input input {
      width: 100%;
      padding: 0.5rem 1rem;
      margin-top: 1rem;
    }
    button {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    .hero-content h1 {
      font-size: 1.5rem;
    }
    .hero-content p {
      width: 90%;
      text-align: center;
    }
    .contact-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      width: 100%;
    }
    form {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;
      gap: 1rem;
    }
    .top-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
    form .form-message,
    form .form-input {
      width: 100%;
    }
    textarea {
      width: 100%;
      resize: none;
      padding: 0.5rem 1rem;
    }
    .form-input input {
      width: 100%;
      padding: 0.5rem 1rem;
      /* margin-top: .8rem; */
    }
    button {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      width: 100%;
    }
  }
  @media screen and (max-width: 420px) {
    .hero-content h1 {
      font-size: 1.5rem;
    }
    .hero-content p {
      width: 90%;
      text-align: center;
    }
    .contact-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      width: 100%;
    }
    form {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;
      gap: 1rem;
    }
    .top-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      /* gap: 1rem; */
    }
    form .form-message,
    form .form-input {
      width: 100%;
    }
    textarea {
      width: 100%;
      resize: none;
      padding: 0.5rem 1rem;
    }
    .form-input input {
      width: 100%;
      padding: 0.5rem 1rem;
      /* margin-top: .8rem; */
    }
    button {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      width: 100%;
    }
  }
  @media screen and (max-width: 350px) {
    .hero-content h1 {
      font-size: 1.5rem;
    }
    .hero-content p {
      width: 90%;
      text-align: center;
    }
    .contact-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      width: 100%;
    }
    form {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 100%;
      gap: 1rem;
    }
    .top-form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
    form .form-message,
    form .form-input {
      width: 100%;
    }
    textarea {
      width: 100%;
      resize: none;
      padding: 0.5rem 1rem;
    }
    .form-input input {
      width: 100%;
      padding: 0.5rem 1rem;
      /* margin-top: .8rem; */
    }
    button {
      border: 1px solid var(--primary);
      background: var(--primary);
      color: white;
      padding: 0.5rem 2rem;
      font-weight: 500;
      letter-spacing: 1px;
      width: 100%;
    }
  }
`;

export default Contact