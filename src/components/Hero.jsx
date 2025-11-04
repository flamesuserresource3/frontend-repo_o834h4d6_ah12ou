import { Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-3 py-1 text-xs text-blue-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Plug360 – marketing in abbonamento
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              Più clienti e fatturato per la tua attività in Italia
            </h1>
            <p className="mt-5 max-w-xl text-base text-gray-600 sm:text-lg">
              Siamo Plugcom, web agency di Milano. Progettiamo e gestiamo strategie di digital marketing su misura per imprenditori, attività locali, liberi professionisti e PMI in tutta Italia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Rocket className="h-5 w-5" />
                Inizia con Plug360
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-medium text-gray-900 shadow-sm hover:bg-gray-50"
              >
                Parla con noi
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                Strategie su misura: analisi, siti, funnel, advertising, automazioni, AI
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4">
                {[
                  "Siti Web",
                  "Landing Page",
                  "Funnel",
                  "Google Ads",
                  "Facebook/IG Ads",
                  "TikTok Ads",
                  "Email/SMS",
                  "WhatsApp",
                  "AI & Automazioni",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-gray-100 bg-gray-50 p-3 text-center text-xs font-medium text-gray-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto h-28 w-11/12 rounded-3xl bg-gradient-to-b from-transparent to-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
