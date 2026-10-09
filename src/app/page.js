import MainSection from "../../components/home/main-section.jsx";
import PopularSection from "../../components/home/popular-section.jsx";
import PropertySection from "../../components/home/property-section.jsx";
import TestimonialSection from "../../components/home/testimonial-section.jsx";
import FaqSection from "../../components/home/faq-section.jsx";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full bg-white">
      <section>
        <MainSection></MainSection>
      </section>
      <section>
        <PopularSection></PopularSection>
      </section>
      <section>
        <PropertySection></PropertySection>
      </section>
      <section>
        <TestimonialSection></TestimonialSection>
      </section>
      <section>
        <FaqSection></FaqSection>
      </section>
   
    </main>
  );
}
