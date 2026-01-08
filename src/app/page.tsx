import Image from "next/image";

// Custom Icons matching Pink's line-art style
const ClockIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="24" cy="24" r="20" />
    <path d="M24 14v10l7 7" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M24 4L6 12v12c0 11 8 17 18 20 10-3 18-9 18-20V12L24 4z" />
    <path d="M16 24l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="4" y="16" width="28" height="20" rx="2" />
    <path d="M32 22h8l4 8v6h-12V22z" />
    <circle cx="12" cy="38" r="4" />
    <circle cx="38" cy="38" r="4" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M24 4v8M24 36v8M4 24h8M36 24h8M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6" strokeLinecap="round" />
    <circle cx="24" cy="24" r="8" />
  </svg>
);

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
    <path d="M10 1l2.39 6.15H19l-5.3 4.1L16.1 19 10 15.27 3.9 19l2.4-7.75L1 7.15h6.61L10 1z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navigation - Pink's style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left nav */}
            <div className="hidden md:flex items-center gap-8 headline-display text-sm tracking-widest text-[#1a2744]">
              <a href="#servicios" className="nav-link hover:text-teal-600 transition-colors">Servicios</a>
              <a href="#empresas" className="nav-link hover:text-teal-600 transition-colors">Empresas</a>
            </div>

            {/* Logo - Center */}
            <div className="flex items-center gap-2">
              <span className="headline-display text-2xl md:text-3xl text-teal-600 tracking-wide">Fresh Fleet</span>
            </div>

            {/* Right nav */}
            <div className="hidden md:flex items-center gap-8 headline-display text-sm tracking-widest text-[#1a2744]">
              <a href="#como-funciona" className="nav-link hover:text-teal-600 transition-colors">Cómo Funciona</a>
              <a href="#contacto" className="bg-teal-600 text-white px-5 py-2.5 rounded-full hover:bg-teal-700 transition-colors">
                Cotizar!
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-[#1a2744]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Pink's style with image on left */}
      <section className="pt-24 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-image.png"
                alt="Camioneta Fresh Fleet con ropa organizada"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Hero Content */}
            <div className="lg:pl-8 py-8">
              <h1 className="headline-retro-lg text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Limpio,<br />
                <span className="headline-retro-teal">Fresco y Rápido</span>
              </h1>
              <div className="space-y-4 text-lg text-[#4a5568] mb-8 max-w-lg">
                <p>
                  Fresh Fleet nace de la idea de ofrecer un servicio de lavandería de clase mundial a un precio justo. Nuestro objetivo es hacer tu vida más fácil—y devolverte algo de tiempo precioso.
                </p>
                <p>
                  Nos enorgullecemos de nuestro trabajo, sin importar la carga. Ya sea que manejemos tu ropa semanal, planchemos manteles para tu evento, o procesemos pedidos en volumen para tu hotel, tratamos tus artículos con el máximo cuidado.
                </p>
              </div>
              <a
                href="#contacto"
                className="inline-block bg-[#1a2744] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2d3a52] transition-colors headline-display tracking-wider"
              >
                Cotización en 24 Horas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Cards - Pink's style */}
      <section className="py-12 px-6 lg:px-8 bg-[#f0ebe3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ClockIcon />,
                title: "Cotizaciones Rápidas",
                desc: "Ofrecemos cotizaciones gratis en todos los pedidos. Llama o escríbenos y te daremos un precio justo en 24 horas."
              },
              {
                icon: <ShieldIcon />,
                title: "Estamos Asegurados",
                desc: "¡No te preocupes! Contamos con seguro de responsabilidad civil que protege tus artículos durante todo el proceso."
              },
              {
                icon: <TruckIcon />,
                title: "Somos Confiables",
                desc: "Entendemos que tu tiempo es valioso. Damos ventanas de recolección y entrega fijas—no rangos vagos."
              },
              {
                icon: <SparkleIcon />,
                title: "Respetamos Tus Cosas",
                desc: "El principio de 'tratarlo como propio' es nuestra filosofía. Cada artículo se clasifica, etiqueta y maneja con cuidado."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#faf8f5] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-teal-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="headline-display text-xl text-[#1a2744] mb-3">{feature.title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Banner - Pink's "We believe in bringing back the lost art..." style */}
      <section className="relative py-32 px-6 lg:px-8 bg-[#1a2744] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero-image.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="headline-retro-lg text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight" style={{ WebkitTextStroke: '3px white', color: 'transparent' }}>
            Creemos en Rescatar<br />
            el Arte Perdido del <span className="headline-retro-teal">Buen Servicio...</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#servicios" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1a2744] transition-colors headline-display tracking-wider">
              Nuestros Servicios
            </a>
            <a href="#empresas" className="inline-block border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-full hover:bg-teal-400 hover:text-[#1a2744] transition-colors headline-display tracking-wider">
              Para Empresas
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - B2C & B2B */}
      <section id="servicios" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-retro text-4xl md:text-5xl mb-4">
              Dos Formas de <span className="headline-retro-teal">Servirte</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e2e8f0]">
              <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold mb-6 headline-display tracking-wider">
                Para Ti y Tu Familia
              </span>
              <h3 className="headline-display text-3xl text-[#1a2744] mb-4">Recolección y Entrega</h3>
              <p className="text-[#4a5568] mb-6">
                Agenda una recolección y nosotros lavamos, secamos, doblamos y entregamos en tu puerta. Es día de lavandería sin la lavandería.
              </p>
              <ul className="space-y-3 mb-8">
                {["Recolección y entrega gratis", "Entrega en 24 horas disponible", "Lavado, secado y doblado incluido", "Cuidado especial para delicados"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#1a2744]">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#1a2744]">$35</span>
                <span className="text-[#718096]">MXN por kg</span>
              </div>
              <a href="#contacto" className="block w-full text-center bg-teal-600 text-white py-4 rounded-full font-semibold hover:bg-teal-700 transition-colors headline-display tracking-wider">
                Agenda Tu Primera Recolección
              </a>
            </div>

            {/* Business Service */}
            <div className="bg-[#1a2744] rounded-2xl p-8 shadow-lg text-white">
              <span className="inline-block bg-teal-400/20 text-teal-300 px-4 py-1 rounded-full text-sm font-semibold mb-6 headline-display tracking-wider">
                Para Empresas
              </span>
              <h3 className="headline-display text-3xl mb-4">Servicios Comerciales</h3>
              <p className="text-slate-300 mb-6">
                Procesamiento de capacidad industrial para hoteles, restaurantes, empresas de eventos, gimnasios y spas. Precios por volumen con atención personalizada.
              </p>
              <ul className="space-y-3 mb-8">
                {["Máquinas comerciales de 30-40 kg", "Planchado profesional", "Recolecciones programadas", "Facturación a 30 días disponible"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">Precios</span>
                <span className="text-slate-400">personalizados por volumen</span>
              </div>
              <a href="#contacto" className="block w-full text-center bg-teal-400 text-[#1a2744] py-4 rounded-full font-semibold hover:bg-teal-300 transition-colors headline-display tracking-wider">
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise Section - Pink's numbered style */}
      <section className="py-20 px-6 lg:px-8 bg-[#f0ebe3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 mx-auto bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white headline-display text-2xl">FF</span>
              </div>
            </div>
            <h2 className="headline-retro text-4xl md:text-5xl mb-4">
              La Promesa<br /><span className="headline-retro-teal">Fresh Fleet</span>
            </h2>
            <p className="text-lg text-[#4a5568] italic">
              "Tu tiempo nunca debe darse por sentado. Por eso siempre vamos a:"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: ".01", text: "Recoger a tiempo (lo que significa que estaremos ahí cuando dijimos que llegaríamos)." },
              { num: ".02", text: "Hacer lo que dijimos que haríamos. Nuestra palabra lo es todo, y buscamos superar expectativas." },
              { num: ".03", text: "Devolver tus artículos más limpios, frescos y mejor que antes." }
            ].map((promise, idx) => (
              <div key={idx} className="text-center">
                <span className="headline-display text-5xl text-teal-600 block mb-4">{promise.num}</span>
                <p className="text-[#4a5568]">{promise.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Pricing Section */}
      <section id="empresas" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#1a2744] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 headline-display tracking-wider">
                Hecho para Negocios
              </span>
              <h2 className="headline-retro text-4xl md:text-5xl mb-6">
                Capacidad Industrial<br />
                <span className="headline-retro-teal">Para Tus Necesidades</span>
              </h2>
              <p className="text-lg text-[#4a5568] mb-8">
                Nuestras máquinas comerciales de 30-40 kg procesan en 55 minutos lo que a la competencia le toma 8 cargas. Perfecto para empresas de eventos, hoteles, restaurantes e instalaciones deportivas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Empresas de Eventos", desc: "Manteles, servilletas, blancos" },
                  { title: "Hoteles y B&Bs", desc: "Sábanas, toallas, ropa de cama" },
                  { title: "Restaurantes", desc: "Mantelería, uniformes" },
                  { title: "Gimnasios y Spas", desc: "Toallas en alto volumen" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f0ebe3] rounded-lg p-4">
                    <h4 className="font-bold text-[#1a2744] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#4a5568]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#e2e8f0]">
              <h3 className="headline-display text-2xl text-[#1a2744] mb-6">Opciones de Contrato Mensual</h3>
              <div className="space-y-4">
                {[
                  { name: "Bronce", price: "$15,000", features: "Hasta 200 kg/semana • 2x semanal • 48hrs", popular: false },
                  { name: "Plata", price: "$28,000", features: "Hasta 400 kg/semana • 3x semanal • 24hrs", popular: true },
                  { name: "Oro", price: "$50,000", features: "Hasta 800 kg/semana • Diario • Mismo día", popular: false }
                ].map((tier, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl border-2 cursor-pointer transition-all hover:border-teal-400 ${
                      tier.popular ? 'border-teal-500 bg-teal-50' : 'border-[#e2e8f0]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg text-[#1a2744]">{tier.name}</span>
                      <span className="text-2xl font-bold text-teal-600">{tier.price}<span className="text-sm text-[#718096] font-normal">/mes</span></span>
                    </div>
                    <p className="text-sm text-[#4a5568]">{tier.features}</p>
                    {tier.popular && <span className="inline-block mt-2 text-xs font-semibold text-teal-700 uppercase headline-display tracking-wider">Más Popular</span>}
                  </div>
                ))}
              </div>
              <a href="#contacto" className="mt-6 block w-full text-center bg-[#1a2744] text-white py-4 rounded-full font-semibold hover:bg-[#2d3a52] transition-colors headline-display tracking-wider">
                Platiquemos de Tus Necesidades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Pink's style */}
      <section className="py-20 px-6 lg:px-8 bg-[#1a2744]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-retro-lg text-3xl md:text-4xl" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María S.",
                text: "¡Fresh Fleet ha sido un cambio total para nuestra familia! Con dos hijos y trabajos demandantes, la ropa siempre se acumulaba. Ahora simplemente... desaparece y regresa fresca.",
                rating: 5
              },
              {
                name: "David L.",
                text: "Como organizador de eventos, necesito un servicio de blancos confiable. Fresh Fleet cumple—literalmente. Manteles perfectamente planchados, a tiempo, siempre.",
                rating: 5
              },
              {
                name: "Jennifer K.",
                text: "Cambiamos la lavandería de nuestro hotel boutique a Fresh Fleet hace seis meses. La calidad es consistentemente excelente y su entrega en 24 horas nos ha salvado.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#faf8f5] rounded-xl p-6">
                <h4 className="font-bold text-[#1a2744] mb-2">{testimonial.name}</h4>
                <p className="text-[#4a5568] text-sm mb-4 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} filled />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="headline-retro text-4xl md:text-5xl mb-4">
            Cómo <span className="headline-retro-teal">Funciona</span>
          </h2>
          <p className="text-lg text-[#4a5568] mb-12">Fácil como 1-2-3. Nosotros hacemos lo difícil.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Agenda Recolección", desc: "Reserva en línea o llámanos. Elige el horario que te funcione." },
              { num: "2", title: "Recolectamos y Lavamos", desc: "Nuestro equipo recoge, procesa en nuestra instalación industrial, y revisa la calidad de cada artículo." },
              { num: "3", title: "Entrega Fresca", desc: "Limpio, doblado y entregado en tu puerta—generalmente en 24 horas." }
            ].map((step, idx) => (
              <div key={idx}>
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white headline-display text-2xl">{step.num}</span>
                </div>
                <h3 className="headline-display text-xl text-[#1a2744] mb-2">{step.title}</h3>
                <p className="text-[#4a5568]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 px-6 lg:px-8 bg-[#f0ebe3]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-retro text-4xl md:text-5xl mb-4">
              Vamos a <span className="headline-retro-teal">Empezar</span>
            </h2>
            <p className="text-lg text-[#4a5568]">
              ¿Listo para recuperar tu tiempo? Cuéntanos sobre tus necesidades de lavandería.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1a2744] mb-2">Tu Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1a2744] mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1a2744] mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                  placeholder="(55) 1234-5678"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-[#1a2744] mb-2">Me interesa...</label>
                <select
                  id="type"
                  name="type"
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="personal">Recolección y Entrega Personal</option>
                  <option value="event">Servicios para Eventos</option>
                  <option value="hotel">Servicios para Hotel / B&B</option>
                  <option value="restaurant">Servicios para Restaurante</option>
                  <option value="gym">Servicios para Gimnasio / Spa</option>
                  <option value="other">Otras Necesidades Comerciales</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1a2744] mb-2">Cuéntanos más (opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5] resize-none"
                  placeholder="Volumen estimado, requerimientos especiales, preguntas..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-teal-600 text-white font-semibold text-lg hover:bg-teal-700 transition-colors headline-display tracking-wider"
              >
                Obtener Mi Cotización Gratis
              </button>

              <p className="text-center text-sm text-[#718096]">
                Respondemos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Pink's style */}
      <footer className="py-12 px-6 lg:px-8 bg-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Quote CTA */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="headline-display text-2xl text-teal-400">Fresh Fleet</span>
              </div>
              <p className="text-slate-400 mb-2">Respuesta en 24 horas</p>
            </div>

            {/* Links */}
            <div className="flex gap-12">
              <div>
                <ul className="space-y-2 text-sm">
                  <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">Servicios</a></li>
                  <li><a href="#empresas" className="text-slate-400 hover:text-white transition-colors">Empresas</a></li>
                  <li><a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">Cómo Funciona</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-sm">
                  <li><a href="#contacto" className="text-slate-400 hover:text-white transition-colors">Cotizar</a></li>
                  <li><span className="text-slate-400">hola@freshfleet.mx</span></li>
                  <li><span className="text-slate-400">(55) 1234-5678</span></li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-end items-start">
              <a href="#contacto" className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors headline-display tracking-wider">
                Cotizar!
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Fresh Fleet. Todos los Derechos Reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
