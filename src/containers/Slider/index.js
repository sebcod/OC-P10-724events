import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

/*
  Fix Display order by Date
  Fix empty slide
  Fix unique "key" prop error console
  Fix can not read property of undefined
  Fix check
  Add feature click radio button
*/

// timer slider
let timerSlider;

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort(
    (evtA, evtB) => (new Date(evtA.date) > new Date(evtB.date) ? -1 : 1) //  < change to >
  );

  const nextCard = () => {
    // can not read property of undefined
    if (byDateDesc !== undefined) {
      clearTimeout(timerSlider);
      timerSlider = setTimeout(
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0), // add -1 for remove empty slide
        5000
      );
    }
  };

  const onRadioBtnChange = (e) => {
    // console.log(e.target.value);
    setIndex(Number(e.target.value)); // convert string to int
  };

  // const ConsoleLog = ({ children }) => {
  //   console.log(children);
  //   return false;
  // };

  useEffect(() => {
    nextCard();
    // console.log(index);
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // Warning: Each child in a list should have a unique "key" prop.
        // Change <> to div key={event.date}
        <div key={event.date}>
          {/* <ConsoleLog>{index}</ConsoleLog> */}
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
                  radioIdx // change _ by eventRadio
                ) => (
                  <input
                    key={eventRadio.date} // unique key
                    type="radio"
                    name="radio-button"
                    value={radioIdx}
                    checked={index === radioIdx} // idx to index
                    onChange={(e) => {
                      onRadioBtnChange(e);
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
