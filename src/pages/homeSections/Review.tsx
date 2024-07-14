import styled from "styled-components";
import Slider from "react-slick";


const Review = () => {
    const reviews = [
      {
        name: "Lucas",
        description:
          "Through in-depth discussion a friend of mine encourages me to regularly focus on our goals in life and then to financially plan with us to reach our financial plans and makes very good sense. I was introduced to Nova Vault Ventures and I made my investment with 300 USD which I got back my profit in 5days.. Thank you to Nova Vault Ventures",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfV1Qk-X4r-zLq2aa0Q00unWRnjGkbujRAQ&usqp=CAU",
      },
      {
        name: "Shirleen",
        description:
          "Just to say many thank you to Nova Vault Ventures for a very positive investment. I came away feeling well satisfied that we are able to continue enjoying life without too much stress on the old finances and should be able to carry on with our present lifestyles for some time to come. Very satisfied with the way my investment turn out with just 500USD.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfV1Qk-X4r-zLq2aa0Q00unWRnjGkbujRAQ&usqp=CAU",
      },
      {
        name: "Frank",
        description:
          "Nova Vault Ventures Investment provides an excellent service. I have found the company's plan regarding investment opportunities particularly helpful – got $12,000 on first investment. I’m really thankful to Nova Vault Ventures.",
        img: "https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top",
      },
      {
        name: "Rajid",
        description:
          "We have been with Nova Vault Ventures Investment now for a year and the service I receive feels very personal. The peace of mind I have from knowing my finances is being so well managed is priceless.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfV1Qk-X4r-zLq2aa0Q00unWRnjGkbujRAQ&usqp=CAU",
      },
      {
        name: "Catilyn",
        description:
          "It's really wonderful. I would also like to say thank you to all your staff. Nova Vault Ventures did exactly what you said it does.",
        img: "https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top",
      },
      {
        name: "Bernard",
        description:
          "Through in-depth discussion a friend of mine encourages me to regularly focus on our goals in life and then to financially plan with us to reach our financial plans and makes very good sense. I was introduced to Nova Vault Ventures and I made my investment with 300 USD which I got back my profit in 5days.. Thank you to Nova Vault Ventures",
        img: "https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top",
      },
      {
        name: "Amy Wener",
        description:
          "This is Amazing, I started with $200 and i am here already investing $3600 back in. This is really Amazing",
        img: "https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top",
      },
    ];

    //SLIDER SETTINGS
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <ReviewSection>
        <h2 className="heading">New Clients Review</h2>
        <div className="sliderContent">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div key={index}>
                <div className="Cleancard">
                  <div className="namePics">
                    {/* <img src={item.img} alt="reviewer" /> <br /> */}
                    <p className="card-bottom">{item.description}</p>
                    <p className="name">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ReviewSection>
    );
};

const ReviewSection = styled.div`
  padding: 3rem 0;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  .sliderContent {
    width: 40rem;
    margin: auto;
  }

  .Cleancard {
    width: 35rem;
    height: 12rem;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    justify-content: center;
    border: 1px solid var(--primary);
    border-radius: 5%;
    margin: 2rem auto;
    padding: 2rem;
  }
  .Cleancard img {
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
  }
  .Cleancard .name {
    font-weight: 600;
    text-align: center;
  }
  .Cleancard .card-bottom {
    width: 100%;
    text-align: center;
    line-height: 1rem;
  }
  //MEDIA QUERIES
  @media screen and (max-width: 940px) {
    padding: 3rem 0;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .sliderContent {
      width: 100%;
      margin: auto;
    }

    .Cleancard {
      width: 80%;
      height: 14rem;
      display: flex;
      gap: 0;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border: 1px solid var(--primary);
      border-radius: 5%;
      margin: 2rem auto;
      line-height: 0.5rem;
    }
    .namePics {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: -1rem;
    }
    .Cleancard img {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
    }
    .Cleancard .name {
      font-weight: 600;
      text-align: center;
      font-size: 0.7rem;
    }
    .Cleancard .card-bottom {
      width: 80%;
      text-align: center;
      line-height: 1rem;
      margin-top: 0.5rem;
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 430px) {
    padding: 3rem 0;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .sliderContent {
      width: 100%;
      margin: auto;
    }
    .heading {
      text-align: center;
      color: var(--primary);
    }
    .Cleancard {
      width: 80%;
      height: 14rem;
      display: flex;
      gap: 0;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border: 1px solid var(--primary);
      border-radius: 5%;
      margin: 2rem auto;
      line-height: 0.5rem;
    }
    .namePics {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: -1rem;
    }
    .Cleancard img {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
    }
    .Cleancard .name {
      font-weight: 600;
      text-align: center;
      font-size: 0.7rem;
    }
    .Cleancard .card-bottom {
      width: 80%;
      text-align: center;
      line-height: 1rem;
      font-size: 0.7rem;
    }
  }
`;
export default Review;
