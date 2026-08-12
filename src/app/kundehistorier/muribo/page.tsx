import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import MuriboContent from "./MuriboContent";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const DESCRIPTION =
  "Se hvordan Muribø AS totalrenoverer bad uten fallgruver med Slidedrain – den eksentriske slukrennen flytter sluket til siden når bjelkelaget overrasker.";

export const metadata = {
  title: "Muribø: totalrenoverer bad uten fallgruver | Slidedrain",
  description: DESCRIPTION,
  alternates: { canonical: "/kundehistorier/muribo" },
};

export default function MuriboPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: "Muribø totalrenoverer bad uten fallgruver",
              description: DESCRIPTION,
              path: "/kundehistorier/muribo",
              image: "/images/kundehistorier/muribo-1.jpg",
              datePublished: "2026-08-01",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Kundehistorier", path: "/kundehistorier" },
              { name: "Muribø", path: "/kundehistorier/muribo" },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <MuriboContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
