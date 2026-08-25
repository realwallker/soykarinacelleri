"use client";

/* eslint-disable @next/next/no-img-element -- Project art uses curated desktop/mobile picture sources. */

import { useEffect, useRef, useState } from "react";

type ProjectMedia = {
  asset: string;
  alt: string;
  label: string;
  kind: "Render oficial" | "Avance real" | "Masterplan";
};

type Project = {
  id: string;
  order: string;
  eyebrow: string;
  title: string;
  location: string;
  summary: string;
  statement: string;
  facts: string[];
  logo: string;
  sourceLabel: string;
  media: ProjectMedia[];
};

const WHATSAPP = "593985166184";

const PROJECTS: Project[] = [
  {
    id: "olonesa-house-club",
    order: "01",
    eyebrow: "Comunidad Privada · Arquitectura Bioclimática",
    title: "Olonesa Reserva Village",
    location: "Olón, Santa Elena · Cordillera Chongón-Colonche",
    summary:
      "Una comunidad residencial de diseño consciente donde el bosque nativo y el océano conviven en perfecta armonía.",
    statement:
      "Olonesa Reserva Village propone 104 lotes residenciales dentro de más de 100 hectáreas de reserva natural protegida. Un entorno de baja densidad con House Club, piscina infinity, canchas de pádel y senderos ecológicos a solo 3 minutos de la playa de Olón.",
    facts: ["104 lotes exclusivos", "Desde 507 m²", "+100 Has. Reserva"],
    logo: "/media/projects/olonesa-reserva-village/logo.png",
    sourceLabel: "Masterplan oficial · Preventa 2026",
    media: [
      {
        asset: "/media/projects/olonesa-reserva-village/01-house-club",
        alt: "House Club y piscina infinity en Olonesa Reserva Village",
        label: "House Club & Piscina Infinity",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/02-lotes-villas",
        alt: "Villas bioclimáticas en el bosque de Olonesa",
        label: "Villas en el Bosque",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/03-reserva-trails",
        alt: "Mirador panorámico y senderos ecológicos en la reserva protegida",
        label: "Reserva & Senderos",
        kind: "Avance real",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/04-padel-wellness",
        alt: "Canchas de pádel y área social rodeadas de naturaleza",
        label: "Pádel & Wellness Lounge",
        kind: "Render oficial",
      },
    ],
  },
  {
    id: "olonesa-lotes",
    order: "02",
    eyebrow: "Lotes desde 507 m² · Preventa Exclusiva",
    title: "Lotes y Residencias",
    location: "Sector Olonesa · A 3 min de la playa",
    summary:
      "Terrenos de amplia privacidad rodeados de flora nativa, diseñados para construir villas de descanso con alta plusvalía.",
    statement:
      "Lotes unifamiliares con topografía privilegiada que garantiza vistas despejadas a la cordillera y brisa costera. Infraestructura de primer nivel con servicios soterrados y normas arquitectónicas de diseño sostenible.",
    facts: ["Lotes desde 507 m²", "Financiamiento directo", "Entrega planificada"],
    logo: "/media/projects/olonesa-reserva-village/logo.png",
    sourceLabel: "Selección de lotes · actualización 2026",
    media: [
      {
        asset: "/media/projects/olonesa-reserva-village/02-lotes-villas",
        alt: "Diseño de villa unifamiliar integrada al entorno natural en Olonesa",
        label: "Villas residenciales",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/01-house-club",
        alt: "Área social y House Club proyectado",
        label: "House Club & Piscina",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/03-reserva-trails",
        alt: "Senderos y áreas verdes protegidas",
        label: "Entorno natural",
        kind: "Avance real",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/04-padel-wellness",
        alt: "Área deportiva y de esparcimiento",
        label: "Pádel & Lounge",
        kind: "Render oficial",
      },
    ],
  },
  {
    id: "olonesa-reserva",
    order: "03",
    eyebrow: "Conservación & Biodiversidad · Bosque Nativo",
    title: "Reserva Protegida",
    location: "Cordillera Chongón-Colonche · Olón",
    summary:
      "Más de 100 hectáreas de bosque tropical seco y senderos privados protegidos a perpetuidad para los residentes.",
    statement:
      "Un compromiso real de conservación ambiental donde más del 70% del macroproyecto se mantiene intacto. Rutas de senderismo, avistamiento de aves, miradores panorámicos y aire puro entre el bosque y el océano Pacífico.",
    facts: ["+100 Has. protegidas", "Senderos & Miradores", "Reserva permanente"],
    logo: "/media/projects/olonesa-reserva-village/logo.png",
    sourceLabel: "Conservación ecológica certificada",
    media: [
      {
        asset: "/media/projects/olonesa-reserva-village/03-reserva-trails",
        alt: "Mirador hacia las colinas verdes y el océano en Olón",
        label: "Mirador a la Cordillera y el Mar",
        kind: "Avance real",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/01-house-club",
        alt: "House Club integrado en la vegetación nativa",
        label: "House Club integrado",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/02-lotes-villas",
        alt: "Villas sostenibles en medio del bosque",
        label: "Villas sostenibles",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/04-padel-wellness",
        alt: "Bienestar y deporte en medio de la reserva",
        label: "Wellness en el bosque",
        kind: "Render oficial",
      },
    ],
  },
  {
    id: "olonesa-lifestyle",
    order: "04",
    eyebrow: "Amenidades Premium · Estilo de Vida Costero",
    title: "Pádel, Gastronomía & Vida",
    location: "Olón · Junto a Olonesa Reserva Lodge",
    summary:
      "Canchas de pádel de cristal, gastronomía de autor, wellness y la tranquilidad de la playa más cotizada de la costa.",
    statement:
      "Vecino al prestigioso Olonesa Reserva Lodge y su afamado restaurante Bruma, el club ofrece canchas de pádel reglamentarias, áreas lounge, coworking en la naturaleza y seguridad 24/7 con control de acceso inteligente.",
    facts: ["Canchas de Pádel", "Gastronomía & Lounge", "Seguridad 24/7"],
    logo: "/media/projects/olonesa-reserva-village/logo.png",
    sourceLabel: "Experiencia Olón · Estilo de vida",
    media: [
      {
        asset: "/media/projects/olonesa-reserva-village/04-padel-wellness",
        alt: "Canchas de pádel y lounge social en Olonesa",
        label: "Pádel Lounge & Bar",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/01-house-club",
        alt: "Piscina social y asoleaderos",
        label: "Piscina social",
        kind: "Render oficial",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/03-reserva-trails",
        alt: "Rutas de trekking y contacto con la naturaleza",
        label: "Rutas de trekking",
        kind: "Avance real",
      },
      {
        asset: "/media/projects/olonesa-reserva-village/02-lotes-villas",
        alt: "Villas exclusivas rodeadas de palmeras y vegetación",
        label: "Villas exclusivas",
        kind: "Render oficial",
      },
    ],
  },
];

