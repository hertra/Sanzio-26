import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

// Simple SVG Icons to avoid dependency issues
const IconInstagram = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const IconMapPin = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
)
const IconPhone = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const IconClock = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const IconScissors = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg>
)
const IconStar = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)
const IconMenu = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
)
const IconX = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
)

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    { name: 'Taglio Donna', price: '40 – 70€', category: 'Styling' },
    { name: 'Piega & Styling', price: '25 – 45€', category: 'Styling' },
    { name: 'Taglio Uomo', price: '30 – 50€', category: 'Styling' },
    { name: 'Colore Completo', price: '60 – 120€', category: 'Color' },
    { name: 'Balayage / Schiariture', price: '120 – 250€', category: 'Color' },
    { name: 'Tonalizzazioni / Gloss', price: '30 – 60€', category: 'Color' },
    { name: 'Ricostruzione Capelli', price: '30 – 90€', category: 'Treatments' },
    { name: 'Extension', price: '150€+', category: 'Treatments' },
  ]

  const schedule = [
    { day: 'Lunedì', hours: 'Chiuso' },
    { day: 'Martedì', hours: '09:30 – 19:00' },
    { day: 'Mercoledì', hours: '09:00 – 19:00' },
    { day: 'Giovedì', hours: '09:00 – 21:00' },
    { day: 'Venerdì', hours: '09:00 – 19:00' },
    { day: 'Sabato', hours: '09:00 – 19:00' },
    { day: 'Domenica', hours: 'Chiuso' },
  ]

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-['Inter'] selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#faf9f6]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-['Cormorant_Garamond'] text-3xl font-bold tracking-tighter uppercase">Sanzio 26</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest">
            <a href="#services" className="hover:opacity-50 transition-opacity">Servizi</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">Il Salone</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">Contatti</a>
            <a 
              href="https://www.treatwell.it/salone/sanzio-26-salon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 hover:bg-zinc-800 transition-colors"
            >
              Prenota Online
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#faf9f6] border-b border-black/5 p-6 flex flex-col gap-6 text-center text-lg uppercase tracking-widest font-medium">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Servizi</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Il Salone</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contatti</a>
            <a 
              href="https://www.treatwell.it/salone/sanzio-26-salon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3"
            >
              Prenota Online
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" 
            alt="Salon Interior" 
            className="w-full h-full object-cover grayscale-[0.2] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 animate-fade-in">Hair Stylist Milano</p>
          <h1 className="font-['Cormorant_Garamond'] text-7xl md:text-9xl font-light italic leading-none mb-8 tracking-tighter">
            Sanzio 26 <span className="block not-italic font-bold">Salon</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#services" 
              className="w-full md:w-auto border border-white/40 bg-white/10 backdrop-blur-md px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
            >
              Scopri i Servizi
            </a>
            <a 
              href="https://www.treatwell.it/salone/sanzio-26-salon/" 
              className="w-full md:w-auto bg-white text-black px-10 py-4 hover:bg-zinc-200 transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
            >
              Prenota Ora
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-white" />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-6 text-center md:text-left">
            <div className="w-12 h-12 bg-[#faf9f6] flex items-center justify-center mx-auto md:mx-0">
              <IconStar size={24} className="text-zinc-400" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-3xl italic font-semibold">Eccellenza nel Colore</h3>
            <p className="text-zinc-500 leading-relaxed">
              Specialisti in balayage e tecniche di schiaritura avanzate. Utilizziamo prodotti Cotril per garantire risultati brillanti e duraturi.
            </p>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div className="w-12 h-12 bg-[#faf9f6] flex items-center justify-center mx-auto md:mx-0">
              <IconScissors size={24} className="text-zinc-400" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-3xl italic font-semibold">Taglio su Misura</h3>
            <p className="text-zinc-500 leading-relaxed">
              Dalla consulenza personalizzata alla realizzazione. Ogni taglio è studiato per valorizzare i tuoi lineamenti e la tua personalità.
            </p>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div className="w-12 h-12 bg-[#faf9f6] flex items-center justify-center mx-auto md:mx-0">
              <IconMapPin size={24} className="text-zinc-400" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-3xl italic font-semibold">Urban Experience</h3>
            <p className="text-zinc-500 leading-relaxed">
              Situato nel cuore pulsante di Milano (Zona De Angeli), offriamo un ambiente moderno e rilassante per il tuo benessere.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl italic mb-4">I Nostri Servizi</h2>
            <div className="w-20 h-[1px] bg-black/20 mx-auto" />
          </div>

          <div className="grid gap-12">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Styling & Cut</h3>
              <div className="space-y-6">
                {services.filter(s => s.category === 'Styling').map((s) => (
                  <div key={s.name} className="flex justify-between items-baseline group cursor-default">
                    <span className="font-['Cormorant_Garamond'] text-2xl group-hover:italic transition-all">{s.name}</span>
                    <div className="flex-1 mx-4 border-b border-dotted border-black/10 h-1" />
                    <span className="font-medium">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Color & Light</h3>
              <div className="space-y-6">
                {services.filter(s => s.category === 'Color').map((s) => (
                  <div key={s.name} className="flex justify-between items-baseline group cursor-default">
                    <span className="font-['Cormorant_Garamond'] text-2xl group-hover:italic transition-all">{s.name}</span>
                    <div className="flex-1 mx-4 border-b border-dotted border-black/10 h-1" />
                    <span className="font-medium">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Special Treatments</h3>
              <div className="space-y-6">
                {services.filter(s => s.category === 'Treatments').map((s) => (
                  <div key={s.name} className="flex justify-between items-baseline group cursor-default">
                    <span className="font-['Cormorant_Garamond'] text-2xl group-hover:italic transition-all">{s.name}</span>
                    <div className="flex-1 mx-4 border-b border-dotted border-black/10 h-1" />
                    <span className="font-medium">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center italic text-zinc-400">
            * I prezzi possono variare in base alla lunghezza dei capelli e alla complessità del lavoro.
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" 
              alt="Salon Vibe" 
              className="w-full aspect-[4/5] object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-white/20 hidden lg:block" />
          </div>
          <div className="space-y-8">
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl italic leading-tight">
              Design Minimal,<br />Anima Urbana.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              Sanzio 26 Salon è più di un semplice parrucchiere. È uno spazio contemporaneo a Milano dove l'estetica moderna incontra l'artigianalità del capello. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              Siamo specializzati in trasformazioni cromatiche naturali e trattamenti di salute del capello, in un ambiente studiato per offrirti il massimo relax urbano.
            </p>
            <div className="flex items-center gap-4 text-sm tracking-widest uppercase font-bold pt-4">
              <span className="w-12 h-[1px] bg-white/20" />
              <span>Certified Cotril Salon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} size={20} className="text-white fill-white" />
              ))}
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl italic mb-4">La Voce dei Nostri Clienti</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">4.8/5 su Treatwell • 100+ Recensioni</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Il miglior balayage mai fatto a Milano. Risultato naturalissimo e capelli morbidissimi grazie ai prodotti Cotril. Professionalità indiscutibile.",
                author: "Elena R.",
                tag: "Balayage Expert"
              },
              {
                text: "Ambiente moderno, pulito e rilassante. Mi hanno saputo consigliare il taglio perfetto per il mio viso. Un'esperienza di benessere totale.",
                author: "Marco V.",
                tag: "Taglio Personalizzato"
              },
              {
                text: "Torno sempre da Sanzio 26 per la loro precisione e l'atmosfera urbana contemporanea. Consigliatissimo per chi cerca qualità e stile.",
                author: "Giulia S.",
                tag: "Clientela Fedele"
              }
            ].map((review, i) => (
              <div key={i} className="p-10 border border-white/10 hover:border-white/30 transition-colors bg-white/5 backdrop-blur-sm">
                <p className="font-['Cormorant_Garamond'] text-2xl italic leading-relaxed mb-8">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold tracking-widest uppercase text-[10px]">{review.author}</span>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-tighter italic">{review.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl italic leading-none mb-4">The Sanzio 26<br />Aesthetic</h2>
              <a 
                href="https://www.instagram.com/sanzio26_salon/" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold hover:text-black transition-colors"
              >
                <IconInstagram size={16} />
                Follow @sanzio26_salon
              </a>
            </div>
            <p className="text-zinc-400 text-sm max-w-xs md:text-right uppercase tracking-widest leading-loose">
              Ispirazioni quotidiane dal nostro salone nel cuore di Milano.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-[3/4] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1926&auto=format&fit=crop" alt="Hair Style 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <IconInstagram className="text-white" />
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden pt-8 group relative">
              <div className="w-full h-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop" alt="Hair Style 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <IconInstagram className="text-white" />
                </div>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden group relative">
              <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1974&auto=format&fit=crop" alt="Hair Style 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <IconInstagram className="text-white" />
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden pt-8 group relative">
              <div className="w-full h-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=2076&auto=format&fit=crop" alt="Salon Product" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <IconInstagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Map */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-5xl italic mb-12">Visitaci</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-10 h-10 bg-[#faf9f6] flex items-center justify-center shrink-0">
                  <IconMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-2 opacity-40">Indirizzo</h4>
                  <p className="text-lg">Via Raffaello Sanzio 26,<br />20149 Milano (MI)</p>
                  <p className="text-zinc-400 mt-2">M1 De Angeli / Wagner</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-10 h-10 bg-[#faf9f6] flex items-center justify-center shrink-0">
                  <IconClock size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-2 opacity-40">Orari</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {schedule.map(item => (
                      <div key={item.day} className="contents">
                        <span className={`font-medium ${item.day === 'Giovedì' ? 'text-black' : ''}`}>{item.day}</span>
                        <span className={`${item.day === 'Giovedì' ? 'text-black font-bold' : 'text-zinc-500'}`}>
                          {item.hours}
                          {item.day === 'Giovedì' && <span className="ml-2 text-[10px] bg-black text-white px-1 py-0.5 rounded italic">Late Night</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-10 h-10 bg-[#faf9f6] flex items-center justify-center shrink-0">
                  <IconPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-2 opacity-40">Prenotazioni</h4>
                  <p className="text-2xl font-['Cormorant_Garamond'] italic">+39 02 4801 1060</p>
                  <a 
                    href="https://www.treatwell.it/salone/sanzio-26-salon/" 
                    target="_blank"
                    className="inline-block mt-4 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
                  >
                    Prenota via Treatwell
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] bg-zinc-100 relative group overflow-hidden">
             {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center flex-col p-12 text-center">
              <IconMapPin size={48} className="text-zinc-300 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-['Cormorant_Garamond'] text-3xl italic mb-4">Ci trovi in Sanzio 26</h3>
              <p className="text-zinc-500 mb-8 max-w-xs mx-auto text-sm uppercase tracking-widest">A pochi passi dalle fermate M1 Wagner e De Angeli</p>
              <a 
                href="https://www.google.com/maps/search/Via+Raffaello+Sanzio+26+Milano" 
                target="_blank" 
                className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest"
              >
                Apri Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase">Sanzio 26</div>
          
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:opacity-50 transition-opacity"><IconInstagram /></a>
            <span className="text-zinc-300">|</span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-40">© 2024 Sanzio 26 Salon Milano</span>
          </div>

          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
