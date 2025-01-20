import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const CardHover = {
    boxShadow: hover ? "0px 0px 9px 0px #BFCFE7" : "none",
    fontSize: "16px",
    cursor: "pointer",
    transform: hover ? "scale(1.05)" : "scale(1)", // Add scale effect on hover
    transition: "transform 0.2s ease-in-out", // Smooth transition for scale
  };

  return (
    <>
      <section
        className="card"
        style={CardHover}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={img} className="card-image" alt="Shoe" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {[...Array(star)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
            <span className="total-reviews">({reviews})</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>${prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}