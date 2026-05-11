// import React from 'react'
import { useEffect, useState } from "react";  
import TicketsCard from "./TicketsCard";
import TaskStatus from "../Task-Status/TaskStatus";

const Tickets = ({setResolved, setInprogress, resolvedTasks=[], setResolvedTasks}) => {
    // const ticketsData = use(ticketsPromise);                       // tickets data immutable
    const [tickets, setTickets] = useState([]);                       // main api data
    const [selectedTickets, setSelectedTickets] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("/tickets.json");
        const data = await res.json();
        setTickets(data);
    };

    fetchData();
    }, []);

    // console.log(selectedTickets);

    return (
        <div className="flex  gap-4 w-full">
           <div className="grid grid-cols-2 gap-4 mt-2 w-2/3">
            {tickets?.length > 0 ? (
                tickets.map((ticket) => (
                    <TicketsCard 
                        key = {ticket.id} 
                        ticket = {ticket} 
                        selectedTickets = {selectedTickets}
                        setSelectedTickets = {setSelectedTickets}
                        setInprogress = {setInprogress} 
                        setResolvedTasks = {setResolvedTasks}
                    />
                ))
        ) : (   <div className="col-span-full flex items-center justify-center py-12">
                    <p className="text-xl font-semibold text-gray-400">No Tickets found</p>
                </div>
            )}
           </div>



            <div className="w-1/3">
                <h2 className="font-bold text-left mb-2 text-slate-600 pl-5 text-lg">Task Status</h2>
                {selectedTickets?.length > 0 ? (
                    selectedTickets.map((ticket) => (
                        <TaskStatus 
                            key = {ticket.id} 
                            setTickets = {setTickets}
                            selectedTickets = {ticket} 
                            setSelectedTickets = {setSelectedTickets}
                            resolvedTasks = {resolvedTasks}
                            setResolvedTasks = {setResolvedTasks}
                            setResolved  = {setResolved}
                            setInprogress = {setInprogress}
                        />
                    ))
            ) : (   <div className="col-span-full flex ">
                        <p className="text-xl font-semibold pl-5 text-gray-400">Select a ticket to add to Task Status</p>
                    </div>
                )}


            
            {/* resolved tasks section*/}
            <h2 className="font-bold text-left mt-4 text-slate-600 pl-5 text-lg">
                Resolved Tasks
            </h2>

            {resolvedTasks?.length === 0 ? (

                <p className="text-xl font-semibold pl-5 text-gray-400">No resolved task yet</p>

            ) : (

                resolvedTasks.map(task => (

                    <div
                        key={task.id}
                        className="bg-green-100 p-6 m-4 shadow-lg rounded-xl p-3 mb-3"
                    >

                        <h3 className="font-semibold">
                            {task.title}
                        </h3>
                        <div className="flex justify-between mt-2">
                            <p className="text-green-600 font-bold">Completed</p>
                            <button className="text-slate-600 cursor-pointer">Click To Remove</button>
                        </div>

                    </div>

                ))

            )}

        

                
            </div>
        </div>
    )
};

export default Tickets;