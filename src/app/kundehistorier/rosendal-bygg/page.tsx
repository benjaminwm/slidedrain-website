import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import RosendalContent from "./RosendalContent";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const DESCRIPTION =
  "Se hvordan Rosendal Bygg bruker Slidedrain Sluksystem for enklere planlegging, raskere montasje og tryggere bad i sine byggeprosjekter.";

export const metadata = {
  title: "Rosendal Bygg: fra planlegging til ferdig bad | Slidedrain",
  description: DESCRIPTION,
  alternates: { canonical: "/kundehistorier/rosendal-bygg" },
};

export default function RosendalByggPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: "Rosendal Bygg: fra planlegging til ferdig bad",
              description: DESCRIPTION,
              path: "/kundehistorier/rosendal-bygg",
              image: "/images/kundehistorier/rosendal-2.jpg",
              datePublished: "2026-04-01",
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
              {
                name: "Rosendal Bygg",
                path: "/kundehistorier/rosendal-bygg",
              },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <RosendalContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
