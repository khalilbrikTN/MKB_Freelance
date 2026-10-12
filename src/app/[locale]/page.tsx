import { getTranslations } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Guestbook } from "@/components/Guestbook";
import { Footer } from "@/components/Footer";
import { ScrollAccentWatcher } from "@/components/ScrollAccentWatcher";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default async function Home() {
  const tNav = await getTranslations("nav");
  const tHero = await getTranslations("hero");
  const tPortfolio = await getTranslations("portfolio");
  const tServices = await getTranslations("services");
  const tPricing = await getTranslations("pricing");
  const tAbout = await getTranslations("about");
  const tGuestbook = await getTranslations("guestbook");
  const tFooter = await getTranslations("footer");
  const tWhatsapp = await getTranslations("whatsapp");

  return (
    <>
      <ScrollAccentWatcher />
      <Nav
        links={[
          { href: "#work", label: tNav("work") },
          { href: "#services", label: tNav("services") },
          { href: "#pricing", label: tNav("pricing") },
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
          credential={tHero("credential")}
        />
        <Portfolio
          heading={tPortfolio("heading")}
          placeholderTitle={tPortfolio("placeholderTitle")}
          placeholderDescription={tPortfolio("placeholderDescription")}
          roleLabel={tPortfolio("meta.role")}
          stackLabel={tPortfolio("meta.stack")}
          yearLabel={tPortfolio("meta.year")}
          viewLabel={tPortfolio("viewProject")}
          prevLabel={tPortfolio("previousImage")}
          nextLabel={tPortfolio("nextImage")}
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
            {
              title: tServices("accounting.title"),
              description: tServices("accounting.description"),
            },
            {
              title: tServices("aiAutomation.title"),
              description: tServices("aiAutomation.description"),
            },
            {
              title: tServices("crm.title"),
              description: tServices("crm.description"),
            },
            {
              title: tServices("hr.title"),
              description: tServices("hr.description"),
            },
          ]}
        />
        <Pricing
          heading={tPricing("heading")}
          subtext={tPricing("subtext")}
          disclaimer={tPricing("disclaimer")}
          mostPopularLabel={tPricing("mostPopular")}
          priceSuffix={tPricing("priceSuffix")}
          customLabel={tPricing("customLabel")}
          tiers={{
            starter: {
              name: tPricing("tiers.starter.name"),
              description: tPricing("tiers.starter.description"),
              features: tPricing.raw("tiers.starter.features"),
              cta: tPricing("tiers.starter.cta"),
            },
            pro: {
              name: tPricing("tiers.pro.name"),
              description: tPricing("tiers.pro.description"),
              features: tPricing.raw("tiers.pro.features"),
              cta: tPricing("tiers.pro.cta"),
            },
            custom: {
              name: tPricing("tiers.custom.name"),
              description: tPricing("tiers.custom.description"),
              features: tPricing.raw("tiers.custom.features"),
              cta: tPricing("tiers.custom.cta"),
            },
          }}
          maintenanceLabel={tPricing("maintenance.label")}
          maintenanceName={tPricing("maintenance.name")}
          maintenanceDescription={tPricing("maintenance.description")}
          maintenanceNote={tPricing("maintenance.note")}
          perMonth={tPricing("perMonth")}
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
        sendingLabel={tGuestbook("form.sending")}
        successMessage={tGuestbook("form.success")}
        errorMessage={tGuestbook("form.error")}
      />
      <Footer rights={tFooter("rights")} />
      <WhatsAppButton label={tWhatsapp("label")} />
    </>
  );
}
