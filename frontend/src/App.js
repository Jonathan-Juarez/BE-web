import "@/App.css";
import {
  BookOpen,
  Sparkles,
  Search,
  ScanSearch,
  Image as ImageIcon,
  ListChecks,
  GraduationCap,
  NotebookPen,
  CalendarDays,
  BookCopy,
  Volume2,
  BookMarked,
  MessageSquareQuote,
  Music,
  WifiOff,
  Heart,
  Monitor,
  ArrowRight,
  Download,
  ShieldCheck,
} from "lucide-react";

const HERO_IMAGE =
  "https://customer-assets.emergentagent.com/job_study-connect-64/artifacts/41a7zvdw_image.png";

const features = [
  { icon: BookOpen, title: "Múltiples versiones de la Biblia", desc: "Reina Valera, NVI y más, todas a un clic." },
  { icon: Sparkles, title: "Asistente con IA", desc: "Resuelve dudas y profundiza pasajes al instante." },
  { icon: Search, title: "Búsqueda rápida", desc: "Localiza libros y versículos en segundos." },
  { icon: ScanSearch, title: "Búsqueda avanzada", desc: "Filtra por palabras, frases y combinaciones." },
  { icon: ImageIcon, title: "Modo Presentación", desc: "Fondos dinámicos para cultos y reuniones." },
  { icon: ListChecks, title: "Temas de estudio", desc: "Agrupa versículos para tus sermones." },
  { icon: GraduationCap, title: "Escuela Sabática", desc: "Lección diaria y versículo de memoria." },
  { icon: NotebookPen, title: "Centro de Estudio", desc: "Notas, marcadores y progreso personal." },
  { icon: CalendarDays, title: "Reavivados por su Palabra", desc: "Plan de lectura diario #RPSP." },
  { icon: BookCopy, title: "Modo Dual", desc: "Alterna entre Biblia y Lección sin perder el hilo." },
  { icon: Volume2, title: "Lectura de Voz (TTS)", desc: "Escucha la Palabra en tiempo real." },
  { icon: BookMarked, title: "Diccionario Bíblico", desc: "Definiciones integradas con un toque." },
  { icon: MessageSquareQuote, title: "Comentario Bíblico Adventista", desc: "CBA disponible para libros seleccionados." },
  { icon: Music, title: "Himnario con internet", desc: "Reproduce himnos en streaming." },
  { icon: WifiOff, title: "Himnario sin internet", desc: "Disfruta tus himnos offline en cualquier lugar." },
  { icon: Heart, title: "Fe de Jesús", desc: "28 creencias fundamentales al alcance." },
];

const DownloadButton = ({ size = "lg", testid = "download-btn" }) => {
  const sizes =
    size === "lg"
      ? "px-8 py-4 text-base"
      : "px-5 py-2 text-sm";
  return (
    <a
      href="#"
      data-testid={testid}
      className={`group inline-flex items-center gap-3 rounded-full bg-[#2F6BFF] hover:bg-[#1E54E0] text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(47,107,255,0.6)] ${sizes}`}
    >
      <Download className="h-5 w-5" strokeWidth={2.2} />
      <span className="flex items-center gap-2">
        Descargar para Windows
        <span className="text-xs font-normal opacity-70">(.exe)</span>
      </span>
      <ArrowRight className="h-4 w-4 -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </a>
  );
};

const AppPreview = () => (
  <div
    data-testid="app-preview"
    className="relative w-full max-w-[640px] mx-auto"
  >
    {/* Window chrome */}
    <div className="rounded-t-xl bg-[#1a1d24] border border-white/10 border-b-0 px-4 py-2.5 flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 text-[11px] text-zinc-500 truncate">
        Biblioteca de Estudio
      </span>
    </div>
    {/* Image */}
    <div className="relative rounded-b-xl overflow-hidden border border-white/10 border-t-0 bg-[#0b0d11] shadow-[0_40px_80px_-30px_rgba(47,107,255,0.45)]">
      <img
        src={HERO_IMAGE}
        alt="Biblioteca de Estudio — captura de la app"
        className="block w-full h-auto"
        loading="eager"
      />
    </div>
    {/* Glow */}
    <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 bg-[#2F6BFF]/20 blur-[80px] -z-10" />
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
          <a href="#" data-testid="logo" className="flex items-center gap-2 group">
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
            className="inline-flex items-center gap-2 rounded-full bg-[#2F6BFF] hover:bg-[#1E54E0] px-5 py-2 text-sm font-medium text-white transition-colors"
          >
            <Download className="h-4 w-4" />
            Descargar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 pt-12 sm:pt-20 pb-24 sm:pb-28"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 mb-6">
              <Monitor className="h-3.5 w-3.5 text-[#5B8DEF]" />
              Aplicación para Windows 10 / 11
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Tu biblioteca bíblica completa,
              <span className="text-[#5B8DEF]"> en tu PC.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              Biblia, Escuela Sabática, Himnario, Fe de Jesús y un asistente con IA.
              Todo en una sola aplicación de escritorio, online y offline.
            </p>

            <div id="download" className="mt-10" data-testid="hero-download-wrap">
              <DownloadButton size="lg" testid="hero-download-btn" />
              <p className="mt-3 text-xs text-zinc-500 flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/70" />
                Instalador .exe firmado · Compatible con Windows 10 y 11
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-zinc-500">
              <div>
                <span className="text-white font-semibold text-lg">16+</span>
                <span className="ml-2">funciones</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-white font-semibold text-lg">100%</span>
                <span className="ml-2">gratis</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <span className="text-white font-semibold text-lg">Offline</span>
                <span className="ml-2">disponible</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        data-testid="features-section"
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28 border-t border-white/5"
      >
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#5B8DEF] mb-4">
            Características
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Todo lo que necesitas para estudiar la Palabra.
          </h2>
          <p className="mt-5 text-zinc-400 text-base sm:text-lg">
            Una suite completa pensada para creyentes, estudiantes y predicadores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-testid={`feature-card-${i}`}
                className="group rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F6BFF]/15 text-[#5B8DEF] mb-4 group-hover:bg-[#2F6BFF]/25 transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-zinc-500 italic max-w-2xl">
          * El Comentario Bíblico Adventista (CBA) está parcialmente disponible para
          Génesis, Éxodo, Levítico, Números, Deuteronomio (1–5), Isaías y Efesios.
        </p>
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
              Lleva la Palabra a tu escritorio
              <span className="text-[#5B8DEF]"> hoy mismo.</span>
            </h2>
            <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
              Descarga gratis Biblioteca de Estudio para Windows y comienza a estudiar
              de una forma totalmente nueva.
            </p>
            <div className="mt-10 flex justify-center">
              <DownloadButton size="lg" testid="cta-download-btn" />
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Windows 10 / 11 · Instalador .exe · 100% gratis
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-testid="footer" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Biblioteca de Estudio. Todos los derechos
            reservados.
          </p>
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
