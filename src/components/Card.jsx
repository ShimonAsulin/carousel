import '../style/card/card.scss'

const Card = ({ img, price, exclusive }) => {
  return (
    <div className="card">
      <img src={img} className="logo-img" />
      <div className="card-details">
        <h2 className="card-title">NO DEPOSIT BONUS</h2>
        <hr className="card-line" />
        <h5 className="card-precent">400% up to</h5>
        <h3 className="card-price">{price}</h3>
        <h4 className="card-spins">+ 100 Free Spins </h4>
        <h5 className="card-gold">on Cleopatra's Gold</h5>
        {exclusive && <img className="exclusive-tag" src={exclusive} />}
        <div className="card-section">
        <button className="card-btn">Play</button>
        <img className="flag" src="https://raw.githubusercontent.com/ShimonAsulin/carousel/master/src/asset/images/Flag.png" alt="Flag" />
        </div>
      </div>
        <img className="quastion-mark" src="https://raw.githubusercontent.com/ShimonAsulin/carousel/master/src/asset/images/!.png" alt="" />
    </div>
  );
};
export default Card;
