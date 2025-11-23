import Image from "next/image";
import Link from "next/link";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const services = [
  {
    title: "Ingénierie & Études",
    description:
      "Conception sur mesure, audits énergétiques et modélisation pour optimiser vos installations industrielles.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 3h7l2 3h9v12H3z" />
        <path d="M5 17h14" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Services",
    description:
      "Interventions rapides, maintenance prédictive et suivi de performance pour maximiser la disponibilité.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Solutions Énergie",
    description:
      "Efficacité énergétique, photovoltaïque et systèmes hybrides pour réduire vos coûts et votre empreinte.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m12 2-2 7h4l-2 7" />
        <path d="M5 22h14" />
      </svg>
    ),
  },
  {
    title: "Projets Clé en Main",
    description:
      "Accompagnement complet du design à la mise en service avec pilotage et reporting transparent.",
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M3 10h7v11H4a1 1 0 0 1-1-1z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Grâce à Iceem, nous avons réduit nos consommations énergétiques de 18% tout en renforçant la fiabilité de nos lignes de production.",
    name: "Amel K.",
    role: "Directrice Technique – Agroalimentaire",
  },
  {
    quote:
      "Leur équipe maîtrise parfaitement les enjeux réglementaires et propose des solutions adaptées au contexte tunisien.",
    name: "Rami B.",
    role: "Responsable Maintenance – Industrie Pharmaceutique",
  },
  {
    quote:
      "Iceem nous accompagne depuis 5 ans sur la modernisation de nos installations. Les résultats sont tangibles dès les premiers mois.",
    name: "Syrine M.",
    role: "COO – Fabrication Plastique",
  },
];

