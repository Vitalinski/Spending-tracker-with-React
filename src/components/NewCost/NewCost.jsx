import "./NewCost.css";
import CostForm from "./CostForm.jsx";
import { useState } from "react";

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addFormVisibleStatus = () => {
    setIsFormVisible(true);
  };
  const cancelFormVisibleStatus
  = () => {
    setIsFormVisible(false);
  };
  function onSaveForm(Cost) {
    const newCost = {
      ...Cost,
      id: Math.random().toFixed(3),
    };

    props.onAddCost(newCost);
  }
  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={addFormVisibleStatus}>Add new cost</button>
      )}
      {isFormVisible && <CostForm cancelFormVisibleStatus={ cancelFormVisibleStatus}
 onSaveForm={onSaveForm}></CostForm>}
    </div>
  );
}
export default NewCost;