const EPISODES = [
  {
    id: "FzwLxWjyrGk",
    number: "02",
    label: "Último episodio",
    title: "El ADN del liderazgo inmobiliario de alto impacto",
    guest: "Con Silvia Mackliff",
    duration: "23:28",
    image: "https://i.ytimg.com/vi/FzwLxWjyrGk/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=FzwLxWjyrGk",
  },
  {
    id: "RZpeBVdq1dM",
    number: "01",
    label: "Primera Piedra",
    title: "Mitos vs. realidad del mercado inmobiliario",
    guest: "Karina & Rebeca",
    duration: "16:40",
    image: "https://i.ytimg.com/vi/RZpeBVdq1dM/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=RZpeBVdq1dM",
  },
  {
    id: "proximo-weldyn",
    number: "03",
    label: "En producción",
    title: "Una nueva conversación que empieza por la primera piedra",
    guest: "Próximamente",
    duration: "Episodio 03",
    image: "/media/brand/primera-piedra.png",
    href: "https://www.youtube.com/channel/UCBdGfXLFCowfx5l5XD8y6OQ",
    upcoming: true,
  },
];

const SOCIALS = [
  { platform: "Instagram", account: "@primerapiedra.ec", title: "Karina en Primera Piedra", image: "/media/social/ig-podcast-karina.webp", href: "https://www.instagram.com/primerapiedra.ec/" },
  { platform: "TikTok", account: "@soykarinacelleri", title: "Oficinas o lotes", image: "/media/social/tk-oficinas-lotes.webp", href: "https://www.tiktok.com/@soykarinacelleri" },
  { platform: "Instagram", account: "@soykarinacelleri", title: "Expocata 2026", image: "/media/social/ig-expocata-2026.webp", href: "https://www.instagram.com/soykarinacelleri/" },
  { platform: "Instagram", account: "@primerapiedra.ec", title: "Primer episodio", image: "/media/social/ig-primer-episodio.webp", href: "https://www.instagram.com/primerapiedra.ec/" },
  { platform: "TikTok", account: "@soykarinacelleri", title: "Isla Mocolí", image: "/media/social/tk-isla-mocoli.webp", href: "https://www.tiktok.com/@soykarinacelleri" },
  { platform: "Instagram", account: "@soykarinacelleri", title: "Invierte en tu futuro", image: "/media/social/ig-invierte-futuro.webp", href: "https://www.instagram.com/soykarinacelleri/" },
  { platform: "Instagram", account: "@soykarinacelleri", title: "La experiencia Aires Este", image: "/media/social/ig-aires-este-padel.webp", href: "https://www.instagram.com/soykarinacelleri/" },
  { platform: "TikTok", account: "@soykarinacelleri", title: "Vive Aires Este", image: "/media/social/tk-aires-este.webp", href: "https://www.tiktok.com/@soykarinacelleri" },
  { platform: "Instagram", account: "@soykarinacelleri", title: "Asesoras en acción", image: "/media/social/ig-agroexpo-action.webp", href: "https://www.instagram.com/soykarinacelleri/" },
  { platform: "Instagram", account: "@primerapiedra.ec", title: "Día de pádel", image: "/media/social/ig-padel-action.webp", href: "https://www.instagram.com/primerapiedra.ec/" },
  { platform: "Instagram", account: "@soykarinacelleri", title: "Aires Este para invertir", image: "/media/social/ig-aires-este.webp", href: "https://www.instagram.com/soykarinacelleri/" },
  { platform: "Instagram", account: "@primerapiedra.ec", title: "Grandes conversaciones", image: "/media/social/ig-grandes-conversaciones.webp", href: "https://www.instagram.com/primerapiedra.ec/" },
];

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={direction === "left" ? "flip" : undefined}>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="icon-fill" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 4v10.3a4.8 4.8 0 1 1-4-4.7V13a2 2 0 1 0 1.2 1.8V4h2.8c.5 2.1 1.8 3.5 4 4v3.1A8 8 0 0 1 15 9.7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.4-1.7A11.8 11.8 0 0 0 24 11.9a11.7 11.7 0 0 0-3.5-8.4ZM12.1 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.3 4.7Zm5.4-7.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.4.2-.7 0a8 8 0 0 1-2.4-1.4A9 9 0 0 1 9.2 11c-.2-.3 0-.5.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.3-.2-.6-.4Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 7 8 5-8 5Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="youtube-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3Z" />
    </svg>
  );
}

