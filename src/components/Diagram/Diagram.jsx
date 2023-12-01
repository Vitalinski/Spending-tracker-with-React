import "./Diagram.css";
import DiagramBar from "./DiagramBar";
function Diagram(props) {
    const dataSetsValues = props.dataSets.map(dataSet=>{

      return  dataSet.value
    })
const MaxCosts = Math.max(...dataSetsValues)

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
        key={dataSet.label}
          label={dataSet.label}
          maxValue={MaxCosts}
          value={dataSet.value}
        ></DiagramBar>
      ))}
    </div>
  );
}
export default Diagram;
