import Header from "@/components/header";
import AboutPage from "@/pages/about";
import InitPage from "../pages/init";
import BenefitsPage from "@/pages/benefits";
import ServicesPage from "@/pages/services";
import EmailForm from "@/pages/contact";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <main >
     <Header />
     <section id="inicio">
     <InitPage />
     </section>
     <section id="beneficios">
     <BenefitsPage />
     </section>
     <section id="acerca-de-mi">
     <AboutPage />
     </section>
     <section id="servicios">
     <ServicesPage />
     </section>
     <section id="contacto">
     <EmailForm />
     </section>
     <Footer />
    </main>
  );
}
