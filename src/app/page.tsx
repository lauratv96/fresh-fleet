import Image from "next/image";
import Link from "next/link";

// Icons as SVG components
const TruckIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">FF</span>
              </div>
              <span className="font-bold text-xl text-slate-900">Fresh Fleet</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-teal-600 transition-colors">Services</a>
              <a href="#business" className="text-slate-600 hover:text-teal-600 transition-colors">For Business</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-teal-600 transition-colors">How It Works</a>
              <a href="#contact" className="text-slate-600 hover:text-teal-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">
                <SparklesIcon />
                <span>Industrial Power, Personal Service</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight">
                Laundry Done <span className="gradient-text">Fresh & Fast</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                From busy families to event companies, we handle it all. Our industrial-scale facility processes 8x faster than traditional services—with pickup & delivery at your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-teal-600 text-white font-semibold text-lg hover:bg-teal-700 transition-all hover:shadow-lg hover:shadow-teal-200">
                  Schedule Pickup
                </a>
                <a href="#business" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-lg hover:border-teal-300 hover:text-teal-700 transition-colors">
                  Business Solutions
                </a>
              </div>
              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckIcon />
                  <span>24-Hour Turnaround</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckIcon />
                  <span>Free Pickup</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckIcon />
                  <span>Fully Insured</span>
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[16/9] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.png"
                  alt="Fresh Fleet delivery van with organized linens outside industrial laundry facility"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                <div className="text-3xl font-bold text-teal-600">8x</div>
                <div className="text-sm text-slate-600">Faster Processing</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                <div className="text-2xl font-bold text-slate-900">80 lb</div>
                <div className="text-xs text-slate-500">Commercial Machines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Two Ways We Serve You</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Whether you're a busy family or running a business, Fresh Fleet has you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* B2C Card */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-teal-200 transition-all hover:shadow-xl">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium">For You</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-6">
                <TruckIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Pickup & Delivery</h3>
              <p className="text-slate-600 mb-6">
                Schedule a pickup, and we'll wash, dry, fold, and deliver back to your door. It's laundry day without the laundry.
              </p>
              <ul className="space-y-3 mb-8">
                {["Free pickup & delivery", "24-hour turnaround available", "Wash, dry & fold included", "Special care for delicates"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-slate-900">$1.75</span>
                <span className="text-slate-500">per lb</span>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
                Schedule Your First Pickup
              </a>
            </div>

            {/* B2B Card */}
            <div className="group relative bg-slate-900 rounded-3xl p-8 text-white">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-sm font-medium">For Business</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-slate-900 mb-6">
                <BuildingIcon />
              </div>
              <h3 className="text-2xl font-bold mb-3">Commercial Services</h3>
              <p className="text-slate-300 mb-6">
                Industrial-capacity processing for hotels, restaurants, event companies, gyms, and spas. Volume pricing with dedicated account management.
              </p>
              <ul className="space-y-3 mb-8">
                {["80 lb commercial machines", "Professional pressing & ironing", "Recurring pickup schedules", "Net-30 billing available"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-slate-400">pricing for volume</span>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition-colors">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Detailed Section */}
      <section id="business" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
                Built for Business
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Industrial Capacity for Your Business Needs
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our 60-80 lb commercial machines process what takes competitors 8 loads in just 55 minutes. Perfect for event companies, hotels, restaurants, and fitness facilities.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Event Companies", desc: "Tablecloths, napkins, linens—pressed and ready for your next event" },
                  { title: "Hotels & B&Bs", desc: "Sheets, towels, and bedding with quick turnaround" },
                  { title: "Restaurants", desc: "Table linens and staff uniforms, professionally cleaned" },
                  { title: "Gyms & Spas", desc: "High-volume towel service with reliable scheduling" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-5 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Monthly Contract Options</h3>
              <div className="space-y-4">
                {[
                  { name: "Bronze", price: "$800", features: "Up to 500 lbs/week • 2x weekly pickup • 48hr turnaround" },
                  { name: "Silver", price: "$1,400", features: "Up to 1,000 lbs/week • 3x weekly pickup • 24hr turnaround" },
                  { name: "Gold", price: "$2,500", features: "Up to 2,000 lbs/week • Daily pickup • Same-day turnaround" },
                ].map((tier, idx) => (
                  <div key={tier.name} className={`p-5 rounded-xl border-2 transition-all cursor-pointer hover:border-teal-300 ${idx === 1 ? 'border-teal-500 bg-teal-50' : 'border-slate-200'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg text-slate-900">{tier.name}</span>
                      <span className="text-2xl font-bold text-teal-600">{tier.price}<span className="text-sm text-slate-500 font-normal">/mo</span></span>
                    </div>
                    <p className="text-sm text-slate-600">{tier.features}</p>
                    {idx === 1 && <span className="inline-block mt-2 text-xs font-medium text-teal-700">Most Popular</span>}
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
                Discuss Your Needs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Simple as 1-2-3. We handle the hard part.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Schedule Pickup", desc: "Book online or call us. Choose a time that works for you.", icon: <CalendarIcon /> },
              { step: "2", title: "We Collect & Clean", desc: "Our team picks up, processes at our industrial facility, and quality checks every item.", icon: <SparklesIcon /> },
              { step: "3", title: "Fresh Delivery", desc: "Clean, folded, and delivered back to your door—usually within 24 hours.", icon: <TruckIcon /> },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "8x", label: "Faster Processing" },
              { value: "80 lb", label: "Machine Capacity" },
              { value: "24hr", label: "Turnaround Time" },
              { value: "100%", label: "Satisfaction Guaranteed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Capture */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Get Started</h2>
            <p className="text-xl text-slate-600">
              Ready to reclaim your time? Tell us about your laundry needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">I'm interested in...</label>
                <select
                  id="type"
                  name="type"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none bg-white"
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
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Tell us more (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none resize-none"
                  placeholder="Estimated volume, special requirements, questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-teal-600 text-white font-semibold text-lg hover:bg-teal-700 transition-colors hover:shadow-lg hover:shadow-teal-200"
              >
                Get My Free Quote
              </button>

              <p className="text-center text-sm text-slate-500">
                We'll respond within 2 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FF</span>
                </div>
                <span className="font-bold text-xl">Fresh Fleet</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Industrial-scale laundry facility serving businesses and families with pickup & delivery service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Pickup & Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Event Linens</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Drop-off Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>hello@freshfleet.com</li>
                <li>(555) 123-4567</li>
                <li>Mon-Sat: 7am - 8pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Fresh Fleet. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
