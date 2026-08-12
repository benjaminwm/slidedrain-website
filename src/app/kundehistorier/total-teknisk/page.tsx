import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import TotalTekniskContent from "./TotalTekniskContent";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const DESCRIPTION =
  "Se hvordan Total Teknisk bruker Slidedrain gulvsluk til å spare tid og oppmøter på byggeplassen – sluket monteres først, og høyden avgjøres helt til slutt.";

export const metadata = {
  title: "Total Teknisk: sparer tid og oppmøter på byggeplassen | Slidedrain",
  description: DESCRIPTION,
  alternates: { canonical: "/kundehistorier/total-teknisk" },
};

export default function TotalTekniskPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Total Teknisk sparer tid og oppmøter med Slidedrain",
              description: DESCRIPTION,
              path: "/kundehistorier/total-teknisk",
              image: "/images/kundehistorier/total-teknisk-1.jpg",
              datePublished: "2026-07-01",
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
                name: "Total Teknisk",
                path: "/kundehistorier/total-teknisk",
              },
            ])
          ),
        }}
      />
      <Navbar />
      <main>
        <TotalTekniskContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
