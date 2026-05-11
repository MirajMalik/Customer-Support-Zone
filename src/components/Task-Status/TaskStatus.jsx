const TaskStatus = ({ setTickets, selectedTickets, setSelectedTickets, setResolved, setResolvedTasks, setInprogress }) => {
    console.log("selectedTickets", selectedTickets);
    // console.log("resolvedTasks", resolvedTasks);
    return (
        <>
        <div className="bg-gray-100 text-black rounded-2xl p-6 m-4 shadow-lg">
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">
                        {selectedTickets.title}
                    </h3>
                    <button 
                        onClick={()=> {
                            setTickets(prev =>
                                 prev.filter(t => t.id !== selectedTickets.id)
                            );

                            setResolvedTasks(prev => {               // resolved tasks
                                const exists = prev.find(task => task.id === selectedTickets.id );

                                if (exists) return prev;

                                return [...prev, selectedTickets];
                            });

                            setSelectedTickets(prev => {                                          // remove selected tickets
                                return prev.filter(ticket => ticket.id !== selectedTickets.id)    // keep everything except selectedId
                            });
                            
                            setResolved(prev => prev+1);             // resolved value
                            setInprogress(prev => prev-1);           // inProgress value

                            // alert("Task Completed"); 
                        }
                    }
                        className="bg-green-400 hover:bg-green-500 rounded-xl w-full py-2 mt-4 shadow-md text-white font-semibold transition-all duration-200">
                            Complete
                    </button>
                </div>
            </div>
        </div>
    </>
    );
}


export default TaskStatus;