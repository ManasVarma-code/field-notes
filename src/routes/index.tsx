import { createFileRoute } from "@tanstack/react-router";
import { SITE_CONFIG } from "@/config/site";
import { SiteHeader } from "@/components/beenhere/SiteHeader";
import { Hero } from "@/components/beenhere/Hero";
import { InvestigationChapter } from "@/components/beenhere/InvestigationChapter";
import { MindsetChapter } from "@/components/beenhere/MindsetChapter";
import { InvitationChapter } from "@/components/beenhere/InvitationChapter";
import { SiteFooter } from "@/components/beenhere/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` },
      { name: "description", content: SITE_CONFIG.description },
      { property: "og:title", content: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` },
      { property: "og:description", content: SITE_CONFIG.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` },
      { name: "twitter:description", content: SITE_CONFIG.description },
      { name: "twitter:image", content: "/og-image.svg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bh-page bh-home">
      <SiteHeader />
      <main id="main-content">
        {/* CHAPTER 01: THE STATEMENT */}
        <Hero />

        {/* CHAPTER 02: THE INVESTIGATION */}
        <InvestigationChapter />

        {/* CHAPTER 03: THE MINDSET */}
        <MindsetChapter />

        {/* CHAPTER 04: THE INVITATION */}
        <InvitationChapter />
      </main>
      <SiteFooter />
    </div>
  );
}
