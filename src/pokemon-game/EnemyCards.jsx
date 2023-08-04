import React, { useEffect, useState } from "react";
import getAllPokemons from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-cards";
import "swiper/css";
import "../styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import "./Cards.css";

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      const data = await getAllPokemons();
      setCards(data);
      setLoading(false);
    };
    getCards();
  }, []);

  return (
    <div>
      {loading ? (
        "carregando.."
      ) : 
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
        
              <SwiperSlide>
                <div className="poke-card" key={cards[4].id}>
                  <h5>{cards[4].name}</h5>
                  <img src={cards[4].sprites.other.home.front_default} alt="" />
                  <div className="attack">Attack: {cards[4].base_experience}</div>
                </div>
              </SwiperSlide>
            
        
          
        </Swiper>
      }
    </div>
  );
}

export default Cards;
