// import { Github, Linkedin, Mail } from 'lucide-react';
import { GitBranch, Mail } from 'lucide-react';
import './App.css';

import { useEffect, useState } from 'react';
import api from './api/axios';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// NAV
function App() {


const [contactForm, setContactForm] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});
const handleContactSubmit = async (e) => {
  e.preventDefault();

  setSending(true);
  setContactStatus('');

  try {
    await api.post('/contact/', contactForm);

    setContactStatus('Message sent successfully! Thank you.');

    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    setContactStatus('Something went wrong. Please try again.');
  } finally {
    setSending(false);
  }
};

const [contactStatus, setContactStatus] = useState('');
const [sending, setSending] = useState(false);
const [skills, setSkills] = useState([]);
const [about, setAbout] = useState(null);
const [projects, setProjects] = useState([]);

useEffect(() => {


api.get('/projects/')
  .then((response) => {
    setProjects(response.data);
  })
  .catch((error) => {
    console.error('Projects API Error:', error);
  });


  api.get('/about/')
  .then((response) => {
    setAbout(response.data[0]);
  })
  .catch((error) => {
    console.error('About API Error:', error);
  });
  
  api.get('/skills/')
    .then((response) => {
      setSkills(response.data);
      console.log('Skills:', response.data);
    })
    .catch((error) => {
      console.error('API Error:', error);
    });
}, []);



  return (
    <>
      <nav>
        <h2>Manthan<span>.</span></h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>



  
<section id="home">
  <div className="hero-content">
    <span className="hero-badge">
      <span className="status-dot"></span>
      Available for opportunities
    </span>

    <h1>
      Hi, I'm <span>Manthan Chauhan.</span>
    </h1>

    <h2>
      Python Developer & Full Stack Developer
    </h2>

    <p>
      I build modern web applications using Python, Django
      and React. Passionate about solving problems,
      learning new technologies and creating meaningful
      digital experiences.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        View My Work →
      </a>

      <a href="#contact" className="secondary-btn">
        Contact Me
      </a>
    </div>

  <div className="hero-socials">
  <a href="https://github.com/Manthan612"
     target="_blank" rel="noreferrer">
    <FaGithub size={20} />
  </a>

  <a href="https://linkedin.com/in/manthan88"
     target="_blank" rel="noreferrer">
    <FaLinkedin size={20} />
  </a>

  <a href="mailto:manthan6121@gmail.com">
    <Mail size={20} />
  </a>
</div>
  </div>
</section>






  <section id="about">
  <h2>About Me</h2>

  {about ? (
    <p>{about.description}</p>
  ) : (
    <p>Loading about information...</p>
  )}
</section>





<section id="skills">
  <h2>My Skills</h2>

  <div className="skills-container">
    {skills.map((skill) => (
      <span className="skill-card" key={skill.id}>
        {skill.name}
      </span>
    ))}
  </div>
</section>


{/* <section id="projects">
  <h2>My Projects</h2>

  <div className="projects-container">
    {projects.map((project) => (
      <div className="project-card" key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span>{project.technologies}</span>
      </div>
    ))}
  </div>
  
</section> */}
<section id="projects">
  <h2>My Projects</h2>

  <div className="projects-container">
  {projects.map((project) => (
    <div
      className="project-card"
      key={project.id}
      onClick={() => {
        if (
          project.github_link &&
          project.github_link.startsWith("https://")
        ) {
          window.open(
            project.github_link,
            "_blank",
            "noopener,noreferrer"
          );
        }
      }}
      style={{
        cursor: project.github_link?.startsWith("https://")
          ? "pointer"
          : "default"
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span>{project.technologies}</span>
    </div>
  ))}
</div>
</section>



<section id="contact">
  <div className="contact-container">

    <div className="contact-info">
      <h2>Let's Work Together</h2>

      <p>
        Have a project idea or want to discuss an opportunity?
        Feel free to send me a message. I'd love to hear from you!
      </p>

      <div className="contact-detail">
        <Mail />
        <a href="mailto:manthan6121@gmail.com">  
        <span>manthan6121@gmail.com</span>
        </a>
      </div>

      <div className="contact-detail">
        <FaGithub />
        <a href="https://github.com/Manthan612">
          GitHub
        </a>
      </div>

      <div className="contact-detail">
        <FaLinkedin />
        <a href="https://linkedin.com/in/manthan88">
          LinkedIn
        </a>
      </div>
    </div>

    <form className="contact-form" onSubmit={handleContactSubmit}>

      <h2>Send Me a Message</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={contactForm.name}
        onChange={(e) =>
          setContactForm({...contactForm, name: e.target.value})
        }
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        value={contactForm.email}
        onChange={(e) =>
          setContactForm({...contactForm, email: e.target.value})
        }
        required
      />

      <input
        type="text"
        placeholder="Subject"
        value={contactForm.subject}
        onChange={(e) =>
          setContactForm({...contactForm, subject: e.target.value})
        }
        required
      />

      <textarea
        placeholder="Your Message"
        rows="5"
        value={contactForm.message}
        onChange={(e) =>
          setContactForm({...contactForm, message: e.target.value})
        }
        required
      />

      <button type="submit" disabled={sending}>
        {sending ? 'Sending...' : 'Send Message →'}
      </button>

      {contactStatus && <p>{contactStatus}</p>}

    </form>

  </div>
</section>


    </>
  );
}

export default App;