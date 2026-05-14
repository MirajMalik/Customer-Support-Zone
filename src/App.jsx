import './App.css'
import CounterCard from './components/CounterCard/CounterCard'
import Tickets from './components/Tickets/Tickets';
import { Suspense } from 'react';
import { useOutletContext } from 'react-router';

function App() {
  const {
    tickets,
    setTickets,
    resolved,
    setResolved,
    inProgress,
    setInprogress,
    resolvedTasks,
    setResolvedTasks,
    showForm,
    setShowForm
  } = useOutletContext();

  return (
    <div className="py-4">
        <CounterCard 
          resolved={resolved} 
          inProgress={inProgress}
        /> 
        <Suspense fallback = {<span className=" flex items-center justify-center mx-auto">Loading..</span>}>
          <Tickets 
              tickets = {tickets}
              setTickets = {setTickets}
              resolvedTasks = {resolvedTasks} 
              setResolvedTasks = {setResolvedTasks} 
              setResolved = {setResolved} 
              setInprogress={setInprogress}
              showForm = {showForm}
              setShowForm = {setShowForm}
          />
        </Suspense>
    </div>
  )
}

export default App
