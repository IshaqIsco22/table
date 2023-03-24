import React, { useState } from "react";

const data = {
  option1: "Data for option 1",
  option2: "Data for option 2",
  option3: "Data for option 3",
};

function Dropdown() {
  const [dropData, setDropData] = useState([]);
  const [budgetRate, setBudgetRate] = useState(data.option1);

  const handleOptionChange = (event) => {
    setDropData(event.target.value);
    setBudgetRate(data[event.target.value]);
  };

  return (
    <div>
      <select value={dropData} onChange={handleOptionChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <br />
      <input type="text" value={budgetRate} readOnly />
    </div>
  );
}

export default Dropdown;
