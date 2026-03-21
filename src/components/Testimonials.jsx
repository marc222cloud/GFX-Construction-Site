import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Eric A.",
    location: "Utica, NY",
    quote: "My kitchen looks amazing, Thanks!",
  },
  {
    id: 2,
    name: "Sarah W.",
    location: "Camden, NY",
    quote: "Great staff, great vibe",
  },
  {
    id: 3,
    name: "John D. R.",
    location: "New Hartford, NY",
    quote: "Solid work, my roof looks much more improved.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>

      <div className="testimonials__grid">
        {testimonials.map((item) => (
          <article key={item.id} className="testimonial-card">
            <div className="testimonial-card__top">
              <span className="testimonial-card__rating-label">Rating</span>
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

            <p className="testimonial-card__quote">“{item.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}