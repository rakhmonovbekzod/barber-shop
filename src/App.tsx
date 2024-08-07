/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Layout from "./Layout/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/main.css";
import snow from "./assets/images/snow.svg";
import vektor from "./assets/images/vector.svg";
import Timer from "./Components/Timer";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    draggable: true,
  };

  const links = [
    "K1XZ25U8m_8?si=X3DbBrpViFObVYzZ",
    "1lNzmq70gg4?si=WCnJtQfmLKieV_wS",
    "EjlqSjq4czA?si=GUWRJVCsjUCOY1cl",
  ];
  return (
    <ChakraProvider>
      <Layout>
        <div className="second-section ">
          <div className="info-section">
            <img className="snow" src={snow} alt="img" />
          </div>
          <div className="video-player-wrapper">
            <div className="video-player-body">
              <div className="socials position-absolute">
                <a
                  className="socials-item"
                  href="tel:+998333194444"
                  target="_blank"
                >
                  <span className="icon icon-phone" />
                </a>
              </div>
              <div className="video-player">
                <iframe
                  height="315"
                  src="https://www.youtube.com/embed/4ioL5N3gPRQ?si=kHSXjEhIVaIkNtX_"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-player-right">
                <h3>Protez soch haqida to’liq ma’lumot</h3>
                <ul className="lists">
                  <li>Soch ektirishdan ko’ra ancha arzon</li>
                  <li>O’g’riqlarsiz juda sodda va hamyonbob</li>
                  <li>
                    Boshqa alternativalarga qaraganda allergiya va bosh terisiga
                    hech qanday zarari yo’q
                  </li>
                  <li>
                    Qo’shimcha ma’lumotlarni video orqali yoki bizga aloqaga
                    chiqqan holda bilib oling
                  </li>
                </ul>
              </div>
            </div>
            <p className="please-text">
              Iltimos protez sochlar bo’yicha to’liq ma’lumot olish uchun ushbu
              videoni to’liq ko’ring
            </p>
          </div>
        </div>
        <div className="third-section " data-aos="fade-up">
          <div className="nature">
            <h3>Natural mahsulot</h3>
            <p>
              Protez sochlar Turkiya, E’ron va Dubaydan olib kelinadi, maxsulot
              100% natural va tabi’iy sochlardan tayyorlanadi
            </p>
          </div>
          <div className="nature second">
            <h3>Har qanday holatdaham uyaltirmaydi</h3>
            <p>
              Ichki qismi yupqa setkali bo’lib, undan suv va xavo o’tadi.
              Boshingiz bemalol nafas oladi. Protez soch bilan siz basseynda,
              dushda cho’milishingiz va qattiq shamol kelganda xam bemalol
              yurishingiz mumkin. 100% uyaltirib qoymaydi
            </p>
          </div>
          <div className="nature ">
            <h3>Salbiy ta’sirlarsiz</h3>
            <p>
              Bosh terisiga mutlaqo salbiy tasiri yo’q, xotirjam bo’ling! 1
              xaftdan 25 kungacha ko’chmasdan turib beradi va vaqti kelganida
              chetlaridagi “kley”larini yangilab turasiz asosiysi bu juda oson
              jarayon
            </p>
          </div>
        </div>
        <div className="four-section" data-aos="fade-down">
          <h3>Protez soch ustunliklari</h3>
          <ul className="features-list">
            <li className="features-list-item">
              <img src={vektor} alt="vektor" />
              <div>
                <h4>Yoshartiradi</h4>
                <span>Go’yoki 15 yilga yosharasiz </span>
              </div>
            </li>
            <li className="features-list-item">
              <img src={vektor} alt="vektor" />
              <div>
                <h4>Bosh kiyimsiz</h4>
                <span>Bosh kiyim va kepkadan qutulasiz</span>
              </div>
            </li>
            <li className="features-list-item">
              <img src={vektor} alt="vektor" />
              <div>
                <h4>O’zingizga ishonch</h4>
                <span>
                  To’y va marosimlarga o’zingizga ishongan xolda borasiz{" "}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <Slider className="slider" {...settings} data-aos="fade-right">
          {links?.map((i) => (
            <iframe
              className="small-slider-iframe"
              key={i}
              height="315"
              src={"https://www.youtube.com/embed/" + i}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </Slider>
        <div data-aos="fade-left">
          <Timer />
        </div>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
