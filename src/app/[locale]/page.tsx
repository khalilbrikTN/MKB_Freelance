import { getTranslations } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Guestbook } from "@/components/Guestbook";
import { Footer } from "@/components/Footer";
import { ScrollAccentWatcher } from "@/components/ScrollAccentWatcher";

export default async function Home() {
  const tNav = await getTranslations("nav");
  const tHero = await getTranslations("hero");
  const tPortfolio = await getTranslations("portfolio");
  const tServices = await getTranslations("services");
  const tAbout = await getTranslations("about");
  const tGuestbook = await getTranslations("guestbook");
  const tFooter = await getTranslations("footer");

  return (
    <>
      <ScrollAccentWatcher />
      <Nav
        links={[
          { href: "#work", label: tNav("work") },
          { href: "#services", label: tNav("services") },
          { href: "#about", label: tNav("about") },
          { href: "#contact", label: tNav("contact") },
        ]}
      />
      <main>
        <Hero
          wordmark={tHero("wordmark")}
          tagline={tHero("tagline")}
          thesis={tHero("thesis")}
          scrollCue={tHero("scrollCue")}
          bookCallLabel={tGuestbook("bookCall")}
          bookCallNote={tGuestbook("bookCallNote")}
          viewWorkLabel={tHero("viewWork")}
          portraitPlaceholder={tHero("portraitPlaceholder")}
        />
        <Portfolio
          heading={tPortfolio("heading")}
          placeholderTitle={tPortfolio("placeholderTitle")}
          placeholderDescription={tPortfolio("placeholderDescription")}
          roleLabel={tPortfolio("meta.role")}
          stackLabel={tPortfolio("meta.stack")}
          yearLabel={tPortfolio("meta.year")}
          viewLabel={tPortfolio("viewProject")}
        />
        <Services
          heading={tServices("heading")}
          items={[
            {
              title: tServices("web.title"),
              description: tServices("web.description"),
            },
            {
              title: tServices("ecommerce.title"),
              description: tServices("ecommerce.description"),
            },
          ]}
        />
        <About heading={tAbout("heading")} bio={tAbout("bio")} isPlaceholder={false} />
      </main>
      <Guestbook
        heading={tGuestbook("heading")}
        subtext={tGuestbook("subtext")}
        bookCallLabel={tGuestbook("bookCall")}
        bookCallNote={tGuestbook("bookCallNote")}
        nameLabel={tGuestbook("form.name")}
        emailLabel={tGuestbook("form.email")}
        messageLabel={tGuestbook("form.message")}
        sendLabel={tGuestbook("form.send")}
      />
      <Footer rights={tFooter("rights")} />
    </>
  );
}
