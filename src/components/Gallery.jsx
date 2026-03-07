import bath3 from "../assets/bath3.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import roof1 from "../assets/roof1.jpg";
import kitchen3 from "../assets/kitchen3.jpg";
import cabin from "../assets/cabin.jpg";
import metalRoof from "../assets/metalroof.jpg";
import "./Gallery.css";

const galleryImages = [
  { id: 1, src: bath3, alt: "Finished bathroom remodel with tub and tile surround" },
  { id: 2, src: kitchen2, alt: "Kitchen renovation in progress with new cabinets" },
  { id: 5, src: cabin, alt: "Cabin exterior renovation project" },
   { id: 4, src: kitchen3, alt: "modern black kitchen" },
  { id: 3, src: roof1, alt: "Asphalt shingle roof installation" },
  { id: 6, src: metalRoof, alt: "Blue metal roof installation" },
];

export default function Gallery() {
  return (
    <section className="gallery" aria-label="Project gallery">
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
}