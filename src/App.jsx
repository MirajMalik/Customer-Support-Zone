import './App.css'
import Navbar from './components/Navbar/Navbar'
import CounterCard from './components/CounterCard/CounterCard'
import Tickets from './components/Tickets/Tickets';
import { Suspense, useState } from 'react';

function App() {
   const [ resolved, setResolved ] = useState(0)
   const [ inProgress, setInprogress ] = useState(0);
   const [ resolvedTasks, setResolvedTasks] = useState([])


  // const fetchTickets = async () => {
  //   const res = await fetch('/tickets.json')
  //   return res.json()
  // };

  // const ticketsPromise = fetchTickets();
  
  return (
    <div className='min-h-screen'>
      <Navbar/> 
      <CounterCard 
          resolved={resolved} 
          inProgress={inProgress}
      />   

      <div className="max-w-7xl mx-auto px-4 pt-16">
        <Suspense fallback = {<span className=" flex items-center justify-center mx-auto">Loading..</span>}>
          <Tickets 
              // ticketsPromise = {ticketsPromise} 
              resolvedTasks = {resolvedTasks} 
              setResolvedTasks = {setResolvedTasks} 
              setResolved = {setResolved} 
              setInprogress={setInprogress}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default App
