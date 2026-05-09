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

      <div className="max-w-7xl mx-auto px-4 pt-16">
        <CounterCard />
      
        <Suspense fallback = {<span className=" flex items-center justify-center mx-auto">Loading..</span>}>
          <Tickets ticketsPromise = {ticketsPromise}/>
        </Suspense>
      </div>
      
     
      
    </div>
  )
}

export default App
