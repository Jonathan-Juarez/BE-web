import "@/App.css";
import {
  BookOpen,
  FolderTree,
  NotebookPen,
  RefreshCw,
  Search,
  Apple,
  Play,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: FolderTree,
    title: "Organización por materias",
    desc: "Crea estantes virtuales y mantén cada asignatura en su sitio.",
  },
  {
    icon: NotebookPen,
    title: "Notas sincronizadas",
    desc: "Escribe en tu móvil y continúa donde lo dejaste, sin esfuerzo.",
  },
  {
    icon: Search,
    title: "Búsqueda inteligente",
    desc: "Encuentra apuntes, PDFs y resúmenes en segundos.",
  },
  {
    icon: RefreshCw,
    title: "Disponible sin conexión",
    desc: "Estudia donde quieras, incluso sin acceso a internet.",
  },
];

const StoreButton = ({ variant = "primary", icon: Icon, label, sub, testid }) => {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-medium transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-[#2F6BFF] text-white hover:bg-[#1E54E0] shadow-[0_10px_30px_-10px_rgba(47,107,255,0.6)]"
      : "bg-white/5 text-white border border-white/10 hover:bg-white/10";
  return (
    <a href="#" data-testid={testid} className={`${base} ${styles}`}>
      <Icon className="h-6 w-6" strokeWidth={1.8} />
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-80">
          {sub}
        </span>
        <span className="text-sm sm:text-base font-semibold">{label}</span>
      </span>
    </a>
  );
};

const PhoneMockup = () => (
  <div
    data-testid="phone-mockup"
    className="relative mx-auto w-[260px] sm:w-[290px] aspect-[9/19] rounded-[44px] border border-white/10 bg-gradient-to-b from-[#1a1d24] to-[#0f1115] shadow-[0_40px_80px_-30px_rgba(47,107,255,0.35)] p-3"
  >
    {/* Notch */}
    <div className="absolute left-1/2 top-3 -translate-x-1/2 h-6 w-28 rounded-full bg-black/80 z-10" />
    {/* Screen */}
    <div className="relative h-full w-full rounded-[34px] bg-[#0b0d11] overflow-hidden border border-white/5">
      <div className="px-5 pt-10">
        <p className="text-[11px] text-zinc-500 tracking-wide">Buenos días,</p>
        <h3 className="text-white text-lg font-semibold mt-1">Tu biblioteca</h3>

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 border border-white/5">
          <Search className="h-4 w-4 text-zinc-400" />
          <span className="text-xs text-zinc-500">Buscar apuntes…</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {[
            { name: "Cálculo", color: "from-[#2F6BFF] to-[#1E54E0]", count: 12 },
            { name: "Historia", color: "from-[#5B8DEF] to-[#2F6BFF]", count: 8 },
            { name: "Biología", color: "from-[#4F46E5] to-[#2F6BFF]", count: 15 },
            { name: "Física", color: "from-[#2F6BFF] to-[#0EA5E9]", count: 6 },
          ].map((s) => (
            <div
              key={s.name}
              className={`rounded-2xl bg-gradient-to-br ${s.color} p-3 aspect-square flex flex-col justify-between`}
            >
              <BookOpen className="h-4 w-4 text-white/90" />
              <div>
                <p className="text-[11px] text-white/70">{s.count} notas</p>
                <p className="text-white text-sm font-semibold">{s.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">
            Reciente
          </p>
          <div className="mt-2 space-y-2">
            {["Resumen Cap. 4", "Exámen Algebra"].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2.5 rounded-lg bg-white/5 px-2.5 py-2 border border-white/5"
              >
                <div className="h-7 w-7 rounded-md bg-[#2F6BFF]/20 flex items-center justify-center">
                  <NotebookPen className="h-3.5 w-3.5 text-[#5B8DEF]" />
                </div>
                <span className="text-xs text-zinc-300">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div
      data-testid="landing-page"
      className="min-h-screen bg-[#0f1115] text-white antialiased"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#2F6BFF]/10 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10">
        <nav
          data-testid="navbar"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 py-6"
        >
          <a
            href="#"
            data-testid="logo"
            className="flex items-center gap-2 group"
          >
            <div className="h-9 w-9 rounded-xl bg-[#2F6BFF] flex items-center justify-center transition-transform group-hover:rotate-6">
              <BookOpen className="h-5 w-5 text-white" strokeWidth={2.2} />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight">
              Biblioteca de Estudio
            </span>
          </a>
          <a
            href="#download"
            data-testid="navbar-download-btn"
            className="rounded-full bg-[#2F6BFF] hover:bg-[#1E54E0] px-5 py-2 text-sm font-medium text-white transition-colors"
          >
            Descargar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 pt-12 sm:pt-20 pb-24 sm:pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
              Nueva versión disponible
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Todo tu material de estudio
              <span className="text-[#5B8DEF]"> en un solo lugar.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Organiza tus apuntes, PDFs y resúmenes por asignatura. Sincronización
              automática, búsqueda instantánea y acceso sin conexión.
            </p>

            <div
              id="download"
              className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              data-testid="hero-download-buttons"
            >
              <StoreButton
                testid="hero-appstore-btn"
                variant="primary"
                icon={Apple}
                sub="Consíguelo en"
                label="App Store"
              />
              <StoreButton
                testid="hero-googleplay-btn"
                variant="secondary"
                icon={Play}
                sub="Disponible en"
                label="Google Play"
              />
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-zinc-500">
              <div>
                <span className="text-white font-semibold text-lg">4.9★</span>
                <span className="ml-2">+2,500 reseñas</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-white font-semibold text-lg">120K+</span>
                <span className="ml-2">estudiantes</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        data-testid="features-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28 border-t border-white/5"
      >
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#5B8DEF] mb-4">
            Características
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Diseñada para estudiar mejor.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-testid={`feature-card-${i}`}
                className="group rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F6BFF]/15 text-[#5B8DEF] mb-6 group-hover:bg-[#2F6BFF]/25 transition-colors">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        data-testid="cta-final-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1d24] via-[#161922] to-[#0f1115] border border-white/10 px-8 sm:px-16 py-16 sm:py-20 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[#2F6BFF]/15 blur-[100px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              Empieza a estudiar de forma
              <span className="text-[#5B8DEF]"> inteligente</span> hoy.
            </h2>
            <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
              Descarga gratis y lleva contigo toda tu biblioteca académica.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <StoreButton
                testid="cta-appstore-btn"
                variant="primary"
                icon={Apple}
                sub="Consíguelo en"
                label="App Store"
              />
              <StoreButton
                testid="cta-googleplay-btn"
                variant="secondary"
                icon={Play}
                sub="Disponible en"
                label="Google Play"
              />
            </div>
            <a
              href="#"
              data-testid="cta-learn-more"
              className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Saber más
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        data-testid="footer"
        className="relative z-10 border-t border-white/5"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Biblioteca de Estudio. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              data-testid="footer-privacy"
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              data-testid="footer-terms"
              className="hover:text-white transition-colors"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
