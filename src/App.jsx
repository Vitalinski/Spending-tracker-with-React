import { useState } from 'react'
import Costs from './components/Costs'
import NewCost from './components/NewCost/NewCost'
function App() {
 
const [costs, setCosts] = useState ([
  {
    id:1,
    date: new Date(2023, 2, 12),
    description: 'Freezer',
    price:699
  },
  {
    id:2,
    date: new Date(2023, 8, 1),
    description: 'Mouse',
    price:150
  },
  {
    id:3,
    date: new Date(2023, 6, 11),
    description: 'Oven',
    price:488
  },
  {
    id:4,
    date: new Date(2023, 4, 2),
    description: 'Book',
    price:85
  },
  {
    id:5,
    date: new Date(2023, 10, 12),
    description: 'Phone',
    price:399
  },
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
