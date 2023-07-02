import "./main.css";
import emojiJson from "../../assets/emoji.json";
import { useState } from "react";
import Section from "../Section/Section";

const Main = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [numberToDisplay, setNumberToDisplay] = useState(20);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (set, e) => {
    set(e.target.value);
  };

  const serchValue = (e) => {
    const regexp = new RegExp(`${e.target.value}`, `ig`);

    const findedEmoji = [];
    emojiJson.forEach((emoji) => {
      if (regexp.test(emoji.keywords) || regexp.test(emoji.title)) {
        findedEmoji.push(emoji);
      }
    });
    setSearchResult(findedEmoji);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="what emoji are you lookin for ?"
          value={search}
          onChange={(event) => handleChange(setSearch, event)}
          onKeyUp={serchValue}
        />{" "}
        <div>
          <label htmlFor="numberToDisplay">Quantity to display: </label>
          <select
            name="number"
            id="numberToDisplay"
            onChange={(event) => {
              handleChange(setNumberToDisplay, event);
            }}
          >
            <option value="21">20</option>
            <option value="41">40</option>
            <option value="61">60</option>
            <option value="81">80</option>
            <option value="101">100</option>
          </select>
        </div>
      </form>

      <Section searchResults={searchResult} numberToDisplay={numberToDisplay} />
    </main>
  );
};

export default Main;
