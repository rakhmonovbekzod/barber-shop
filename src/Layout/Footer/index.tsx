/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Alert, AlertIcon, Heading, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";

export const Footer = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState();
  const sendData = (e: React.FormEvent) => {
    const token = "7337937509:AAEkBDMVoXvkPS3LJpIBcoDAYeLnlIAw3b0";
    const chatId = 675540976;
    e.preventDefault();
    setIsLoading(true);
    fetch(`https://api.telegram.org/bot` + token + "/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: {
          userName: nameRef?.current?.value,
          phoneNumber: numberRef?.current?.value,
        },
      }),
    }).then(() => {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 7000);

      setIsLoading(false);
    });
  };
  return (
    <div className="footer">
      <Modal isOpen={show} size="xl" isCentered motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <Stack style={{ padding: 20 + "px" }} spacing={6}>
            <Heading as="h4" size="md">
              <Alert status="success">
                <AlertIcon />
                Rahmat navbatga yozildingiz .Siz bilan tez orada bog'lanaman.
                Tanlovingiz uchun rahmat!
              </Alert>
            </Heading>
          </Stack>
        </ModalContent>
      </Modal>
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

            <form onSubmit={sendData} className="form" id="form">
              <span className="input_wrapper">
                <span className="icon icon-user"></span>
                <input
                  ref={nameRef}
                  className="name-input"
                  required
                  type="text"
                  placeholder="Ismingizni kiriting"
                />
              </span>
              <span className="input_wrapper">
                <span className="icon icon-phone"></span>
                <input
                  ref={numberRef}
                  required
                  type="tel"
                  placeholder="Telefon raqamingizni kiriting"
                />
              </span>
              <button disabled={isLoading} type="submit">
                {isLoading ? "...loading" : "Navbatga yozilish"}
              </button>
            </form>
          </div>
        </div>

        <div className="address_section">
          <p className="address_title">Bizning manzil</p>
          <p className="address_desc">
            Ushbu manzildan bizni oson topib kelasiz
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14259.40541598045!2d69.1994172005188!3d41.2942702581759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d41.2995424!2d69.21329879999999!4m5!1s0x38ae8bcbcbdcb1c5%3A0x6a2bf375d29942b6!2s76X7%2B82Q%2C%20100096%2C%20Tashkent!3m2!1d41.2984061!2d69.2126816!5e0!3m2!1sen!2s!4v1723038371308!5m2!1sen!2s"
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
