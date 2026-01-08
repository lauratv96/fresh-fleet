import Image from "next/image";

// Custom Icons matching Pink's style
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
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-[#1a2744]">
              <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
              <a href="#business" className="hover:text-teal-600 transition-colors">Business</a>
            </div>

            {/* Logo - Center */}
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-black italic text-[#1a2744] tracking-tight">Fresh Fleet</span>
            </div>

            {/* Right nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-[#1a2744]">
              <a href="#how-it-works" className="hover:text-teal-600 transition-colors">How It Works</a>
              <a href="#contact" className="bg-teal-600 text-white px-5 py-2.5 rounded hover:bg-teal-700 transition-colors">
                Get a Quote!
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
                alt="Fresh Fleet delivery van with organized linens"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Hero Content */}
            <div className="lg:pl-8 py-8">
              <h1 className="headline-display text-5xl md:text-6xl lg:text-7xl text-[#1a2744] mb-6">
                Clean It<br />
                <span className="text-teal-600">Fresh & Fast</span>
              </h1>
              <div className="space-y-4 text-lg text-[#4a5568] mb-8 max-w-lg">
                <p>
                  Fresh Fleet is founded on the idea of world-class laundry service at a fair price. We aim to make busy lives easier—and hopefully give you back some precious time along the way.
                </p>
                <p>
                  We take pride in our work, no matter the load. Whether we're handling your weekly laundry, pressing linens for your event, or managing bulk orders for your hotel, we treat your items with the utmost care.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block bg-[#1a2744] text-white px-8 py-4 rounded text-lg font-semibold hover:bg-[#2d3a52] transition-colors"
              >
                Quote Within 24 Hours
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
                title: "Quick & Easy Quotes",
                desc: "We offer free quotes on all orders. Call or text and we'll provide a fair quote within 24 hours and schedule a convenient pickup time."
              },
              {
                icon: <ShieldIcon />,
                title: "We're Insured",
                desc: "No need to worry! We're fully covered with comprehensive liability insurance protecting your items throughout the entire process."
              },
              {
                icon: <TruckIcon />,
                title: "We're Reliable",
                desc: "We understand time is valuable. We provide fixed pickup and delivery windows—not vague time frames. If you're not satisfied, we'll make it right."
              },
              {
                icon: <SparkleIcon />,
                title: "Respect Your Items",
                desc: "The 'treat it like our own' principle is what we live by. Every item is sorted, tagged, and handled with care from pickup to delivery."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#faf8f5] rounded-xl p-6">
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
          <h2 className="headline-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            We believe in bringing back<br />
            the lost art of <span className="text-teal-400">great service...</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="inline-block border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-[#1a2744] transition-colors font-semibold">
              Our Services
            </a>
            <a href="#business" className="inline-block border-2 border-teal-400 text-teal-400 px-8 py-3 rounded hover:bg-teal-400 hover:text-[#1a2744] transition-colors font-semibold">
              For Business
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - B2C & B2B */}
      <section id="services" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-display text-4xl md:text-5xl text-[#1a2744] mb-4">
              Two Ways We <span className="text-teal-600">Serve You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e2e8f0]">
              <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                For You & Your Family
              </span>
              <h3 className="headline-display text-3xl text-[#1a2744] mb-4">Pickup & Delivery</h3>
              <p className="text-[#4a5568] mb-6">
                Schedule a pickup, and we'll wash, dry, fold, and deliver back to your door. It's laundry day without the laundry.
              </p>
              <ul className="space-y-3 mb-8">
                {["Free pickup & delivery", "24-hour turnaround available", "Wash, dry & fold included", "Special care for delicates"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#1a2744]">
                    <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#1a2744]">$1.75</span>
                <span className="text-[#718096]">per lb</span>
              </div>
              <a href="#contact" className="block w-full text-center bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Schedule Your First Pickup
              </a>
            </div>

            {/* Business Service */}
            <div className="bg-[#1a2744] rounded-2xl p-8 shadow-lg text-white">
              <span className="inline-block bg-teal-400/20 text-teal-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                For Business
              </span>
              <h3 className="headline-display text-3xl mb-4">Commercial Services</h3>
              <p className="text-slate-300 mb-6">
                Industrial-capacity processing for hotels, restaurants, event companies, gyms, and spas. Volume pricing with dedicated account management.
              </p>
              <ul className="space-y-3 mb-8">
                {["80 lb commercial machines", "Professional pressing & ironing", "Recurring pickup schedules", "Net-30 billing available"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-slate-400">pricing for volume</span>
              </div>
              <a href="#contact" className="block w-full text-center bg-teal-400 text-[#1a2744] py-4 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
                Request a Quote
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
                <span className="text-white text-3xl font-black italic">FF</span>
              </div>
            </div>
            <h2 className="headline-display text-4xl md:text-5xl text-[#1a2744] mb-4">
              The Fresh Fleet<br /><span className="text-teal-600">Promise</span>
            </h2>
            <p className="text-lg text-[#4a5568] italic">
              "Your time should never be taken for granted. That's why we'll always:"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: ".01", text: "Pick up on time (which really means we'll be there when we say we will)." },
              { num: ".02", text: "Do what we say we're going to do. Our word is everything, and we aim to exceed expectations." },
              { num: ".03", text: "Return your items cleaner, fresher, and better than before." }
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
      <section id="business" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#1a2744] text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                Built for Business
              </span>
              <h2 className="headline-display text-4xl md:text-5xl text-[#1a2744] mb-6">
                Industrial Capacity<br />
                <span className="text-teal-600">for Your Needs</span>
              </h2>
              <p className="text-lg text-[#4a5568] mb-8">
                Our 60-80 lb commercial machines process what takes competitors 8 loads in just 55 minutes. Perfect for event companies, hotels, restaurants, and fitness facilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Event Companies", desc: "Tablecloths, napkins, linens" },
                  { title: "Hotels & B&Bs", desc: "Sheets, towels, bedding" },
                  { title: "Restaurants", desc: "Table linens, uniforms" },
                  { title: "Gyms & Spas", desc: "High-volume towels" }
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
              <h3 className="headline-display text-2xl text-[#1a2744] mb-6">Monthly Contract Options</h3>
              <div className="space-y-4">
                {[
                  { name: "Bronze", price: "$800", features: "Up to 500 lbs/week • 2x weekly • 48hr", popular: false },
                  { name: "Silver", price: "$1,400", features: "Up to 1,000 lbs/week • 3x weekly • 24hr", popular: true },
                  { name: "Gold", price: "$2,500", features: "Up to 2,000 lbs/week • Daily • Same-day", popular: false }
                ].map((tier, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl border-2 cursor-pointer transition-all hover:border-teal-400 ${
                      tier.popular ? 'border-teal-500 bg-teal-50' : 'border-[#e2e8f0]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg text-[#1a2744]">{tier.name}</span>
                      <span className="text-2xl font-bold text-teal-600">{tier.price}<span className="text-sm text-[#718096] font-normal">/mo</span></span>
                    </div>
                    <p className="text-sm text-[#4a5568]">{tier.features}</p>
                    {tier.popular && <span className="inline-block mt-2 text-xs font-semibold text-teal-700 uppercase">Most Popular</span>}
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 block w-full text-center bg-[#1a2744] text-white py-4 rounded-lg font-semibold hover:bg-[#2d3a52] transition-colors">
                Discuss Your Needs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Pink's carousel style */}
      <section className="py-20 px-6 lg:px-8 bg-[#1a2744]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria S.",
                text: "Fresh Fleet has been a game-changer for our family! With two kids and busy jobs, laundry was always piling up. Now it just... disappears and comes back fresh. The team is professional and friendly.",
                rating: 5
              },
              {
                name: "David L.",
                text: "As an event planner, I need reliable linen service. Fresh Fleet delivers—literally. Perfectly pressed tablecloths, on time, every time. Their commercial pressing service is top-notch.",
                rating: 5
              },
              {
                name: "Jennifer K.",
                text: "We switched our boutique hotel's laundry to Fresh Fleet six months ago. The quality is consistently excellent, and their 24-hour turnaround has saved us during busy seasons. Highly recommend!",
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
      <section id="how-it-works" className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="headline-display text-4xl md:text-5xl text-[#1a2744] mb-4">
            How It <span className="text-teal-600">Works</span>
          </h2>
          <p className="text-lg text-[#4a5568] mb-12">Simple as 1-2-3. We handle the hard part.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Schedule Pickup", desc: "Book online or call us. Choose a time that works for you." },
              { num: "2", title: "We Collect & Clean", desc: "Our team picks up, processes at our industrial facility, and quality checks every item." },
              { num: "3", title: "Fresh Delivery", desc: "Clean, folded, and delivered back to your door—usually within 24 hours." }
            ].map((step, idx) => (
              <div key={idx}>
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{step.num}</span>
                </div>
                <h3 className="font-bold text-xl text-[#1a2744] mb-2">{step.title}</h3>
                <p className="text-[#4a5568]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-[#f0ebe3]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="headline-display text-4xl md:text-5xl text-[#1a2744] mb-4">
              Let's Get <span className="text-teal-600">Started</span>
            </h2>
            <p className="text-lg text-[#4a5568]">
              Ready to reclaim your time? Tell us about your laundry needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1a2744] mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1a2744] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1a2744] mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-[#1a2744] mb-2">I'm interested in...</label>
                <select
                  id="type"
                  name="type"
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5]"
                >
                  <option value="">Select an option</option>
                  <option value="personal">Personal Pickup & Delivery</option>
                  <option value="event">Event Company Services</option>
                  <option value="hotel">Hotel / B&B Services</option>
                  <option value="restaurant">Restaurant Services</option>
                  <option value="gym">Gym / Spa Services</option>
                  <option value="other">Other Business Needs</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1a2744] mb-2">Tell us more (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-[#faf8f5] resize-none"
                  placeholder="Estimated volume, special requirements, questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-teal-600 text-white font-semibold text-lg hover:bg-teal-700 transition-colors"
              >
                Get My Free Quote
              </button>

              <p className="text-center text-sm text-[#718096]">
                We'll respond within 24 hours.
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
                <span className="text-2xl font-black italic text-teal-400">Fresh Fleet</span>
              </div>
              <p className="text-slate-400 mb-2">Within 24 hours</p>
            </div>

            {/* Links */}
            <div className="flex gap-12">
              <div>
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#business" className="text-slate-400 hover:text-white transition-colors">Business</a></li>
                  <li><a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-sm">
                  <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Get a Quote</a></li>
                  <li><span className="text-slate-400">hello@freshfleet.com</span></li>
                  <li><span className="text-slate-400">(555) 123-4567</span></li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-end items-start">
              <a href="#contact" className="bg-teal-600 text-white px-6 py-3 rounded font-semibold hover:bg-teal-700 transition-colors">
                Get a Quote!
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Fresh Fleet. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
