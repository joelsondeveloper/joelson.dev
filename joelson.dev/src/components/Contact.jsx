"use client";

import { FaPaperPlane } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

import { useState } from "react";

import InputForm from "./InputForm";
import Modal from "./Modal";
import Tech from "./Tech";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [modalData, setModalData] = useState({ title: "", content: "" });

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    formData.set("_captcha", "false");
    formData.set("_template", "table");

    try {
      const res = await fetch(
        "https://formsubmit.co/vicentejoelson80@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setFormStatus("success");
        setModalData({
          title: "Mensagem enviada com sucesso!",
          content: `Obrigado, ${name}! Em breve entrarei em contato.`,
        });
        form.reset();
      } else {
        setFormStatus("error");
        setModalData({
          title: "Ops! Algo deu errado.",
          content:
            "Não consegui enviar sua mensagem. Tente novamente mais tarde.",
        });
      }
    } catch (error) {
      setFormStatus("error");
      setModalData({
        title: "Erro de conexão",
        content: "Não foi possível enviar sua mensagem agora. Tente depois.",
      });
    }
  }

  return (
    <section id="contact" className="px-8 py-16 flex flex-col gap-8 bg-cinza">
      <header className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-4xl color-azul">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-lg color-cinza">
          Entre em contato comigo para discutir seu próximo projeto
        </p>
      </header>
      <div className="content flex justify-between flex-wrap  gap-8">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="md:max-w-[37.5rem] w-full mx-auto bg-white p-8 rounded-lg flex flex-col gap-8 shadow-lg"
        >
          <header className="flex flex-col gap-3">
            <div className="title flex items-center gap-3">
              <div className="icon w-[2.5rem] aspect-square rounded-lg bg-azul flex items-center justify-center">
                <HiOutlineMail size="1.25rem" className="text-white" />
              </div>
              <span className="font-semibold text-xl">Envie uma Mensagem</span>
            </div>
            <p className="text-sm color-cinza">
              Preencha o formulário e entrarei em contato em até 24 horas
            </p>
          </header>
          <div className="fields flex flex-col gap-6">
            <div className="row flex gap-4 flex-col md:flex-row">
              <InputForm
                title="Nome"
                placeholder="Seu nome completo"
                name="name"
              />
              <InputForm
                title="E-mail"
                placeholder="seu@email.com"
                type="email"
                name="email"
              />
            </div>
            <InputForm
              title="Assunto"
              placeholder="Sobre o que gostaria de conversar?"
              name="subject"
            />
            <InputForm
              title="Mensagem"
              placeholder="Conte-me sobre seu projeto..."
              type="textarea"
              name="message"
            />
          </div>
          <div className="actions flex flex-col gap-4">
            <button className="btn-primary w-full bg-azul text-white flex justify-center items-center py-4 gap-3">
              <FaPaperPlane />
              <span className="font-semibold">Enviar Mensagem</span>
            </button>
            <p className="text-sm color-cinza">* Campos obrigatórios</p>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
        </form>
        <div className="info mx-auto min-w-[25rem] flex flex-col gap-8">
          <div className="details flex flex-col gap-6">
            <h3 className="font-semibold text-2xl">Outras Formas de Contato</h3>
            <ul className="flex flex-col gap-4">
              <Tech
                svg={<HiOutlineMail size="1.5rem" color="white" />}
                color="bg-azul"
                size="3rem"
                modal="mailto:vicentejoelson80@gmail.com"
                title="E-mail"
                description="vicentejoelson80@gmail.com"
              />
              <Tech
                svg={<HiOutlinePhone size="1.5rem" color="white" />}
                color="bg-verde"
                size="3rem"
                modal="https://wa.me/5581987612791"
                title="WhatsApp"
                description="+55 (11) 8761-2791"
              />
              <Tech
                svg={<HiOutlineLocationMarker size="1.5rem" color="white" />}
                color="bg-laranja"
                size="3rem"
                modal={false}
                title="Localização"
                description="Cabo de Santo Agostinho, PE - Brasil"
              />
            </ul>
          </div>
          <div className="media flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">Me Siga nas Redes</h3>
            <ul className="flex gap-4">
              <Tech
                svg={<FiGithub size="1.5rem" color="white" />}
                color="bg-preto"
                size="3rem"
                modal="https://github.com/joelsondeveloper"
              />
              <Tech
                svg={<FiLinkedin size="1.5rem" color="white" />}
                color="bg-azul"
                size="3rem"
                modal="https://www.linkedin.com/in/joelson-vicente-957589278/"
              />
              <Tech
                svg={<FiInstagram size="1.5rem" color="white" />}
                color="gradient"
                size="3rem"
                modal="https://www.instagram.com/_joelson._/"
              />
            </ul>
          </div>
        </div>
      </div>
      <Modal isOpen={formStatus !== null} onClose={() => setFormStatus(null)}>
        <h2 className="text-xl font-bold mb-4 color-azul">{modalData.title}</h2>
        <p className="font-medium text-sm color-cinza">{modalData.content}</p>
      </Modal>
    </section>
  );
};

export default Contact;
