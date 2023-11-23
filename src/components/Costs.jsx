import CostItem from "./CostItem";
import "./styles/Costs.css";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2023");

const filteredCosts = props.costs.filter((cost)=>{
    return cost.date.getFullYear().toString() === selectedYear
})

  const yearChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };


  return (
    <div className="costs">
      <CostsFilter
        selectedYear={selectedYear}
        onChangeYear={yearChangeHandler}
      ></CostsFilter>
      <CostsDiagram costs = {filteredCosts}></CostsDiagram>
      {filteredCosts.length ===0? <h2 className="cost__empty"> No costs  this year</h2>: filteredCosts.map((cost, i) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          price={cost.price}
          description={cost.description}
        ></CostItem>
      ))}

    </div>
  );
}

export default Costs;
