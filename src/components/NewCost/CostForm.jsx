import "./CostForm.css";
import { useState } from "react";

function NewForm(props) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const descriptionChangeHandler = (e) => {
    setDescription( e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate( e.target.value);
  };

  const submitHandler = (e)=>{
e.preventDefault()
const costData={
  description:description,
  price: +price,
  date:new Date(date),
}
props.onSaveForm(costData)
setDate('')
setDescription('')
setPrice('')
props.cancelFormVisibleStatus()

}

const   cancelFormVisibleStatus = ()=>{
  props.cancelFormVisibleStatus()

}

  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Description</label>
          <input type="text" onChange={descriptionChangeHandler}  value={description}/>
        </div>
        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            step="2024-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit" disabled={!description || !price || !date} > Add cost</button>
          <button type="button" onClick={cancelFormVisibleStatus} > Cancel</button>

        </div>
        
      </div>
    </form>
  );
}
export default NewForm;
