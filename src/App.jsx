import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ContactCTA from "./components/ContactCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">P</div>
            <span className="text-base font-semibold tracking-tight">Plugcom</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#servizi" className="hover:text-gray-900">Servizi</a>
            <a href="#pricing" className="hover:text-gray-900">Prezzi</a>
            <a href="#contact" className="hover:text-gray-900">Contatti</a>
            <a
              href="#pricing"
              className="rounded-lg bg-gray-900 px-3 py-2 font-medium text-white hover:bg-black"
            >
              Attiva Plug360
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <Pricing />
        <ContactCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Plugcom – Web Agency. Milano, Italia.
            </p>
            <p>
              Pagamenti accettati: Bonifico, Stripe, Klarna.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
