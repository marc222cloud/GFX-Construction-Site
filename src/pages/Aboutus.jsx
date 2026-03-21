import teamworking from "../assets/teamworking.jpeg";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <main className="about-page">
      <section className="about-page__hero">
        <div className="about-page__container">
          <h1>Built on experience. Backed by integrity.</h1>

          <p className="about-page__intro">
            J &amp; G Construction has proudly served homeowners and businesses
            with dependable craftsmanship for over 20 years. From roofing and
            siding to interior remodeling and general contracting, we approach
            every project with honesty, attention to detail, and a commitment to
            quality work that lasts.
          </p>

          <div className="about-page__image-wrap">
            <img
              src={teamworking}
              alt="J & G Construction team working on a project"
              className="about-page__image"
            />
          </div>

          <div className="about-page__details">
            <h2>Why Homeowners Choose J &amp; G</h2>

            <p className="about-page__body">
              We know that inviting a contractor into your home is a big decision.
              That’s why we focus on clear communication, reliable timelines, and
              workmanship you can trust. Whether the job is a simple repair or a
              full renovation, our goal is to make the process smooth,
              professional, and stress-free from start to finish.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}