// import React from 'react'
import { use } from "react";  
import TicketsCard from "./TicketsCard";

const Tickets = ({ ticketsPromise}) => {
    const ticketsData = use(ticketsPromise);
    console.log(ticketsData);

    return (
        <div className="grid grid-cols-2 gap-4 w-2/3 pt-6 ">
            {ticketsData.length > 0 ? (
                ticketsData.map((ticket) => (
                    <TicketsCard key={ticket.id} ticket = {ticket} />
                ))
            ) : (
                <div className="col-span-full flex items-center justify-center py-12">
                    <p className="text-xl font-semibold text-gray-400">🔍 No tickets found</p>
                </div>
            )}
        </div>
    )
};

export default Tickets;