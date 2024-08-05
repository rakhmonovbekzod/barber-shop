export const Footer = () => {
  return (
    <div className="footer">
      <div className="section_wrapper">
        <div className="container">
          <div className="contacts_section">
            <div className="contact_title">
              <p className="title">Navbatga yoziling</p>
              <span className="icon icon-pen"></span>
            </div>
            <p className="contact_desc">
              ismingiz va ishlab turgan telefon raqamingizni qoldiring, shaxsan
              o’zim sizga 24 soat ichida aloqaga chiqaman va barcha savollarizga
              javob beraman 😊
            </p>

            <form className="form">
              <span className="input_wrapper">
                <span className="icon icon-user"></span>
                <input type="text" placeholder="Ismingizni kiriting" />
              </span>
              <span className="input_wrapper">
                <span className="icon icon-phone"></span>
                <input type="tel" placeholder="Telefon raqamingizni kiriting" />
              </span>
              <button type="submit">Navbatga yozilish</button>
            </form>
          </div>
        </div>

        <div className="address_section">
          <p className="address_title">Bizning manzil</p>
          <p className="address_desc">
            Ushbu manzildan bizni oson topib kelasiz
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2695600497407!2d69.21064009711158!3d41.29918016034636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8a99a44d99%3A0x3914c7b23096e8fe!2sOq%20tepa%20krug!5e0!3m2!1sen!2s!4v1722601197255!5m2!1sen!2s"
            width={"100%"}
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
