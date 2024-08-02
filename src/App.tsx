import Layout from "./Layout/Layout";
import "./assets/styles/main.css";
import snow from "./assets/images/snow.svg";
function App() {
  return (
    <Layout>
      <div className="second-section">
        <div className="info-section">
          <img className="snow" src={snow} alt="img" />
        </div>
        <div className="video-player-wrapper">
          <div className="video-player-body">
            <div className="socials position-absolute">
              <a href="#" className="socials-item">
                <span className="icon icon-phone" />
              </a>
            </div>
            <div className="video-player">
              <iframe
                height="315"
                src="https://www.youtube.com/embed/Fjbz-Rzmzxw?si=PEVHDTc7Eows7KAF"
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
      <div className="third-section">
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
    </Layout>
  );
}

export default App;
