const TaskStatus = ({ selectedTicket }) => {
    return (
        <div className="bg-white text-black rounded-2xl p-6 m-4 shadow-lg">
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">
                        {selectedTicket.title}
                    </h3>
                    <button className="bg-green-400 hover:bg-green-500 rounded-xl w-full py-2 mt-4 shadow-md text-white font-semibold transition-all duration-200">Complete</button>
                </div>
            </div>
        </div>
    );
}


export default TaskStatus;