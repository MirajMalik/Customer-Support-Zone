const TaskStatus = ({ selectedTicket, setResolved, setResolvedTasks }) => {
    return (
        <>
        <div className="bg-white text-black rounded-2xl p-6 m-4 shadow-lg">
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">
                        {selectedTicket.title}
                    </h3>
                    <button 
                        onClick={()=> {
                            setResolved(prev => prev+1);             // resolved value
                            setResolvedTasks(prev => {               // resolved tasks
                                const exists = prev.find(
                                    task => task.id === selectedTicket.id
                                );

                                if (exists) return prev;

                                return [...prev, selectedTicket];
                            });
                        }
                    }
                        className="bg-green-400 hover:bg-green-500 rounded-xl w-full py-2 mt-4 shadow-md text-white font-semibold transition-all duration-200">Complete</button>
                </div>
            </div>
        </div>
    </>
    );
}


export default TaskStatus;