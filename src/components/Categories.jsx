import { useState } from "react";
import "../style/categories/categories.scss";
const Categories = () => {
  const [selected, setSelected] = useState("1");

  const handleCategories = (e) => {
    setSelected(e.target.id);
  };

  return (
    <div className="buttons">
      <button
        id="1"
        onClick={handleCategories}
        className={`btn ${selected === "1" ? "active" : " "}`}
      >
        No Depsoit Bonus
      </button>
      <button
        id="2"
        onClick={handleCategories}
        className={`btn ${selected === "2" ? "active" : ""}`}
      >
        Welcome Bonus
      </button>
      <button
        id="3"
        onClick={handleCategories}
        className={`btn ${selected === "3" ? "active" : ""}`}
      >
        Free Spins Bonus
      </button>
    </div>
  );
};

export default Categories;
