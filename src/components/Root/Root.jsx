import { useState } from 'react';
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    const [ tickets, setTickets ] = useState([])
    const [ resolved, setResolved ] = useState(0)
    const [ inProgress, setInprogress ] = useState(0);
    const [ resolvedTasks, setResolvedTasks] = useState([])
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar setShowForm={setShowForm} />
            <main className="flex-grow pt-16">
                <div className="max-w-7xl mx-auto px-4">
                    <Outlet context={{ 
                        tickets,
                        setTickets,
                        showForm, 
                        setShowForm, 
                        resolved, 
                        setResolved, 
                        inProgress, 
                        setInprogress, 
                        resolvedTasks, 
                        setResolvedTasks 
                    }} />    
                </div>
            </main>
            <Footer />
        </div>    
    );
};

export default Root;