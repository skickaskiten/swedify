import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Courses from "@/components/Courses";
import StudentProgress from "@/components/StudentProgress";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Method />
        <Testimonials />
        <Courses />
        <StudentProgress />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
