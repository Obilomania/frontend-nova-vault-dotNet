import React from 'react'
import MainLayout from '../components/layout/MainLayout';
import styled from 'styled-components';
import WhyChooseUs from './homeSections/WhyChooseUs';


const AboutImage = require("../assets/about top.jpg")
const AboutPage = () => {
  return (
    <MainLayout>
      <About>
        <div className="about-landing">
          <div className="overlay"></div>
          <img src={AboutImage} alt="about page" />
          <div className="hero-content">
            <h1>
              ABOUT <span>NOVA VAULT VENTURES</span>
            </h1>
          </div>
        </div>
        <div className="write-ups">
          <p>
            Nova Vault Ventures is an investment company, which was founded by a
            team of distinguished professional financial managers, analyst and
            experienced developers who came together to create a universal
            platform for cryptocurrency lovers worldwide. Nova Vault Ventures
            offers its users access to the algo-trading algorithmic trading
            system bot via our proprietary matrix Plans that allow users to
            choose the system’s operating mode as well as to participate in the
            affiliate program. Since our team develops its own strategies of
            trading and currency exchange applying all professional knowledge,
            techniques and skills that allow us to generate stable cash flows
            with minimal risk of financial loss. These rules are developed by
            experts in the field of multicurrency trading and fundamental
            analysis of the Forex market, they are ideal for our business and
            constantly being improved. In 2018 we have decided to enter the
            international market of long-term investments and offer unique
            cooperation terms for people who prefer a passive online income and
            are seeking for reliable financial partners. Nova Vault Ventures is
            fully legit and officially registered company whose activities are
            regulated by the financial control authorities under the
            jurisdiction of the Australian Securities & Investments Commission
            (ASIC) . Accepting our terms of cooperation, you can be absolutely
            sure of getting a guaranteed profit and full return on your
            investment. We offer the best conditions for placing your deposits
            and are ready to provide quality service to all comers. consists of
            professional traders that manage your brokerage account on your
            behalf. Whether you are a small or large investor, we can assist you
            with your investment goals. Furthermore, you will have access to our
            streamlined service and ongoing support. We provide a service that
            is based on integrity and is fully transparent. Our investment
            methods are unique. We utilize cutting edge technology and trade a
            diverse range of currency pairs. With the simple and logical
            investment plans accompanied by high and stable profit, it will
            simplify everyone's thinking about the online investment world and
            help people make money more easily in that. The most important
            aspect of our investments, which range from low, middle and high
            income are based on the fact that our core investment is always
            guaranteed, and now we welcome everyone with Internet access and an
            account in any of the received digital currency payment processing.
            Not everyone has the detailed knowledge of financial markets and for
            many people the best choice is to work with financial services
            provider such as forexcryptotraders, who gained required expertise
            and therefore can provide financial products in the form of fixed
            income managed accounts. After years of professional trading we have
            joined our skills, knowledge and talents in the effort to bring a
            new reliable investment opportunity. Its business spreads in the
            United States, Canada, Singapore, Russia and other countries around
            the world; Nova Vault Ventures have led the rapid development of the
            blockchain industry.We expect young and energetic new members to
            join us in contributing to the global blockchain business. At Nova
            Vault Ventures, we believe in in serving our clients in the most
            trusted manner possible. The well-researched and prudent investments
            you make with us are certain to reap profits. The strategy, which
            employs the arbitrage principles and exploits ineffective and
            unbalanced market prices.
          </p>
        </div>
        <WhyChooseUs />
      </About>
    </MainLayout>
  );
}



const About = styled.div`
  width: 100%;
  overflow: hidden;
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
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 500;
      span {
        color: var(--primary);
      }
    }
  }
  .write-ups {
    padding: 2rem 10rem;
    text-align: justify;
  }
  @media screen and (max-width: 1200px) {
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
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .write-ups {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 900px) {
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
      h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .write-ups {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 600px) {
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
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .write-ups {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 420px) {
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
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .write-ups {
      padding: 1rem;
      text-align: justify;
    }
  }
  @media screen and (max-width: 350px) {
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
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        span {
          color: var(--primary);
        }
      }
    }
    .write-ups {
      padding: 1rem;
      text-align: justify;
    }
  }
`;

export default AboutPage