import Navbar from "@/components/Navbar";"../components/Navbar"; // Assuming the Navbar is in the 'components' folder
import "../styles/styles.css"; // Import your styles

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className="section">
        <h1>Home Section</h1>
        <p>Welcome to the Home Section</p>
      </section>

      <section id="about" className="section">
        <h1>About Section</h1>
        <p>Information about the portfolio or yourself</p>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
        <p>Details about the services offered</p>
      </section>

      <section id="contact" className="section">
        <h1>Contact Section</h1>
        <p>Contact details or form</p>
      </section>
    </div>
  );
}

