import Image from "next/image";
import { Star, Check, ArrowRight, Menu } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      {/* Navigation - Clean, editorial */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--cream)] overflow-hidden">
                <Image
                  src="/logo-v2.png"
                  alt="Fresh Fleet"
                  width={40}
                  height={40}
                  className="w-full h-full mix-blend-multiply"
                />
              </div>
              <span className="headline-small">Fresh Fleet</span>
            </a>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="body-small text-[var(--navy)] hover:text-[var(--accent)] transition-colors">Servicios</a>
              <a href="#empresas" className="body-small text-[var(--navy)] hover:text-[var(--accent)] transition-colors">Empresas</a>
              <a href="#proceso" className="body-small text-[var(--navy)] hover:text-[var(--accent)] transition-colors">Proceso</a>
              <a href="#contacto" className="btn-primary btn-sm">
                Contacto
              </a>
            </div>

            {/* Mobile menu */}
            <button className="md:hidden text-[var(--navy)] p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bold, generous, impactful */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              <p className="label-accent mb-6 text-base tracking-widest animate-hero animate-delay-1">Tu vecino de confianza</p>

              <h1 className="headline-section mb-8 animate-hero animate-delay-2" style={{
                fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              }}>
                Ropa limpia,<br />
                <span className="text-[var(--accent)]">tiempo para lo que importa.</span>
              </h1>

              <p className="text-xl lg:text-2xl mb-10 max-w-lg leading-relaxed text-[var(--navy-muted)] animate-hero animate-delay-3">
                Lavandería con recogido y entrega. Para familias,
                hoteles y negocios que valoran cada hora.
              </p>

              {/* Price point - bigger */}
              <div className="flex items-baseline gap-3 mb-10 animate-hero animate-delay-4">
                <span className="price-hero">$2.50</span>
                <span className="text-lg text-[var(--navy-muted)]">por libra</span>
              </div>

              {/* CTA Buttons - larger */}
              <div className="flex flex-wrap gap-5 mb-12 animate-hero animate-delay-5">
                <a href="#contacto" className="btn-accent text-base px-8 py-4">
                  Programar recogida
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#proceso" className="btn-secondary text-base px-8 py-4">
                  Conocer el proceso
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 text-base animate-fade-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
                <div className="flex items-center gap-3 text-[var(--navy-muted)]">
                  <Check className="w-5 h-5 text-[var(--accent)]" />
                  <span>Entrega 24hrs</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--navy-muted)]">
                  <Check className="w-5 h-5 text-[var(--accent)]" />
                  <span>100% Asegurado</span>
                </div>
              </div>
            </div>

            {/* Hero Image - larger, clean */}
            <div className="order-1 lg:order-2">
              <div className="relative img-hover-zoom rounded-lg animate-scale-in">
                <Image
                  src="/hero-v2.png"
                  alt="Fresh Fleet - Servicio de lavanderia"
                  width={700}
                  height={600}
                  className="w-full h-auto rounded-lg icon-navy"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Clean grid with hand-drawn icons */}
      <section className="py-20 px-6 lg:px-8 bg-[var(--cream-warm)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label mb-3">Por qué nosotros</p>
              <h2 className="headline-section">Cuidado que se nota</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger delay={100}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "/icons/maquina.png",
                  title: "Ritmo de 24h",
                  desc: "Recogemos hoy. Entregamos mañana."
                },
                {
                  icon: "/icons/toalla.png",
                  title: "Cada fibra importa",
                  desc: "Atención al detalle en cada prenda."
                },
                {
                  icon: "/icons/hanger.png",
                  title: "Tu tiempo, respetado",
                  desc: "Hora exacta. Sin ventanas largas."
                },
                {
                  icon: "/icons/laundry.png",
                  title: "Tranquilidad incluida",
                  desc: "Tu ropa protegida. Siempre."
                }
              ].map((feature, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-24 h-24 mx-auto mb-4 icon-hover">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={96}
                      height={96}
                      className="w-full h-full transition-transform duration-300 group-hover:scale-110 icon-navy"
                    />
                  </div>
                  <h3 className="headline-card mb-2">{feature.title}</h3>
                  <p className="body-small">{feature.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label mb-3">Servicios</p>
              <h2 className="headline-section">Para ti y tu negocio</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Service */}
            <div className="card-featured group">
              <div className="w-28 h-28 mb-6 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icons/laudryb.png"
                  alt="Servicio personal"
                  width={112}
                  height={112}
                  className="w-full h-full icon-navy"
                />
              </div>

              <span className="tag mb-4">Para familias</span>
              <h3 className="headline-card mb-3">Recogido y Entrega</h3>
              <p className="body-regular mb-6">
                Recogemos tu ropa, la lavamos con cuidado, y te la entregamos
                doblada. En la puerta de tu casa.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Recogido y entrega incluido",
                  "Entrega en 24 horas disponible",
                  "Lavado, secado y doblado",
                  "Cuidado especial para delicados"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 body-small">
                    <Check className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-6 pt-6 border-t border-[var(--border)]">
                <span className="price-display">$2.50</span>
                <span className="price-display-small">por libra</span>
              </div>

              <a href="#contacto" className="btn-primary w-full justify-center">
                Programar recogida
              </a>
            </div>

            {/* Business Service */}
            <div className="card-dark group">
              <div className="w-28 h-28 mb-6 opacity-90 invert transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icons/maquina.png"
                  alt="Servicio comercial"
                  width={112}
                  height={112}
                  className="w-full h-full"
                />
              </div>

              <span className="tag-accent mb-4">Para negocios</span>
              <h3 className="headline-card mb-3">Servicios Comerciales</h3>
              <p className="body-regular mb-6 text-white-muted">
                Hoteles, restaurantes, gimnasios, eventos. Máquinas industriales
                que procesan volumen sin sacrificar calidad.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Capacidad de 30-40 kg por carga",
                  "Planchado profesional incluido",
                  "Recogidas programadas",
                  "Facturacion a 30 dias"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 body-small text-white-muted">
                    <Check className="w-4 h-4 text-[var(--accent-light)] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-6 pt-6 border-t border-white/20">
                <span className="price-volume">Precios por volumen</span>
              </div>

              <a href="#contacto" className="btn-light w-full justify-center">
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 lg:px-8 bg-[var(--navy)]">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="headline-section text-white mb-4">
            Lavandería con cuidado
          </h2>
          <p className="body-large mb-8 text-white-muted">
            No somos una corporación. Somos tus vecinos, trabajando para que
            tu ropa quede perfecta. Cada vez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#servicios" className="btn-light">
              Conocer servicios
            </a>
            <a href="#contacto" className="btn-outline-light">
              Conversemos
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Business Pricing */}
      <section id="empresas" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <p className="label mb-3">Para empresas</p>
              <h2 className="headline-section mb-6">
                Capacidad industrial, trato personal
              </h2>
              <p className="body-large mb-8">
                Nuestras máquinas de 30-40 kg procesan en una hora lo que toma
                8 cargas normales. Para negocios que necesitan volumen.
                Sin sacrificar calidad.
              </p>

              {/* Industry tags */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Hoteles", desc: "Sabanas, toallas, ropa de cama" },
                  { title: "Restaurantes", desc: "Manteleria, uniformes" },
                  { title: "Eventos", desc: "Manteles, servilletas" },
                  { title: "Gimnasios", desc: "Toallas en alto volumen" }
                ].map((item, idx) => (
                  <div key={idx} className="card-warm p-4">
                    <h4 className="headline-small mb-1">{item.title}</h4>
                    <p className="body-small">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing tiers */}
            <div className="card">
              <h3 className="headline-card mb-6 text-center">Planes Mensuales</h3>

              <div className="space-y-4">
                {[
                  { name: "Bronce", price: "$800", features: "400 lbs/semana", highlight: false },
                  { name: "Plata", price: "$1,500", features: "800 lbs/semana", highlight: true },
                  { name: "Oro", price: "$2,800", features: "1,600 lbs/semana", highlight: false }
                ].map((tier, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-lg border ${tier.highlight ? 'border-[var(--accent)] bg-[var(--accent-bg)]' : 'border-[var(--border)]'}`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="headline-small">{tier.name}</span>
                        {tier.highlight && (
                          <span className="ml-2 tag-accent text-xs">Popular</span>
                        )}
                        <p className="body-small mt-1">{tier.features}</p>
                      </div>
                      <div className="text-right">
                        <span className="price-display">{tier.price}</span>
                        <span className="price-display-small block">/mes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contacto" className="mt-8 btn-primary w-full justify-center">
                Conversemos sobre tu negocio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-8 bg-[var(--cream-warm)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label mb-3">Testimonios</p>
              <h2 className="headline-section">Quienes confían en nosotros</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María S.",
                role: "Madre de familia",
                text: "Con dos nenes y trabajo, la ropa siempre se acumulaba. Ahora desaparece y regresa fresca. Me salvó la vida."
              },
              {
                name: "David L.",
                role: "Organizador de eventos",
                text: "Necesito manteles perfectos para cada evento. Fresh Fleet nunca me ha fallado. Planchado impecable. A tiempo."
              },
              {
                name: "Jennifer K.",
                role: "Hotelera",
                text: "La calidad es consistente. El servicio de 24 horas nos ha salvado múltiples veces. Son como familia."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="card group cursor-default">
                {/* Stars */}
                <div className="star-rating mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current transition-transform duration-200" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                <p className="body-regular mb-6">&ldquo;{testimonial.text}&rdquo;</p>

                <div>
                  <p className="headline-small">{testimonial.name}</p>
                  <p className="body-small text-[var(--navy-faded)]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="proceso" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label mb-3">El proceso</p>
              <h2 className="headline-section">Así de simple</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: "1",
                title: "Coordinas",
                desc: "Llámanos o reserva online. Tú eliges el día y la hora."
              },
              {
                num: "2",
                title: "Cuidamos",
                desc: "Recogemos tu ropa y la procesamos con atención en nuestra planta."
              },
              {
                num: "3",
                title: "Entregamos",
                desc: "Limpia, doblada, en tu puerta. Generalmente en 24 horas."
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="number-badge mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">{step.num}</div>
                <h3 className="headline-card mb-2">{step.title}</h3>
                <p className="body-regular">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contacto" className="btn-accent">
              Comenzar
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 px-6 lg:px-8 bg-[var(--accent-bg)]">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="label-accent mb-3">Contacto</p>
              <h2 className="headline-section mb-4">Cuéntanos qué necesitas</h2>
              <p className="body-regular">
                Respondemos en menos de 24 horas.
              </p>
            </div>
          </ScrollReveal>

          <div className="card-featured">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="input-label">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="input-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="input-label">Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input"
                  placeholder="(787) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="type" className="input-label">Tipo de servicio</label>
                <select id="type" name="type" className="input">
                  <option value="">Selecciona una opcion</option>
                  <option value="personal">Para mi casa</option>
                  <option value="event">Para eventos</option>
                  <option value="hotel">Hotel / Airbnb</option>
                  <option value="restaurant">Restaurante</option>
                  <option value="gym">Gimnasio / Spa</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="input-label">Mensaje (opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input resize-none"
                  placeholder="Cuéntanos sobre tu volumen, horarios, o cualquier detalle..."
                />
              </div>

              <button type="submit" className="btn-accent w-full justify-center py-4">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo-v2.png"
                  alt="Fresh Fleet"
                  width={40}
                  height={40}
                  className="w-10 h-10 brightness-0 invert"
                />
                <span className="headline-small text-white">Fresh Fleet</span>
              </div>
              <p className="body-regular mb-4 text-white-faded">
                Lavandería con recogido y entrega en Puerto Rico.
                Para quienes valoran cada hora.
              </p>
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="ml-2 body-small text-white-faded">5.0 en Google</span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="headline-small text-white mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="body-small text-white-faded hover:text-[var(--accent)] transition-colors">Recogido y Entrega</a></li>
                <li><a href="#empresas" className="body-small text-white-faded hover:text-[var(--accent)] transition-colors">Para Empresas</a></li>
                <li><a href="#proceso" className="body-small text-white-faded hover:text-[var(--accent)] transition-colors">Como Funciona</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="headline-small text-white mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="body-small text-white-faded">hola@freshfleet.pr</li>
                <li className="body-small text-white-faded">(787) 555-1234</li>
                <li className="body-small text-white-faded">San Juan, PR</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small text-white-subtle">
              {new Date().getFullYear()} Fresh Fleet. Puerto Rico.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
