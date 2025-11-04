import { Users, Zap, Shield, LineChart, Clock, Rocket } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Un unico team, zero fornitori da gestire",
    desc:
      "Strategia, creatività e performance in un solo abbonamento: ci occupiamo noi di tutto.",
  },
  {
    icon: Zap,
    title: "Velocità di esecuzione",
    desc:
      "Sviluppi rapidi, iterazioni continue e test A/B per trovare ciò che funziona prima.",
  },
  {
    icon: Shield,
    title: "Trasparenza e sicurezza",
    desc:
      "Accessi condivisi, report chiari e pieno controllo su budget e asset.",
  },
  {
    icon: LineChart,
    title: "Approccio data‑driven",
    desc:
      "Decisioni basate su dati, KPI e insight azionabili per ottimizzare il ROI.",
  },
  {
    icon: Clock,
    title: "Costo prevedibile",
    desc:
      "Canone fisso: niente sorprese, pianificazione semplice per la tua azienda.",
  },
  {
    icon: Rocket,
    title: "Scalabilità",
    desc:
      "Dal setup alla crescita: il servizio cresce con il tuo business, senza attriti.",
  },
];

export default function Advantages() {
  return (
    <section id="vantaggi" className="relative border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Perché scegliere Plug360
          </h2>
          <p className="mt-3 text-gray-600">
            I vantaggi pratici di avere un partner che unisce strategia, creatività e performance.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
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
