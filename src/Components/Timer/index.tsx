import "./timer.scss";

function Timer() {
  return (
    <div className="gradient-background">
      <div className="announcement-banner">
        <div className="diqqat">
          <p>DIQQAT! DIQQAT! DIQQAT! DIQQAT!</p>
        </div>
      </div>
      <div className="content">
        <h1>PROTEZ soch uchun</h1>
        <h2>30% chegirma e’lon qilaman 🏴‍☠️🏴‍☠️🏴‍☠️</h2>
        <p>
          Chegirma dastlabki <span className="highlight">50</span> ta mijoz
          uchun amal qiladi.
        </p>
        <p>Chegirmadagi joylar soni kam qolgan shoshiling</p>
        <div className="timer">
          <span>18:36:36</span>
        </div>
        <button className="cta-button">Navbatga yozilish</button>
      </div>
      <div className="announcement-banner">
        <div className="diqqat">
          <p>CHEGIRMA! CHEGIRMA! CHEGIRMA! CHEGIRMA!</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
