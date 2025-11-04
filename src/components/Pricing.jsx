import { Check, Shield } from "lucide-react";

const plans = [
  {
    name: "Mensile",
    price: "597€",
    period: "/mese",
    features: [
      "Strategia personalizzata",
      "Siti/Landing/Funnel",
      "Gestione campagne su 1-2 canali",
      "Automazioni base (email/WhatsApp)",
      "Report mensile",
    ],
    highlight: false,
  },
  {
    name: "Trimestrale",
    price: "1597€",
    period: "/3 mesi",
    features: [
      "Piano strategico trimestrale",
      "Sviluppi e test avanzati",
      "Gestione multicanale",
      "Automazioni avanzate",
      "Report e call di allineamento",
    ],
    highlight: true,
  },
  {
    name: "Semestrale",
    price: "2997€",
    period: "/6 mesi",
    features: [
      "Roadmap a 6 mesi",
      "Crescita e scala",
      "Ottimizzazione continua",
      "Supporto prioritario",
      "Reportistica e insights",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Plug360: marketing in abbonamento
          </h2>
          <p className="mt-3 text-gray-600">
            Scegli la durata: mensile, trimestrale o semestrale. Rinnovo automatico. Esclusi solo costi vivi e budget ADV.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm ${
                plan.highlight
                  ? "border-blue-200 ring-2 ring-blue-100"
                  : "border-gray-100"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow">
                  <Shield className="h-4 w-4" /> Miglior valore
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium shadow-sm transition ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-black"
                }`}
              >
                Attiva ora
              </a>
              <p className="mt-3 text-xs text-gray-500">
                Pagamento con bonifico, Stripe o a rate con Klarna.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
