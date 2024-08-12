import snow from "../../assets/images/bg.svg";
export const Header = () => {
  return (
    <header className="header ">
      <div className="container">
        <img className="bg-img" src={snow} alt="img" />
        <h1 className="main-title">PROTEZ SOCH</h1>
        <div className="header-right">
          <p className="white-text">bo’yicha ekspert</p>
          <p className="user-name">Otabek Sodiqov</p>
          <div className="with-check">
            <span className="icon icon-check" />
            <span className="with-check-text">12 yillik ish tajribasi</span>
          </div>
          <div className="with-check">
            <span className="icon icon-check" />
            <span className="with-check-text">
              Protez soch bo’yicha katta bilim va tajriba
            </span>
          </div>
          {/* <div className="socials">
            <span
              onClick={() => {
                const element = document.getElementById("second-section");
                element?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }}
              className="icon arrow-down"
            />
          </div> */}
        </div>
      </div>
    </header>
  );
};
