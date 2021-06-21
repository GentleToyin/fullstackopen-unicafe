import React, {useState} from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) =>{

   if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(  
      <div>

          <tr> <td>  good{' '} </td>{props.good} </tr>
          <tr> <td> bad{' '} </td>{props.bad}</tr>
          <tr> <td> neutral{' '} </td>{props.neutral}</tr>
         <tr>  <td> all{' '} </td>{props.all}</tr>
         <tr> <td> average{' '} </td>{props.average}</tr>
          <tr> <td> positive{' '} </td>{props.positive}</tr>


    </div>
    )
}


const App =()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [posClicks, setPosClick] = useState(0)
  const [negClicks, setNegClick] = useState(0)
   const [posNegClicks, setposNeg] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
    setPosClick(posClicks + 1)
    setposNeg(allClicks + 1)
  }

   const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }

   const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
    setposNeg(allClicks + 1)
    setNegClick(negClicks - 1)
  }

const averageClicks = (posClicks + negClicks)/posNegClicks
const percentPosClicks = (posClicks/allClicks)*100

  return(
     <div>
      <h1>{'give feedback'}</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>{'Statistics'} </h1>
      <Statistics good = {posClicks} bad={negClicks} neutral={neutral} all= {allClicks} average={averageClicks} positive={percentPosClicks}/>

    </div>
    )
}

export default App;