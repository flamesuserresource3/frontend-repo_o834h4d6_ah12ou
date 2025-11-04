import { TrendingUp, Target, ThumbsUp, Briefcase, Smile, Check } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Lead più qualificati",
    desc:
      "Messaggi e funnel progettati per attrarre le persone giuste e aumentare le conversioni.",
  },
  {
    icon: TrendingUp,
    title: "Aumento del ROI",
    desc:
      "Ottimizzazione continua di campagne e creatività per massimizzare ogni euro investito.",
  },
  {
    icon: Briefcase,
    title: "Meno complessità operativa",
    desc:
      "Un team che coordina tutto: tu ti concentri sul business, noi sul marketing.",
  },
  {
    icon: ThumbsUp,
    title: "Coerenza del brand",
    desc:
      "Esperienze e contenuti allineati su canali e touchpoint per rafforzare la fiducia.",
  },
  {
    icon: Smile,
    title: "Time‑to‑value ridotto",
    desc:
      "Setup rapido e primi risultati in poche settimane, non mesi.",
  },
  {
    icon: Check,
    title: "Supporto continuo",
    desc:
      "Report, insight e call di allineamento per mantenere il focus sugli obiettivi.",
  },
];

export default function Benefits() {
  return (
    <section id="benefici" className="relative border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            I benefici per il tuo business
          </h2>
          <p className="mt-3 text-gray-600">
            Cosa ottieni concretamente lavorando con Plug360.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
