import { useState } from 'react'
import Costs from './components/Costs'
import NewCost from './components/NewCost/NewCost'
function App() {
 
const [costs, setCosts] = useState ([
  {
    id:1,
    date: new Date(2023, 2, 12),
    description: 'Freezer',
    price:999
  },
  {
    id:2,
    date: new Date(2021, 8, 1),
    description: 'Freezer',
    price:98
  },
  {
    id:3,
    date: new Date(2022, 6, 11),
    description: 'Freezer',
    price:888
  },
  {
    id:4,
    date: new Date(2021, 6, 2),
    description: 'Freezer',
    price:25
  }
])

function addCost(cost){
setCosts((prev)=>{
  return [cost, ...prev]
})
}
  return (
    <>
    <NewCost onAddCost={addCost}></NewCost>
<Costs costs = {costs}></Costs>
    </>
  )
}

export default App
