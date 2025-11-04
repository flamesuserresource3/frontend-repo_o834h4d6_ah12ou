export default function ContactCTA() {
  return (
    <section id="contact" className="relative border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Parliamo del tuo progetto
            </h2>
            <p className="mt-3 text-gray-600">
              Raccontaci obiettivi, mercato e canali: prepareremo un piano su misura per
              aumentare clienti e fatturato. Lavoriamo da remoto in tutta Italia.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Analisi iniziale e proposta strategica</li>
              <li>• Esecuzione operativa su siti, advertising e automazioni</li>
              <li>• Reportistica e ottimizzazione continua</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 gap-4"
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Nome e azienda
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Es. Mario Rossi – Rossi SRL"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="nome@azienda.it"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="+39"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Messaggio
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Raccontaci cosa vuoi ottenere e da dove partiamo"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white shadow hover:bg-blue-700"
              >
                Richiedi consulenza gratuita
              </button>
              <p className="text-xs text-gray-500">
                Inviando accetti la nostra informativa privacy. Nessun spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
