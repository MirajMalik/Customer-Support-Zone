import './App.css'
import Navbar from './components/Navbar/Navbar'
import CounterCard from './components/CounterCard/CounterCard'
import Tickets from './components/Tickets/Tickets';
import { Suspense } from 'react';

function App() {

  const fetchTickets = async () => {
    const res = await fetch('/tickets.json')
    return res.json()
  };

  const ticketsPromise = fetchTickets();
  
  return (
    <div className='min-h-screen'>
      <Navbar/> 
      <CounterCard />
      
      <Suspense fallback = {<span className=" flex items-center justify-center mx-auto">Loading..</span>}>
         <Tickets ticketsPromise = {ticketsPromise}/>
      </Suspense>
     
      
    </div>
  )
}

export default App
