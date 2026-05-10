// import React from 'react'
import { use, useState } from "react";  
import TicketsCard from "./TicketsCard";
import TaskStatus from "../Task-Status/TaskStatus";

const Tickets = ({ ticketsPromise}) => {
    const ticketsData = use(ticketsPromise);
    const [selectedTickets, setSelectedTickets] = useState([]);

    // console.log(selectedTickets);

    return (
        <div className="flex  gap-4 w-full mt-2">
           <div className="grid grid-cols-2 gap-4 mt-6 w-2/3">
            {ticketsData.length > 0 ? (
                ticketsData.map((ticket) => (
                    <TicketsCard 
                        key = {ticket.id} 
                        ticket = {ticket} 
                        setSelectedTicket = {setSelectedTickets}
                    />
                ))
        ) : (   <div className="col-span-full flex items-center justify-center py-12">
                    <p className="text-xl font-semibold text-gray-400">No Tickets found</p>
                </div>
            )}
           </div>



            <div className="w-1/3">
            <h2 className="font-bold text-left mb-2 text-slate-600 pl-5 text-lg">Task Status</h2>
            {selectedTickets.length > 0 ? (
                selectedTickets.map((ticket) => (
                    <TaskStatus 
                        key = {ticket.id} 
                        selectedTicket = {ticket} 
                    />
                ))
        ) : (   <div className="col-span-full flex items-center justify-center py-12">
                    <p className="text-xl font-semibold text-gray-400">Select a ticket to add to Task Status</p>
                </div>
            )}
            </div>
        </div>
    )
};

export default Tickets;