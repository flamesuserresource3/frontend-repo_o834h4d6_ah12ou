import { LineChart, Globe, Megaphone, Mail, Bot } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti web, landing e funnel",
    desc:
      "Progettiamo e sviluppiamo pagine ad alte conversioni per attrarre e trasformare traffico in clienti.",
  },
  {
    icon: Megaphone,
    title: "Gestione campagne advertising",
    desc:
      "Google, Facebook, Instagram e TikTok: impostazione, A/B test, ottimizzazione continua e report.",
  },
  {
    icon: Mail,
    title: "Automazioni di marketing",
    desc:
      "Email, SMS e WhatsApp marketing per nutrire i lead e aumentare il valore nel tempo.",
  },
  {
    icon: Bot,
    title: "Intelligenza artificiale applicata",
    desc:
      "Soluzioni AI per velocizzare processi, personalizzare messaggi e scalare risultati.",
  },
  {
    icon: LineChart,
    title: "Strategia e analisi",
    desc:
      "Analisi di mercato, posizionamento e KPI per una crescita sostenibile e misurabile.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Tutto il tuo marketing, gestito da un unico team
          </h2>
          <p className="mt-3 text-gray-600">
            Dal concept alla crescita: eseguiamo in-house ogni attività, coordinata in una
            strategia unica e orientata al risultato.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
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
