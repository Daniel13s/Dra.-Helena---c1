"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>()!;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-70 z-50 flex flex-col items-center justify-center">
          <div className="bg-white w-3/4 h-auto rounded-lg p-6 flex flex-col items-center gap-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-gray-600 hover:text-gray-900"
            >
              <IoIosClose size={30} />
            </button>
            <nav className="flex flex-col items-center gap-4">
              <a
                onClick={() => setMenuOpen(false)}
                href="#services"
                className="text-lg font-medium text-gray-800 hover:text-gray-600"
              >
                Serviços
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#about"
                className="text-lg font-medium text-gray-800 hover:text-gray-600"
              >
                Sobre Mim
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#contact"
                className="text-lg font-medium text-gray-800 hover:text-gray-600"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
      <div className={`overflow-x-hidden ${menuOpen ? "blur-sm" : ""}`}>
        {/* Header e Menu Mobile */}
        <main className="w-screen h-screen shadow-md shadow-black bg-[#93B7BE] rounded-b-3xl flex flex-col justify-start items-center gap-20 min-[800px]:gap-25 p-2 min-[800px]:p-7">
          <div className="w-screen flex justify-between px-10 items-center">
            <h3 className="font-semibold ">Dra. Helena Moreira</h3>
            {windowWidth! <= 800 ? (
              <button onClick={() => setMenuOpen(true)}>
                <HiMenuAlt3 size={30} />
              </button>
            ) : (
              <nav className="flex gap-10">
                <a
                  href="#services"
                  className="font-medium hover:underline underline-offset-4"
                >
                  Serviços
                </a>
                <a
                  href="#about"
                  className="font-medium hover:underline underline-offset-4"
                >
                  Sobre Mim
                </a>
                <a
                  href="#contact"
                  className="font-medium hover:underline underline-offset-4"
                >
                  Contato
                </a>
              </nav>
            )}
          </div>
          <section className=" w-auto h-auto flex flex-col justify-center items-center gap-2 min-[800px]:flex-row min-[800px]:gap-10">
            <div className="text-center flex flex-col gap-2">
              <h1 className="text-xl font-bold">
                Auto cuidado nunca é demais, Psicóloga Clínica em São José dos
                Campos
              </h1>
              <h2>
                Dar o primeiro passo pode ser difícil, mas você não precisa fazer
                isso sozinho(a).
              </h2>
              <button className={`bg-[#785964] hover:bg-[#5a414a] text-white font-bold py-2 px-4 rounded-4xl shadow-black shadow-md ${windowWidth! <= 800 ? "hidden" : "block"}`}>
            Agende sua consulta
          </button>
            </div>
            <Image
              className="rounded-2xl"
              alt="imagem ilustrativa - psicologia"
              src="https://media.istockphoto.com/id/1294477039/pt/vetorial/metaphor-bipolar-disorder-mind-mental-double-face-split-personality-concept-mood-disorder.jpg?s=612x612&w=0&k=20&c=jkauofkTyrs3mcJL2QqMtXYe-qBjGNv-YeaDY-I9Eyg="
              width={windowWidth! >= 800 ? 400 : 200}
              height={100}
            ></Image>
          </section>
            <button className={`bg-[#785964] hover:bg-[#5a414a] text-white font-bold py-2 px-4 rounded-4xl shadow-black shadow-md ${windowWidth! >= 800 ? "hidden" : "block"}`}>
            Agende sua consulta
          </button>
        </main>

        {/* Seção de Serviços Oferecidos */}
        <section id="services">
          <h2 className="text-center text-2xl font-bold mt-10">
            Serviços Oferecidos
          </h2>
          <ul className="mt-4 max-w-xl mx-auto flex flex-wrap min-[800px]:grid min-[800px]:grid-cols-3 min-[800px]:gap-x-20 min-[800px]:place-items-center gap-4 justify-center">
            <li className="shadow-gray-500 shadow-md mb-2 w-50 h-55 rounded-2xl bg-[#D5C7BC] flex flex-col items-center justify-center text-center font-semibold">
              <Image
                className="rounded-xl"
                src="https://img.freepik.com/vetores-premium/ilustracao-do-conceito-de-psicologia_1995-186.jpg"
                width={180}
                height={40}
                alt="imagem ilustrativa"
              ></Image>
              Terapia Cognitivo-Comportamental
            </li>
            <li className="shadow-gray-500 shadow-md mb-2 w-50 h-55 rounded-2xl bg-[#D5C7BC] flex flex-col items-center justify-center text-center font-semibold">
              <Image
                className="rounded-xl"
                src="https://img.freepik.com/vetores-gratis/visita-desenhada-a-mao-ao-conceito-de-psicologo_52683-69070.jpg?semt=ais_hybrid&w=740&q=80"
                width={180}
                height={40}
                alt="imagem ilustrativa"
              ></Image>
              Psicologia do Desenvolvimento
            </li>
            <li className="shadow-gray-500 shadow-md mb-2 w-50 h-55 rounded-2xl bg-[#D5C7BC] flex flex-col items-center justify-center text-center font-semibold">
              <Image
                className="rounded-xl"
                src="https://img.freepik.com/fotos-gratis/ilustracao-de-estilo-de-arte-digital-para-a-conscientizacao-sobre-o-dia-da-saude-mental_23-2151813251.jpg?semt=ais_hybrid&w=740&q=80"
                width={180}
                height={40}
                alt="imagem ilustrativa"
              ></Image>
              Terapia Online
            </li>
            <li className="shadow-gray-500 shadow-md mb-2 w-50 h-55 rounded-2xl bg-[#D5C7BC] flex flex-col items-center justify-center text-center font-semibold">
              <Image
                className="rounded-xl"
                src="https://img.freepik.com/fotos-gratis/ilustracao-de-estilo-de-arte-digital-para-a-conscientizacao-sobre-o-dia-da-saude-mental_23-2151813329.jpg?semt=ais_hybrid&w=740&q=80"
                width={180}
                height={40}
                alt="imagem ilustrativa"
              ></Image>
              Apoio Emocional
            </li>
            <li className="shadow-gray-500 shadow-md mb-2 w-50 h-55 rounded-2xl bg-[#D5C7BC] flex flex-col items-center justify-center text-center font-semibold">
              <Image
                className="rounded-xl"
                src="https://img.freepik.com/vetores-premium/ilustracao-vetorial-de-sessao-de-terapia-psicologica-mulher-deitada-no-sofa-e-psicologo-ouvindo-na-poltrona-conceito-de-saude-e-psicologia-mental_646079-51.jpg"
                width={180}
                height={40}
                alt="imagem ilustrativa"
              ></Image>
              Consultas para Ansiedade e Depressão
            </li>
          </ul>
        </section>
        {/* Seção Sobre Mim e Formulário de Contato */}
        <section id="about" className="w-screen h-auto p-3 flex flex-col gap-4 mt-30 justify-center items-start border-b-black border-b-1 pb-20 min-[800px]:flex-row min-[800px]:px-20">
          <div>
            <h2 className="text-2xl font-bold">Sobre Mim</h2>
            <p>
              Sou psicóloga clínica formada há mais de 8 anos, com atuação focada
              na Terapia Cognitivo-Comportamental. Acredito que o processo
              terapêutico deve ser um espaço seguro, acolhedor e livre de
              julgamentos, onde cada pessoa possa se expressar com autenticidade.
              <br />
              <br /> Meu trabalho é ajudar você a compreender seus pensamentos,
              emoções e comportamentos, promovendo mudanças práticas que impactem
              positivamente sua vida. Cada atendimento é conduzido de forma ética,
              empática e personalizada, respeitando o tempo e a história de cada
              paciente.
            </p>
          </div>
            <div className="w-screen h-auto flex justify-center items-center">
            <Image
              className="rounded-xl shadow-md shadow-black"
              src="/doutora-helena.webp"
              width={windowWidth! >= 800 ? 250 : 200}
              height={200}
              alt="imagem de Dra. Helena"
            ></Image>
          </div>
        </section>
        <section id="contact" className="w-screen h-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">Agende sua consulta</h2>
          <input
            type="text"
            placeholder="Seu nome"
            className="mt-4 p-2 border-2 border-gray-300 rounded-lg w-74 min-[800px]:w-100"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="mt-4 p-2 border-2 border-gray-300 rounded-lg w-74 min-[800px]:w-100"
          />
          <div className="flex gap-3">
            <select className="mt-4 p-2 border-2 border-gray-300 rounded-lg w-50 min-[800px]:w-70">
              <option value="">Selecione um serviço:</option>
              <option value="terapia-online">Terapia Online</option>
              <option value="apoio-emocional">Apoio Emocional</option>
              <option value="consultas-ansiedade-depressao">
                Consultas para Ansiedade e Depressão
              </option>
            </select>
            <button className="w-20 min-[800px]:w-27 mt-6 bg-[#785964] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl shadow-black shadow-md">
              Enviar
            </button>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-[#93B7BE] w-screen h-40 shadow-sm shadow-black flex justify-center items-center">
          <h3 className="text-center text-[12px] min-[800px]:text-[15px] opacity-50">
            © 2024 Dra. Helena. Todos os direitos reservados.
          </h3>
        </footer>
      </div>
    </>
  );
}
