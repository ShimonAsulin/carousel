import '../style/card/card.scss'

const Card = ({ img, price, exclusive }) => {
  return (
    <div className="card">
      <img src={img} className="logo-img" />
      <div className="card-details">
        {exclusive && <img className="exclusive-tag" src={exclusive} />}
        <h2 className="card-title">No DEPOSIT BONUS</h2>
        <h5 className="card-precent">400% up to</h5>
        <h3 className="card-price">{price}</h3>
        <h4 className="card-spins">+ 100 Free Spins </h4>
        <h5 className="card-gold">on Cleopatra's Gold</h5>
        <div className="card-section">
        <button className="card-btn">Play</button>
        <img src="https://raw.githubusercontent.com/ShimonAsulin/carousel/master/src/asset/images/Flag.png" alt="Flag" />
        </div>
        <img src="https://raw.githubusercontent.com/ShimonAsulin/carousel/master/src/asset/images/!.png" alt="" />
      </div>
    </div>
  );
};
export default Card;
