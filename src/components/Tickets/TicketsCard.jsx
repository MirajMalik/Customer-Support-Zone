

const TicketsCard = ({ticket}) => {
    return (
        <div className="bg-white flex flex-col border border-gray-200 rounded-lg shadow-md p-2 mb-2">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{ticket.title}</h3>
                <button className={`text-white px-4 py-2 rounded-full font-semibold text-sm ${
                    ticket.status === 'Open' ? 'bg-green-500 hover:bg-green-600' :
                    ticket.status === 'In Progress' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500'
                    
                 }`}>
                    {ticket.status || "Open"}
                </button>
            </div>

            <p className="text-gray-600 mb-3">{ticket.description}</p>

            <div className="flex mt-auto justify-between text-sm">
                <div className="flex justify-between gap-1.5 text-sm">
                    <p className="text-gray-500 font-semibold">#{ticket.id}</p>
                    <p className={`font-semibold ${
                        ticket.priority === 'High' ? 'text-red-600' : 
                        ticket.priority === 'Medium' ? 'text-yellow-600' :
                        'text-green-600'
                    }`}>
                        {ticket.priority}
                    </p>
                </div>
                
                <div className="flex justify-between items-end gap-1.5 text-sm">
                    <p className="text-gray-400">{ticket.customer}</p>
                    <p className="text-gray-400">{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketsCard;