import "./section.css";
import emojiJson from "../../assets/emoji.json";
// import { useState, MouseEvent, MouseEventHandler } from "react";

const Section = (props) => {
  //   const [spanClassName, setSpanClassName] = useState("");
  //   const handleMouseEnter = () => {
  //     setSpanClassName("visible");
  //   };
  //   const handleMouseOut = () => {
  //     setSpanClassName("");
  //   };
  const displayEmojis = (emojis) => {
    let numberToDisplay = Number(props.numberToDisplay);
    return emojis.map((emoji, index) => {
      numberToDisplay--;
      if (numberToDisplay >= 0) {
        return (
          <div
            key={index + emoji.title}
            onClick={() => copy(emoji.symbol)}
            // onMouseEnter={handleMouseEnter}
            // onMouseOut={handleMouseOut}
          >
            <p>
              {emoji.symbol} {emoji.title}
              <span>Click to copy!</span>
            </p>
          </div>
        );
      } else {
        return;
      }
    });
  };

  const copy = async (emoji) => {
    await navigator.clipboard.writeText(emoji);
    alert("Emoji copied! Congratulation!");
  };

  return (
    <section>
      {props.searchResults
        ? displayEmojis(props.searchResults)
        : displayEmojis(emojiJson)}
    </section>
  );
};

export default Section;
