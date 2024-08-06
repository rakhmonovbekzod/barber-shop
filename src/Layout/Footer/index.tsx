/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Heading, Stack } from "@chakra-ui/react";
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
      }, 2500);

      setIsLoading(false);
    });
  };
  return (
    <div className="footer">
      <Modal isOpen={show} size="xl" isCentered motionPreset="slideInBottom">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <Stack style={{ padding: 20 + "px" }} spacing={6}>
            <Heading as="h4" size="md">
              Sizning so'rovingiz qabul qilindi. Tez orada siz bilan bo'glanamiz
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

            <form
              onSubmit={sendData}
              className="form"
              action="https://t.me/bekzodrakhmonovbot/Test"
            >
              <span className="input_wrapper">
                <span className="icon icon-user"></span>
                <input
                  ref={nameRef}
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
