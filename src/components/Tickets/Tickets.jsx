// import React from 'react'
import { useEffect, useState } from "react";  
import TicketsCard from "./TicketsCard";
import TaskStatus from "../Task-Status/TaskStatus";

const Tickets = ({setResolved, setInprogress, resolvedTasks=[], setResolvedTasks, showForm, setShowForm }) => {
    // const ticketsData = use(ticketsPromise);                       // tickets data immutable
    const [tickets, setTickets] = useState([]);                       // main api data
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        customer: "",
        priority: "Low",
        status: "Open"
    });
    

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
    <>

        {showForm && (
            <div className="bg-white p-4 rounded-xl shadow-md mb-4">

                <h2 className="font-bold mb-2">Create New Ticket</h2>

                <input
                    placeholder="Title"
                    className="border p-2 w-full mb-2"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData(prev => ({
                            ...prev,
                            title: e.target.value
                        }))
                    }
                />

                <textarea
                    placeholder="Description"
                    className="border p-2 w-full mb-2"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData(prev => ({
                            ...prev,
                            description: e.target.value
                        }))
                    }
                />

                <input
                    placeholder="Customer"
                    className="border p-2 w-full mb-2"
                    value={formData.customer}
                    onChange={(e) =>
                        setFormData(prev => ({
                            ...prev,
                            customer: e.target.value
                        }))
                    }
                />

                <select
                    className="border p-2 w-full mb-2"
                    value={formData.priority}
                    onChange={(e) =>
                        setFormData(prev => ({
                            ...prev,
                            priority: e.target.value
                        }))
                    }
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>

                <button
                    onClick={() => {

                        const newTicket = {
                            id: Date.now(),
                            title: formData.title,
                            description: formData.description,
                            customer: formData.customer,
                            priority: formData.priority,
                            status: formData.status,
                            createdAt: new Date().toLocaleDateString()
                        };

                        setTickets(prev => [...prev, newTicket]);

                        setFormData({
                            title: "",
                            description: "",
                            customer: "",
                            priority: "Low",
                            status: "Open"
                        });

                        setShowForm(false);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                    Add Ticket
                </button>

            </div>
        )}

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
    </>
    
)

};

export default Tickets;