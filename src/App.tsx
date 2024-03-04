import "./App.css";
import AiImage from "./components/ai-with-image";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <section className="bg-slate-100 h-screen">
      <Header />
      <Hero />
      <AiImage />
      <Footer />
    </section>
  );
}

export default App;
