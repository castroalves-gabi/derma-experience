
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  Menu,
  X,
  Droplets,
} from "lucide-react";
import "./App.css";

const treatments = [
  {
    number: "01",
    name: "Dermatologia clínica",
    description: "Cuidado integral com a saúde e o equilíbrio da sua pele.",
    tag: "SAÚDE DA PELE",
  },
  {
    number: "02",
    name: "Estética avançada",
    description: "Tratamentos personalizados para realçar sua beleza natural.",
    tag: "BELEZA NATURAL",
  },
  {
    number: "03",
    name: "Skincare personalizado",
    description: "Uma rotina de cuidados pensada exclusivamente para você.",
    tag: "AUTOCUIDADO",
  },
];

const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

  function scheduleAppointment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `Olá! Gostaria de solicitar um agendamento.

Nome: ${name}
Telefone: ${phone}
Tratamento: ${treatment}
Data: ${date}
Horário desejado: ${time}`;

    window.open(
      `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          derma<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#treatments" onClick={() => setMenuOpen(false)}>Tratamentos</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>

        <a href="#booking" className="nav-cta">
          Agendar consulta <ArrowUpRight size={16} />
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            DERMATOLOGIA & CUIDADO
          </div>

          <h1>
            Sua pele,
            <br />
            sua melhor <span>versão.</span>
          </h1>

          <p className="hero-description">
            A beleza da sua pele começa com cuidado.
            Descubra uma dermatologia que une ciência,
            tecnologia e atenção individualizada.
          </p>

          <div className="hero-actions">
            <a href="#booking" className="primary-button magnetic">
              Agende sua consulta <ArrowUpRight size={18} />
            </a>
            <a href="#treatments" className="text-button">
              Conheça os tratamentos <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-note">
            <span>Cuidado que respeita a individualidade da sua pele.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-image-placeholder">
            <div className="image-caption">
              <span>SKINCARE / 001</span>
              <span>PURE CARE</span>
            </div>
            <Droplets className="hero-drop" size={48} strokeWidth={1} />
          </div>
          <div className="floating-label">
            <span className="vertical-text">SCIENCE MEETS BEAUTY — 2026</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 — 04</span>
          <span>SCROLL TO EXPLORE</span>
          <span>PORTO ALEGRE · BRASIL</span>
        </div>
      </section>

      <section className="intro-section reveal">
        <span className="section-label">01 / NOSSA FILOSOFIA</span>
        <h2>
          Cuidar da pele é uma forma de
          <span> cuidar de você.</span>
        </h2>
        <p>
          Cada pele tem sua história. Nosso compromisso é entender
          suas necessidades e desenvolver um cuidado individual,
          consciente e baseado em ciência.
        </p>
      </section>

      <section className="treatments-section" id="treatments">
        <div className="section-heading reveal">
          <div>
            <span className="section-label">02 / EXPERIÊNCIAS</span>
            <h2>Seu cuidado,<br /><span>em cada detalhe.</span></h2>
          </div>
          <p>Abordagens personalizadas para acompanhar você em cada fase.</p>
        </div>

        <div className="treatment-grid">
          {treatments.map((item) => (
            <article className="treatment-card reveal" key={item.number}>
              <div className="card-top">
                <span>{item.number}</span>
                <ArrowUpRight size={20} />
              </div>
              <div className="liquid-shape">
                <Droplets size={34} strokeWidth={1} />
              </div>
              <div className="card-bottom">
                <span className="card-tag">{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-visual reveal">
          <div className="about-orb" />
          <div className="about-placeholder">
            <span>YOUR SKIN JOURNEY</span>
          </div>
        </div>

        <div className="about-content reveal">
          <span className="section-label">03 / SOBRE A PROFISSIONAL</span>
          <h2>
            Ciência com
            <br />um toque de <span>cuidado.</span>
          </h2>
          <p>
            Uma abordagem dermatológica que valoriza a individualidade,
            o conhecimento científico e a construção de uma relação
            de confiança com cada paciente.
          </p>
          <a href="#booking" className="text-button">
            Vamos conversar <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-intro reveal">
          <span className="section-label">04 / AGENDAMENTO</span>
          <h2>
            Sua pele merece
            <br /><span>esse momento.</span>
          </h2>
          <p>
            Escolha o tratamento, encontre o melhor horário
            e dê o primeiro passo para cuidar de você.
          </p>
          <div className="booking-decoration">
            <Droplets size={90} strokeWidth={0.7} />
          </div>
        </div>

        <form className="booking-form reveal" onSubmit={scheduleAppointment}>
          <div className="form-heading">
            <CalendarDays size={21} />
            <span>SOLICITAR AGENDAMENTO</span>
          </div>

          <label>Seu nome</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como podemos chamar você?"
            required
          />

          <label>Telefone / WhatsApp</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            required
          />

          <label>Tratamento desejado</label>
          <select value={treatment} onChange={(e) => setTreatment(e.target.value)} required>
            <option value="">Selecione uma opção</option>
            {treatments.map((item) => (
              <option key={item.number} value={item.name}>{item.name}</option>
            ))}
          </select>

          <label>Data desejada</label>
          <input
            type="date"
            value={date}
            min={new Date().toLocaleDateString("en-CA")}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label>Horário desejado</label>
          <div className="time-grid">
            {times.map((item) => (
              <button
                type="button"
                key={item}
                className={time === item ? "time-option selected" : "time-option"}
                onClick={() => setTime(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <button type="submit" className="submit-button" disabled={!time}>
            Solicitar pelo WhatsApp <ArrowUpRight size={18} />
          </button>

          <small className="form-disclaimer">
            O envio representa uma solicitação. O horário será confirmado
            diretamente pela clínica.
          </small>
        </form>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">derma<span>.</span></a>
        <p>Skin care, with intention.</p>
        <div className="footer-links">
          <a href="#home">Início</a>
          <a href="#treatments">Tratamentos</a>
          <a href="#booking">Agendamento</a>
          <a href="#about" aria-label="Instagram"><span>IG</span></a>
        </div>
        <span className="copyright">© 2026 DERMA. TODOS OS DIREITOS RESERVADOS.</span>
      </footer>
    </main>
  );
}

export default App;