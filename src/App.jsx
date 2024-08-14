import { useState } from 'react'
import './App.css'
import Cards from './Cards'
import Credit from './Credit'
import Header from './Header'

function App() {
  const [name, setName] = useState([])
  const [credit, setCredit] = useState(20)
  const [hour, setHour] = useState(0)
  const [usd, setUsd] = useState(0)

  const handleCredit = (title,price,time) => {
    if((hour + parseFloat(time)) <= 20){
      if(!name.includes(title)){
        const newName = [...name, title];
    setName(newName);

    setCredit(credit - time);

    setHour(hour + parseFloat(time));

    setUsd(usd + parseFloat(price));
    }
    else{
      alert('This item already selected')
    }
      }
    else{
      alert('Credit is limited in 20')
    }
  }

  return (
    <div className='container mx-auto my-12'>

      <Header></Header>
      <div className='flex flex-col-reverse md:flex-row gap-6'>
        <Cards handleCredit={handleCredit}></Cards>
      <Credit name={name} credit={credit} hour={hour} usd={usd}></Credit>
      </div>

    </div>
  )
}

export default App
