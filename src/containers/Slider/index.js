import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

/*
  Fix Display order by Date
  Fix empty slide
  Fix error: unique "key" prop error console
  Fix error: can not read property of undefined
  Add feature click radio button
*/

// timer slider
let timerSlider;

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort(
    (evtA, evtB) => new Date(evtB.date) - new Date(evtA.date) //  < change to -
  );

  const nextCard = () => {
    // can not read property of undefined
    if (byDateDesc !== undefined) {
      clearTimeout(timerSlider);
      timerSlider = setTimeout(
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0), // add -1 for remove empty slide, index + 1
        5000
      );
    }
  };

  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // Warning: Each child in a list should have a unique "key" prop.
        // Change <> to div key={event.date}
        <div key={event.date}>
          <div
            // key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map(
                (
                  eventRadio,
                  radioIdx // change _ to eventRadio
                ) => (
                  <input
                    key={eventRadio.date} // unique key
                    type="radio"
                    name="radio-button"
                    value={radioIdx}
                    checked={radioIdx === index} // idx to index
                    onChange={(e) => {
                      // setIndex(radioIdx);
                      e.preventDefault();
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