const links = [
  { label: "Services", href: "#services" },
  { label: "Secteurs", href: "#sectors" },
  { label: "Réalisations", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="header-blur fixed inset-x-0 top-0 z-50 border-b border-white/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#hero" className="flex items-center gap-2 font-semibold text-brand-blue">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg">I</span>
            <span className="text-lg tracking-tight">Iceem.tn</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
            >
              Demander un devis
            </Link>
          </nav>
          <Link
            href="tel:+21671959533"
            className="rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark md:hidden"
          >
            Nous appeler
          </Link>
        </div>
      </header>

      <main className="flex-1" id="hero">
        <section className="relative isolate overflow-hidden bg-brand-dark pt-32 sm:pt-40">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
              alt="Ingénieurs travaillant sur des plans industriels"
              fill
              priority
              className="object-cover object-center opacity-80"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="fade-in text-white">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
                  Expertises multi-sectorielles
                </p>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Ingénierie & énergie pour des industries tunisiennes durables.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-light">
                  Iceem accompagne les acteurs industriels dans la conception, l'intégration et la maintenance de solutions énergétiques performantes.
                  Notre équipe d'experts certifiés garantit des interventions rapides, sûres et mesurables.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#contact"
                    className="rounded-full bg-brand-green px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-xl transition hover:bg-brand-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Obtenir un devis
                  </Link>
                  <Link
                    href="#services"
                    className="rounded-full border border-white/30 px-8 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Découvrir nos services
                  </Link>
                </div>
                <dl className="mt-14 grid grid-cols-2 gap-6 text-sm text-white/80 sm:grid-cols-4">
                  <div>
                    <dt className="uppercase tracking-wide text-white/60">Années d'expertise</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">15+</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wide text-white/60">Projets livrés</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">300+</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wide text-white/60">Économies générées</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">-20% conso</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-wide text-white/60">Clients satisfaits</dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">97%</dd>
                  </div>
                </dl>
              </div>
              <div className="relative hidden h-[480px] rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl lg:block">
                <div className="absolute inset-0 rounded-3xl border border-white/20" aria-hidden />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Gouvernance énergétique</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      Monitoring temps réel, tableaux de bord personnalisés et maintenance prédictive pour sécuriser vos performances.
                    </p>
                  </div>
                  <div className="grid gap-4 text-sm text-white/80">
                    <div className="gradient-border rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wide text-brand-light">Audit énergétique</p>
                      <p className="mt-1 text-base font-semibold text-white">Analyse 360° de vos installations</p>
                    </div>
                    <div className="gradient-border rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wide text-brand-light">Supervision</p>
                      <p className="mt-1 text-base font-semibold text-white">Plateforme cloud sécurisée</p>
                    </div>
                    <div className="gradient-border rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wide text-brand-light">Maintenance</p>
                      <p className="mt-1 text-base font-semibold text-white">Équipes mobilisables 24/7</p>
                    </div>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-blue shadow-lg transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Prendre rendez-vous
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-padding bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/60">Nos expertises</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl">
                Des solutions complètes pour accélérer vos performances.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Nous intervenons sur l'ensemble du cycle de vie de vos infrastructures techniques, en alliant conseil, ingénierie et exploitation.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="gradient-border rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1 focus-within:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-blue">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-brand-blue">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  >
                    En savoir plus
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sectors" className="section-padding bg-brand-light/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/60">Secteurs accompagnés</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl">
                Des partenariats durables avec les leaders tunisiens.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {["Agroalimentaire", "Pharmaceutique", "Manufacturing", "Bâtiments tertiaires"].map((sector) => (
                <div
                  key={sector}
                  className="rounded-3xl border border-brand-blue/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold text-brand-blue">{sector}</p>
                  <p className="mt-3 text-xs text-slate-600">
                    Ingénierie sur mesure, conformité réglementaire et reporting énergétique pertinents.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="section-padding bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/60">Impact mesurable</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl">
                  Des gains rapides et durables grâce à une approche orientée données.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Nos ingénieurs combinent capteurs terrain, outils d'analyse avancés et intelligence métier pour designer des plans d'efficacité énergétique adaptés.
                  Chaque projet est suivi par un PM dédié avec des revues de performance régulières.
                </p>
                <ul className="mt-8 space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-green" aria-hidden />
                    <span>Tableaux de bord personnalisés et alertes temps réel.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-green" aria-hidden />
                    <span>Conformité ISO 50001, ISO 14001 et normes tunisiennes.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-green" aria-hidden />
                    <span>ROI moyen constaté en 18 mois grâce aux économies d'énergie.</span>
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  Télécharger notre brochure
                  <span aria-hidden>↓</span>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-green/10 blur-3xl" aria-hidden />
                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl">
                  <TestimonialsCarousel items={testimonials} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding bg-brand-blue text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1fr,1fr]">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">
                  Passons à l'action
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Prêt à booster l'efficacité de vos installations ?
                </h2>
                <p className="text-base text-brand-light">
                  Partagez vos enjeux, nous vous recontactons sous 24h avec des premières recommandations et un devis personnalisé.
                </p>
                <div className="grid gap-4 text-sm text-brand-light">
                  <Link
                    href="mailto:contact@iceem.tn"
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">📧</span>
                    <span>contact@iceem.tn</span>
                  </Link>
                  <Link
                    href="tel:+21671959533"
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">📞</span>
                    <span>+216 71 959 533</span>
                  </Link>
                  <address className="not-italic">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-4 py-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">📍</span>
                      <span>Rue de l&apos;Industrie, Charguia II, Tunis</span>
                    </div>
                  </address>
                </div>
              </div>
              <form
                className="space-y-5 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur"
                method="post"
                aria-label="Formulaire de contact Iceem"
              >
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-brand-light">
                    Nom & Société
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="mt-2 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-sm text-brand-blue placeholder:text-brand-blue/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/60"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-brand-light">
                      Email professionnel
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nom@entreprise.tn"
                      required
                      className="mt-2 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-sm text-brand-blue placeholder:text-brand-blue/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-brand-light">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+216"
                      className="mt-2 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-sm text-brand-blue placeholder:text-brand-blue/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/60"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-brand-light">
                    Besoin principal
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Décrivez votre projet..."
                    className="mt-2 w-full rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-sm text-brand-blue placeholder:text-brand-blue/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/60"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-green px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-xl transition hover:bg-brand-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Envoyer ma demande
                </button>
                <p className="text-xs text-brand-light/80">
                  En soumettant ce formulaire, vous acceptez le traitement de vos données conformément à notre politique de confidentialité.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
            <div>
              <div className="flex items-center gap-3 text-brand-blue">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-lg font-bold text-white">I</span>
                <span className="text-lg font-semibold">Iceem.tn</span>
              </div>
              <p className="mt-4 max-w-md text-sm text-slate-600">
                Iceem est une société d'ingénierie tunisienne spécialisée dans les solutions énergétiques, la maintenance industrielle et la transformation digitale des infrastructures techniques.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-600">
              <p className="font-semibold uppercase tracking-wide text-brand-blue">Contact</p>
              <Link href="mailto:contact@iceem.tn" className="hover:text-brand-blue">
                contact@iceem.tn
              </Link>
              <Link href="tel:+21671959533" className="hover:text-brand-blue">
                +216 71 959 533
              </Link>
              <address className="not-italic">Rue de l&apos;Industrie, Charguia II, Tunis</address>
              <div className="mt-4 flex gap-4 text-lg">
                <Link
                  href="https://www.linkedin.com/company/iceem"
                  className="hover:text-brand-blue"
                  aria-label="LinkedIn Iceem"
                >
                  in
                </Link>
                <Link
                  href="https://www.facebook.com/iceemtunisie"
                  className="hover:text-brand-blue"
                  aria-label="Facebook Iceem"
                >
                  f
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Iceem.tn – Tous droits réservés.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-brand-blue">
                Mentions légales
              </Link>
              <Link href="#" className="hover:text-brand-blue">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
