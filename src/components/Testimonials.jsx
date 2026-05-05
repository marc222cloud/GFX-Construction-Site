import "./Testimonials.css";

const testimonialsText = {
  en: {
    title: "Testimonials",
    rating: "Rating",
  },
  es: {
    title: "Testimonios",
    rating: "Calificación",
  },
};

const testimonials = [
  {
    id: 1,
    name: "Eric A.",
    location: "Utica, NY",
    quote: {
      en: "My kitchen looks amazing, Thanks!",
      es: "¡Mi cocina se ve increíble, gracias!",
    },
  },
  {
    id: 2,
    name: "Sarah W.",
    location: "Camden, NY",
    quote: {
      en: "Great staff, great vibe",
      es: "Excelente equipo, muy buen ambiente",
    },
  },
  {
    id: 3,
    name: "John D. R.",
    location: "New Hartford, NY",
    quote: {
      en: "Solid work, my roof looks much more improved.",
      es: "Buen trabajo, mi techo se ve mucho mejor.",
    },
  },
];

export default function Testimonials({ language = "en" }) {
  const text = testimonialsText[language] || testimonialsText.en;
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">{text.title}</h2>

      <div className="testimonials__grid">
        {testimonials.map((item) => (
          <article key={item.id} className="testimonial-card">
            <div className="testimonial-card__top">
              <span className="testimonial-card__rating-label">{text.rating}</span>
              <span className="testimonial-card__stars">★★★★★</span>
            </div>

            <div className="testimonial-card__middle">
              <div className="testimonial-card__avatar">
                {item.name.split(" ").map(n => n[0]).join("")}
              </div>

              <div className="testimonial-card__info">
                <p className="testimonial-card__name">{item.name}</p>
                <p className="testimonial-card__location">{item.location}</p>
              </div>
            </div>

            <p className="testimonial-card__quote">“{item.quote[language] || item.quote.en}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}