import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Melody train</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                  Yousaf Wazir helped out our team a lot, he put in a lot of
                  effort and skill into making out product shine, from day one
                  he was a part of our family and made it his goal to make the
                  best software he could.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Adam smith</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  He has a amazing understanding of the developer eco-system and
                  keeps up with the best practices and technologies to make sure
                  that what he makes is the best the market can offer.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Tony brown</h6>
                    <h6>UI / UX</h6>
                  </div>
                </div>
                <p>
                  He has a keen eye for modern design, making both beautiful
                  user interfaces and user experiences, he makes sure to give the
                  users he creates his work for, the best experience they could
                  ask for.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
