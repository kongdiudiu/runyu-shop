import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/header";
import { Hero, HEROES } from "@/components/hero";
import { Teaser } from "@/components/teaser";
import { TEASERS } from "@/components/teaser-data";
import { LifestyleTiles } from "@/components/lifestyle";
import { GalleryGrid } from "@/components/gallery-grid";
import { Footer } from "@/components/footer";
import { CookieDialog } from "@/components/cookie-dialog";

export default function Home() {
  const [hero1, hero2, hero3, hero4] = HEROES;
  const [teaser1, teaser2, teaser3] = TEASERS;

  return (
    <>
      <a
        href="#MainContent"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:ring-2 focus:ring-ink"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="MainContent">
        <Hero {...hero1} />
        <Teaser teaser={teaser1} />
        <Hero {...hero2} />
        <LifestyleTiles />
        <Hero {...hero3} />
        <Teaser teaser={teaser2} />
        <Hero {...hero4} />
        <Teaser teaser={teaser3} />
        <GalleryGrid />
      </main>
      <Footer />
      <CookieDialog />
    </>
  );
}
