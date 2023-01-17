import './styles/global.css'

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={10}/>
      <Habit completed={23}/>
      <Habit completed={231}/>

    </div>
  )
}

export default App