function ProjectImage({
  media,
  className,
  eager = false,
}: {
  media: ProjectMedia;
  className: string;
  eager?: boolean;
}) {
  return (
    <picture className="project-picture">
      <source media="(max-width: 720px)" srcSet={`${media.asset}-mobile.webp`} />
      <img
        className={className}
        src={`${media.asset}-wide.webp`}
        alt={media.alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}

function whatsappUrl(project?: Project) {
  const message = project
    ? `Hola Karina, estuve revisando tu portafolio y me interesa conocer más sobre Olonesa Reserva Village (${project.title}). ¿Podemos conversar?`
    : "Hola Karina, estuve revisando tu portafolio y quisiera conversar sobre oportunidades de inversión en Olonesa Reserva Village en Olón.";
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [episodeIndex, setEpisodeIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const pointerWasSwipe = useRef(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const project = PROJECTS[projectIndex];
  const episode = EPISODES[episodeIndex];
  const galleryMedia = project.media[galleryIndex];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || modalOpen || paused) return;
    const timer = window.setInterval(
      () => setProjectIndex((current) => (current + 1) % PROJECTS.length),
      7600,
    );
    return () => window.clearInterval(timer);
  }, [modalOpen, paused, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || modalOpen) return;
    const timer = window.setInterval(
      () => setEpisodeIndex((current) => (current + 1) % EPISODES.length),
      9200,
    );
    return () => window.clearInterval(timer);
  }, [modalOpen, reducedMotion]);

  useEffect(() => {
    const next = PROJECTS[(projectIndex + 1) % PROJECTS.length].media[0];
    const preload = new Image();
    preload.src = `${next.asset}-wide.webp`;
  }, [projectIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (modalOpen && !dialog.open) dialog.showModal();
    if (!modalOpen && dialog.open) dialog.close();
  }, [modalOpen]);

  function moveProject(step: number) {
    setProjectIndex((current) => (current + step + PROJECTS.length) % PROJECTS.length);
  }

  function openProject() {
    setGalleryIndex(0);
    setModalOpen(true);
  }

  function moveEpisode(step: number) {
    setEpisodeIndex((current) => (current + step + EPISODES.length) % EPISODES.length);
  }

  function moveGallery(step: number) {
    setGalleryIndex((current) => (current + step + project.media.length) % project.media.length);
  }

  return (
    <>
      <a className="skip-link" href="#project-stage">Ir al portafolio</a>

      <div className="ambient" aria-hidden="true">
        <video
          className="ambient-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/media/bg-botanico-poster.webp"
        >
          <source
            src="/media/bg-botanico.mp4"
            type="video/mp4"
            media="(min-width: 1025px) and (prefers-reduced-motion: no-preference)"
          />
        </video>
        <div className="ambient-wash" />
        <div className="ambient-grain" />
      </div>

      <main className="site-shell">
        <header className="identity-panel glass-panel">
          <div className="identity-topline">
            <span className="status-dot" />
            <span>Asesoría Privada · Curaduría Inmobiliaria</span>
          </div>

          <div className="identity-person">
            <div className="avatar-wrap">
              <img
                className="avatar"
                src="/media/profile/karina.webp"
                alt="Karina Célleri, asesora inmobiliaria"
                width="800"
                height="800"
                fetchPriority="high"
              />
              <span className="avatar-mark">KC</span>
            </div>
            <div className="identity-name">
              <p>Inversiones patrimoniales</p>
              <h1>Karina <em>Célleri</em></h1>
              <span>Bienes raíces de alta gama</span>
            </div>
          </div>

          <p className="identity-statement">
            Curaduría de proyectos residenciales exclusivos y comunidades conscientes en las zonas de mayor proyección de la Costa y Samborondón.
          </p>

          <nav className="profile-links" aria-label="Redes sociales de Karina Célleri">
            <a href="https://www.instagram.com/soykarinacelleri/" target="_blank" rel="noreferrer" aria-label="Instagram de Karina Célleri">
              <InstagramIcon />
              <span>Instagram</span>
              <ArrowIcon />
            </a>
            <a href="https://www.tiktok.com/@soykarinacelleri" target="_blank" rel="noreferrer" aria-label="TikTok de Karina Célleri">
              <TikTokIcon />
              <span>TikTok</span>
              <ArrowIcon />
            </a>
          </nav>

          <div className="identity-action">
            <p>¿Encontraste una oportunidad interesante?</p>
            <a className="primary-cta" href={whatsappUrl(project)} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              <span>Conversar con Karina</span>
            </a>
          </div>

          <p className="identity-footer">Curaduría inmobiliaria · Atención personalizada</p>
        </header>

        <section className="workspace" aria-label="Portafolio vivo de Karina Célleri">
          <article
            className="project-stage"
            id="project-stage"
            tabIndex={0}
            aria-roledescription="carrusel"
            aria-label={`${project.title}. ${project.summary} Toca la imagen o presiona Enter para explorar.`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onClick={(event) => {
              const target = event.target as HTMLElement;
              if (target.closest("button, a")) return;
              if (pointerWasSwipe.current) {
                pointerWasSwipe.current = false;
                return;
              }
              openProject();
            }}
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return;
              if (event.key === "ArrowLeft") moveProject(-1);
              if (event.key === "ArrowRight") moveProject(1);
              if (event.key === "Enter") openProject();
            }}
            onPointerDown={(event) => {
              pointerStart.current = event.clientX;
              pointerWasSwipe.current = false;
            }}
            onPointerUp={(event) => {
              if (pointerStart.current === null) return;
              const distance = event.clientX - pointerStart.current;
              pointerStart.current = null;
              pointerWasSwipe.current = Math.abs(distance) > 48;
              if (pointerWasSwipe.current) moveProject(distance > 0 ? -1 : 1);
            }}
            onPointerCancel={() => {
              pointerStart.current = null;
              pointerWasSwipe.current = false;
            }}
          >
            <ProjectImage key={`${project.id}-hero`} media={project.media[0]} className="project-hero" eager={projectIndex === 0} />
            <div className="project-shade" />
            <span className="project-tap-hint" aria-hidden="true">
              Toca para explorar <ArrowIcon />
            </span>

            <div className="stage-topbar">
              <span className="stage-label"><i /> Portafolio vivo</span>
              <div className="stage-brand">
                <img src={project.logo} alt={`Logo ${project.title}`} />
              </div>
              <span className="stage-count"><b>{project.order}</b> / 04</span>
            </div>

            <div className="project-main" aria-live="polite">
              <div className="project-meta-row">
                <span>{project.eyebrow}</span>
                <span className="project-location">{project.location}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-facts" aria-label="Datos principales">
                {project.facts.map((fact) => <span key={fact}>{fact}</span>)}
              </div>
              <div className="project-actions">
                <button className="stage-cta" type="button" onClick={openProject}>
                  Explorar proyecto <ArrowIcon />
                </button>
                <div className="project-dots" role="group" aria-label="Seleccionar proyecto">
                  {PROJECTS.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={index === projectIndex ? "is-active" : undefined}
                      aria-label={`Ver ${item.title}`}
                      aria-current={index === projectIndex ? "true" : undefined}
                      onClick={() => setProjectIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="stage-nav" role="group" aria-label="Navegación de proyectos">
              <button type="button" onClick={() => moveProject(-1)} aria-label="Proyecto anterior"><ArrowIcon direction="left" /></button>
              <button type="button" onClick={() => moveProject(1)} aria-label="Proyecto siguiente"><ArrowIcon /></button>
            </div>

            <div className="stage-progress" aria-hidden="true">
              <span key={project.id} />
            </div>
          </article>

          <aside className="live-stack" aria-label="Contenido reciente">
            <section className="podcast-panel panel-card glass-panel" aria-labelledby="podcast-title">
              <div className="panel-heading">
                <div>
                  <span className="panel-overline">Cultura inmobiliaria</span>
                  <h2 id="podcast-title">Primera Piedra Podcast</h2>
                </div>
                <a className="youtube-channel-link" href="https://www.youtube.com/channel/UCBdGfXLFCowfx5l5XD8y6OQ" target="_blank" rel="noreferrer" aria-label="Abrir canal de Primera Piedra Podcast en YouTube">
                  <YouTubeIcon /><span>YouTube</span>
                </a>
              </div>

              <a className="episode-card" href={episode.href} target="_blank" rel="noreferrer" aria-label={`${episode.label}: ${episode.title}`}>
                <div className={`episode-visual${episode.upcoming ? " is-upcoming" : ""}`}>
                  <img
                    key={episode.id}
                    src={episode.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.src = "/media/brand/primera-piedra.png";
                      event.currentTarget.classList.add("contain");
                    }}
                  />
                  <span className="episode-play"><PlayIcon /></span>
                  <span className="episode-duration">{episode.duration}</span>
                </div>
                <div className="episode-copy">
                  <span>{episode.label}</span>
                  <h3>{episode.title}</h3>
                  <p>Episodio {episode.number} · {episode.guest}</p>
                </div>
              </a>

              <div className="episode-controls">
                <div className="episode-progress" aria-label={`Episodio ${episodeIndex + 1} de ${EPISODES.length}`}>
                  {EPISODES.map((item, index) => <span key={item.id} className={index === episodeIndex ? "is-active" : undefined} />)}
                </div>
                <div>
                  <button type="button" onClick={() => moveEpisode(-1)} aria-label="Episodio anterior">←</button>
                  <button type="button" onClick={() => moveEpisode(1)} aria-label="Episodio siguiente">→</button>
                </div>
              </div>
            </section>

            <section className="social-panel panel-card glass-panel" aria-labelledby="social-title">
              <div className="panel-heading social-heading">
                <div>
                  <span className="panel-overline">Instagram + TikTok</span>
                  <h2 id="social-title">Reels recientes</h2>
                </div>
                <span className="selection-pill"><i /> Selección</span>
              </div>

              <div className="social-window">
                <div className="social-track">
                  {[...SOCIALS, ...SOCIALS].map((item, index) => (
                    <a
                      className="social-story"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      key={`${item.platform}-${item.title}-${index}`}
                      aria-label={`Abrir el perfil ${item.account} en ${item.platform}`}
                      aria-hidden={index >= SOCIALS.length ? "true" : undefined}
                      tabIndex={index >= SOCIALS.length ? -1 : undefined}
                    >
                      <img src={item.image} alt="" loading="lazy" decoding="async" />
                      <span className="story-platform">{item.platform === "Instagram" ? "Ig" : "Tk"}</span>
                      <span className="story-copy"><b>{item.title}</b><small>{item.account}</small></span>
                    </a>
                  ))}
                </div>
              </div>
              <p className="social-hint">Se mueve sola · Toca una historia para abrir su perfil</p>
            </section>
          </aside>
        </section>

        <nav className="mobile-dock glass-panel" aria-label="Acciones rápidas">
          <a href="https://www.instagram.com/soykarinacelleri/" target="_blank" rel="noreferrer" aria-label="Instagram de Karina"><InstagramIcon /><span>Instagram</span></a>
          <a className="mobile-primary" href={whatsappUrl(project)} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>Hablar con Karina</span></a>
          <a href="https://www.tiktok.com/@soykarinacelleri" target="_blank" rel="noreferrer" aria-label="TikTok de Karina"><TikTokIcon /><span>TikTok</span></a>
        </nav>
      </main>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onClose={() => setModalOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setModalOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setModalOpen(false);
        }}
      >
        <div className="dialog-shell">
          <button className="dialog-close" type="button" onClick={() => setModalOpen(false)} aria-label="Cerrar proyecto" autoFocus>
            <span />
            <span />
          </button>

          <div className="dialog-gallery">
            <ProjectImage key={`${project.id}-${galleryIndex}`} media={galleryMedia} className="dialog-image" eager />
            <div className="dialog-image-shade" />
            <div className="dialog-gallery-top">
              <span className={galleryMedia.kind === "Avance real" ? "is-real" : undefined}>{galleryMedia.kind}</span>
              <span>{String(galleryIndex + 1).padStart(2, "0")} / {String(project.media.length).padStart(2, "0")}</span>
            </div>
            <div className="dialog-caption">{galleryMedia.label}</div>
            <div className="dialog-gallery-controls">
              <button type="button" onClick={() => moveGallery(-1)} aria-label="Imagen anterior"><ArrowIcon direction="left" /></button>
              <button type="button" onClick={() => moveGallery(1)} aria-label="Imagen siguiente"><ArrowIcon /></button>
            </div>
            <div className="dialog-dots" role="group" aria-label="Seleccionar imagen">
              {project.media.map((item, index) => (
                <button key={item.asset} type="button" className={index === galleryIndex ? "is-active" : undefined} onClick={() => setGalleryIndex(index)} aria-label={`Ver ${item.label}`} />
              ))}
            </div>
          </div>

          <div className="dialog-content" role="region" aria-label={`Información completa de ${project.title}`} tabIndex={0}>
            <div>
              <p className="dialog-eyebrow">{project.eyebrow}</p>
              <h2 id="dialog-title">{project.title}</h2>
              <p className="dialog-location">{project.location}</p>
            </div>
            <p className="dialog-statement">{project.statement}</p>
            <ul className="dialog-facts">
              {project.facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
            <div className="dialog-trust">
              <span className="trust-dot" />
              <div><b>Información visual verificada</b><span>{project.sourceLabel}</span></div>
            </div>
            <p className="dialog-note">Disponibilidad, precios, áreas y condiciones sujetos a confirmación con Karina.</p>
            <a className="dialog-cta" href={whatsappUrl(project)} target="_blank" rel="noreferrer">
              Solicitar disponibilidad <ArrowIcon />
            </a>
          </div>
        </div>
      </dialog>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Karina Célleri",
            jobTitle: "Asesora de inversiones inmobiliarias",
            areaServed: ["Olón, Ecuador", "Samborondón, Ecuador", "Santa Elena, Ecuador"],
            sameAs: [
              "https://www.instagram.com/soykarinacelleri/",
              "https://www.tiktok.com/@soykarinacelleri",
              "https://www.youtube.com/channel/UCBdGfXLFCowfx5l5XD8y6OQ",
            ],
          }),
        }}
      />
    </>
  );
}
