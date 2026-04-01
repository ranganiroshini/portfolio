import {useEffect} from "react";
import "./certification.css";
import googleLogo from "../img/google logo.png";
import deloitteLogo from "../img/deloitte-logo.png";
import metaLogo from "../img/meta logo.jpg";
import intelLogo from "../img/intel logo.jpg";




const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    description:
      "Completed a comprehensive 6-month professional certification covering the full data analytics lifecycle including data collection, cleaning, analysis, visualization, and case study execution using SQL, R, spreadsheets, and dashboards.",
    link: "https://www.coursera.org/account/accomplishments/specialization/7LR4W52XVYBA",
    image: googleLogo,
  },
  {
    
  title: "Deloitte Data Analytics Job Simulation",
  description:
    "Worked on a Deloitte consulting-style analytics simulation involving business problem analysis, KPI interpretation, and insight generation from structured datasets. Applied analytical reasoning to evaluate trends, assess business performance, and communicate findings through concise, decision-focused insights.",
  link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_695fd99ec7c98e1044797586_1767911220753_completion_certificate.pdf",
  image: deloitteLogo,
},

  {
  title: "Introduction to Data Analytics",
  description:
    "Completed Meta data analytics certification focused on understanding the end-to-end analytics workflow, including data types, data-driven decision-making, analytical thinking, and interpreting insights for business contexts. Gained exposure to core analytics concepts used across industry roles.",
  link: "https://www.coursera.org/account/accomplishments/verify/GAGDE8OOS1NQ",
  image: metaLogo,
},
 
  {
  title: "AI for Entrepreneurship",
  description:
    "Completed a government-backed certification focused on applying Artificial Intelligence concepts to entrepreneurship and business innovation. Gained exposure to AI-driven problem solving, digital transformation, and the role of emerging technologies in building scalable, data-informed business solutions.",
  link: "https://skill-india-dev.s3.ap-south-1.amazonaws.com/certificate_generic/uploaded_elements/2025070416915825/certificate_92a840f2-c85f-4bf8-97b4-8de2d5b931fd.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260207T005717Z&X-Amz-SignedHeaders=host&X-Amz-Expires=2000&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20260207%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=7d7abd117f3193887c1f447a342a1f7179a4f9c6eaed58619f027377ab325cb9",
  image: intelLogo,
}


];

const Certification = () => {
useEffect(() => {
    const cards = document.querySelectorAll(".cert-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

  }, []);
  return (
    <div>
      {/* WHITE SECTION (TITLE ONLY) */}
      <section className="cert-header" id="certifications">
        <h2 className="cert-heading">Certifications</h2>
      </section>

      {/* BACKGROUND SECTION */}
      <section className="cert-bg">
        <div className="cert-timeline">
         {/* CENTER LINE */}
    <div className="cert-line"></div>
{certifications.map((cert, index) => (
  <div
    key={index}
    className={`cert-card ${index % 2 === 0 ? "left" : "right"} cert-${index + 1}`}

  >
   
    {/* DOT */}
    <span className="cert-star">★</span>



      <div className="cert-content">
        <h3>{cert.title}</h3>

        <img
          src={cert.image}
          alt={cert.title}
          className="cert-image"
        />

        <p className="cert-desc">{cert.description}</p>

        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="cert-link"
        >
          View Certificate ↗
        </a>
      </div>
  </div>
))}
   </div>
   </section>
   </div>
);
};

export default Certification;
