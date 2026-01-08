import Image from "next/image";

// Custom Icons - friendly line-art style
const ClockIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="24" cy="24" r="20" />
    <path d="M24 14v10l7 7" strokeLinecap="round" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M24 42s-14-8.35-14-19c0-5.52 4.48-10 10-10 3.78 0 7.07 2.1 8.77 5.2A9.96 9.96 0 0134 13c5.52 0 10 4.48 10 10 0 10.65-14 19-14 19z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="4" y="16" width="28" height="20" rx="2" />
    <path d="M32 22h8l4 8v6h-12V22z" />
    <circle cx="12" cy="38" r="4" />
    <circle cx="38" cy="38" r="4" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M24 4v8M24 36v8M4 24h8M36 24h8M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6" strokeLinecap="round" />
    <circle cx="24" cy="24" r="6" />
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
      {/* Navigation - warm and simple */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#e2e8f0]/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="headline-display text-2xl text-[#1a2744]">
              Fresh Fleet
            </a>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a5568]">
              <a href="#servicios" className="hover:text-[#1a2744] transition-colors">Servicios</a>
              <a href="#como-funciona" className="hover:text-[#1a2744] transition-colors">Cómo Funciona</a>
              <a href="#empresas" className="hover:text-[#1a2744] transition-colors">Empresas</a>
              <a href="#contacto" className="bg-[#1a2744] text-white px-5 py-2 rounded-lg hover:bg-[#2d3a52] transition-colors headline-display text-sm">
                Cotizar
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

      {/* Hero Section - warm and inviting */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              <p className="font-script text-2xl text-teal-600 mb-4">
                Tu lavandería de confianza
              </p>
              <h1 className="headline-warm text-4xl md:text-5xl lg:text-6xl text-[#1a2744] mb-6">
                Tratamos tu ropa como ropa de domingo
              </h1>
              <p className="text-lg text-[#4a5568] mb-8 leading-relaxed max-w-lg">
                Somos el lugar que tu abuela confió y tus hijos también confiarán. Nos tomamos el tiempo para hacer las cosas bien—sin prisas, sin atajos. Tu ropa merece ese cuidado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="inline-block bg-[#1a2744] text-white px-8 py-4 rounded-lg text-lg headline-display hover:bg-[#2d3a52] transition-all hover:-translate-y-0.5"
                >
                  Agenda tu recolección
                </a>
                <a
                  href="#como-funciona"
                  className="inline-block border-2 border-[#1a2744] text-[#1a2744] px-8 py-4 rounded-lg text-lg headline-display hover:bg-[#1a2744] hover:text-white transition-all"
                >
                  Cómo funciona
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/hero-image.png"
                  alt="Camioneta Fresh Fleet con ropa organizada"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <p className="font-script text-xl text-teal-600">Vecinos felices</p>
                <p className="text-sm text-[#4a5568]">desde 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple tagline banner */}
      <section className="py-8 bg-[#1a2744]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-script text-2xl md:text-3xl text-white">
            "Nosotros doblamos. Tú descansas."
          </p>
        </div>
      </section>

      {/* 4 Feature Cards - warm and friendly */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-display text-3xl md:text-4xl text-[#1a2744] mb-4">
              El cuidado que recuerdas
            </h2>
            <p className="text-[#4a5568] text-lg max-w-2xl mx-auto">
              La limpieza que mereces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ClockIcon />,
                title: "Siempre a tiempo",
                desc: "Llegamos cuando decimos que llegamos. Tu tiempo es valioso y lo respetamos."
              },
              {
                icon: <HeartIcon />,
                title: "Cuidado personal",
                desc: "Cada prenda se trata con el mismo cuidado que le daríamos a nuestra propia ropa."
              },
              {
                icon: <TruckIcon />,
                title: "Recogemos y entregamos",
                desc: "Pasamos por tu ropa y la regresamos limpia, doblada y lista. Así de fácil."
              },
              {
                icon: <SparkleIcon />,
                title: "Realmente limpio",
                desc: "Sin atajos. Lavado apropiado, secado con cuidado, doblado con orgullo."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 card-warm border border-[#e2e8f0]">
                <div className="text-teal-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="headline-display text-xl text-[#1a2744] mb-2">{feature.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - B2C & B2B */}
      <section id="servicios" className="py-16 px-6 lg:px-8 bg-[#f0ebe3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-script text-xl text-teal-600 mb-2">Nuestros servicios</p>
            <h2 className="headline-display text-3xl md:text-4xl text-[#1a2744]">
              Para familias y negocios
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Service */}
            <div className="bg-white rounded-2xl p-8 card-warm">
              <span className="inline-block font-script text-lg text-teal-600 mb-4">
                Para ti y tu familia
              </span>
              <h3 className="headline-display text-2xl text-[#1a2744] mb-4">Recolección a domicilio</h3>
              <p className="text-[#4a5568] mb-6">
                Agenda, recogemos, lavamos, doblamos y entregamos. Es día de lavandería sin el trabajo de lavandería.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Recolección y entrega gratis",
                  "Listo en 24 horas si lo necesitas",
                  "Lavado, secado y doblado incluido",
                  "Cuidado especial para prendas delicadas"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#1a2744]">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="headline-display text-3xl text-[#1a2744]">$35</span>
                <span className="text-[#64748b]">MXN por kg</span>
              </div>
              <a href="#contacto" className="block w-full text-center bg-teal-600 text-white py-3 rounded-lg headline-display hover:bg-teal-700 transition-colors">
                Agendar recolección
              </a>
            </div>

            {/* Business Service */}
            <div className="bg-[#1a2744] rounded-2xl p-8 text-white">
              <span className="inline-block font-script text-lg text-teal-400 mb-4">
                Para tu negocio
              </span>
              <h3 className="headline-display text-2xl mb-4">Servicios comerciales</h3>
              <p className="text-slate-300 mb-6">
                Capacidad industrial para hoteles, restaurantes, empresas de eventos, gimnasios y spas. Mismo cuidado, mayor volumen.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Máquinas comerciales de alto volumen",
                  "Planchado profesional de manteles",
                  "Recolecciones programadas",
                  "Facturación flexible"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="headline-display text-3xl">Cotización</span>
                <span className="text-slate-400">personalizada</span>
              </div>
              <a href="#contacto" className="block w-full text-center bg-teal-400 text-[#1a2744] py-3 rounded-lg headline-display hover:bg-teal-300 transition-colors">
                Pedir cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-script text-xl text-teal-600 mb-2">Así de fácil</p>
            <h2 className="headline-display text-3xl md:text-4xl text-[#1a2744]">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Agenda", desc: "Llámanos o escríbenos. Escoge el día y hora que te funcione." },
              { num: "2", title: "Recogemos", desc: "Pasamos por tu ropa. La lavamos, secamos y doblamos con cuidado." },
              { num: "3", title: "Entregamos", desc: "Te la llevamos limpia, fresca y lista. Generalmente al día siguiente." }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white headline-display text-2xl">{step.num}</span>
                </div>
                <h3 className="headline-display text-xl text-[#1a2744] mb-2">{step.title}</h3>
                <p className="text-[#64748b]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Promise Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#1a2744] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-script text-2xl text-teal-400 mb-6">Nuestra promesa</p>
          <h2 className="headline-display text-3xl md:text-4xl mb-8">
            Camisas crujientes. Toallas calientitas. Vecinos contentos.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { num: "01", text: "Llegamos cuando dijimos que llegaríamos" },
              { num: "02", text: "Hacemos lo que dijimos que haríamos" },
              { num: "03", text: "Tu ropa regresa mejor que antes" }
            ].map((promise, idx) => (
              <div key={idx}>
                <span className="font-script text-4xl text-teal-400 block mb-2">{promise.num}</span>
                <p className="text-slate-300">{promise.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Pricing Section */}
      <section id="empresas" className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-script text-xl text-teal-600 mb-2">Para negocios</p>
              <h2 className="headline-display text-3xl md:text-4xl text-[#1a2744] mb-6">
                Capacidad industrial, trato personal
              </h2>
              <p className="text-lg text-[#4a5568] mb-8">
                Nuestras máquinas comerciales procesan grandes volúmenes sin sacrificar la calidad. Perfecto para hoteles, restaurantes, eventos y más.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Eventos", desc: "Manteles, servilletas" },
                  { title: "Hoteles", desc: "Sábanas, toallas" },
                  { title: "Restaurantes", desc: "Mantelería, uniformes" },
                  { title: "Gimnasios", desc: "Toallas en volumen" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f0ebe3] rounded-lg p-4">
                    <h4 className="headline-display text-[#1a2744] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#64748b]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e2e8f0]">
              <h3 className="headline-display text-xl text-[#1a2744] mb-6">Planes mensuales</h3>
              <div className="space-y-4">
                {[
                  { name: "Básico", price: "$15,000", features: "Hasta 200 kg/semana", popular: false },
                  { name: "Profesional", price: "$28,000", features: "Hasta 400 kg/semana", popular: true },
                  { name: "Empresarial", price: "$50,000", features: "Hasta 800 kg/semana", popular: false }
                ].map((tier, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      tier.popular ? 'border-teal-500 bg-teal-50' : 'border-[#e2e8f0] hover:border-teal-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="headline-display text-[#1a2744]">{tier.name}</span>
                      <span className="headline-display text-teal-600">{tier.price}<span className="text-sm text-[#64748b] font-normal">/mes</span></span>
                    </div>
                    <p className="text-sm text-[#64748b]">{tier.features}</p>
                    {tier.popular && <span className="inline-block mt-2 text-xs font-semibold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">Más popular</span>}
                  </div>
                ))}
              </div>
              <a href="#contacto" className="mt-6 block w-full text-center bg-[#1a2744] text-white py-3 rounded-lg headline-display hover:bg-[#2d3a52] transition-colors">
                Platiquemos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 lg:px-8 bg-[#f0ebe3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-script text-xl text-teal-600 mb-2">Vecinos contentos</p>
            <h2 className="headline-display text-3xl md:text-4xl text-[#1a2744]">
              Lo que dicen de nosotros
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "María S.",
                text: "¡Por fin una lavandería que cumple! Con dos niños, la ropa se acumulaba. Ahora simplemente desaparece y regresa perfecta.",
                rating: 5
              },
              {
                name: "David L.",
                text: "Para mis eventos necesito manteles impecables. Fresh Fleet siempre entrega a tiempo y perfectamente planchados.",
                rating: 5
              },
              {
                name: "Jennifer K.",
                text: "Nuestro hotel boutique confía en Fresh Fleet desde hace meses. Calidad consistente y servicio de primera.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 card-warm">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} filled />
                  ))}
                </div>
                <p className="text-[#4a5568] text-sm mb-4 italic">"{testimonial.text}"</p>
                <p className="headline-display text-[#1a2744]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-16 px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-script text-xl text-teal-600 mb-2">¿Listo para empezar?</p>
            <h2 className="headline-display text-3xl md:text-4xl text-[#1a2744] mb-4">
              Platiquemos
            </h2>
            <p className="text-[#64748b]">
              Cuéntanos qué necesitas y te contactamos en menos de 24 horas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e2e8f0]">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a2744] mb-1.5">Tu nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1a2744] mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                    placeholder="(55) 1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-[#1a2744] mb-1.5">¿Qué necesitas?</label>
                <select
                  id="type"
                  name="type"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="personal">Servicio personal / familiar</option>
                  <option value="event">Eventos (manteles, servilletas)</option>
                  <option value="hotel">Hotel / Hospedaje</option>
                  <option value="restaurant">Restaurante</option>
                  <option value="gym">Gimnasio / Spa</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a2744] mb-1.5">Cuéntanos más (opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none resize-none"
                  placeholder="¿Cuánta ropa tienes? ¿Cada cuándo necesitas servicio?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-teal-600 text-white headline-display text-lg hover:bg-teal-700 transition-colors"
              >
                Enviar mensaje
              </button>

              <p className="text-center text-sm text-[#64748b]">
                Respondemos en menos de 24 horas
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-[#1a2744] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <span className="headline-display text-2xl text-white block mb-2">Fresh Fleet</span>
              <p className="font-script text-xl text-teal-400 mb-4">Tu lavandería de confianza</p>
              <p className="text-slate-400 text-sm">
                El cuidado que recuerdas. La limpieza que mereces.
              </p>
            </div>

            <div>
              <h4 className="headline-display text-sm mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="text-slate-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">Cómo funciona</a></li>
                <li><a href="#empresas" className="text-slate-400 hover:text-white transition-colors">Empresas</a></li>
                <li><a href="#contacto" className="text-slate-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="headline-display text-sm mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hola@freshfleet.mx</li>
                <li>(55) 1234-5678</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Fresh Fleet. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
