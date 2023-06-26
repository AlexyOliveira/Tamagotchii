import React, { useState } from "react";
import "./Food.css";
import donut from "../img/food-donut.png";
import pizza from "../img/food-pizza.png";
import pizzaGif from "../img/food-pizza.gif";
import donutGif from "../img/food-donut.gif";
import { useDispatch } from "react-redux";
import { setHungerAdd } from "../redux/actions";

function Food() {
  const [eatToggle, setEatToggle] = useState(false);
  const [chooseEat, setChooseEat] = useState("");
  const dispatch = useDispatch()

  const handleClick = ({ target }) => {
     const previous = document.querySelector("#previous")
     const next = document.querySelector("#next")
     const foodImg = document.querySelectorAll('.food')
    setEatToggle(true);
    setChooseEat(target.alt);
    previous.classList.add('hide-previous-next')
    next.classList.add('hide-previous-next')
    foodImg.forEach((f) => {
      f.classList.add('food-img')
    })
    setTimeout(() => {
      setEatToggle(false);
      previous.classList.remove('hide-previous-next')
      next.classList.remove('hide-previous-next')
      foodImg.forEach((f) => {
        f.classList.remove('food-img')
      })
      dispatch(setHungerAdd());
    }, 5000);
   
  };
  return (
    <div className="food-area">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              onClick={(e) => handleClick(e)}
              src={chooseEat === "pizza" && eatToggle ? pizzaGif : pizza}
              className="food w-50"
              alt="pizza"
            />
          </div>
          <div className="carousel-item">
            <img onClick={(e) => handleClick(e)}
            src={chooseEat === "donut" && eatToggle ? donutGif : donut} 
            className="food w-50" 
            alt="donut" />
          </div>
        </div>
        <button
          id="next"
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          id="previous"
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Food;
