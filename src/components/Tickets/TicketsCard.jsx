

const TicketsCard = ({ticket}) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-4 mt-5">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{ticket.title}</h3>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold text-sm">
                    {ticket.status || "Open"}
                </button>
            </div>

            <p className="text-gray-600 mb-4">{ticket.description}</p>

            <div className="flex justify-between gap-6 text-sm">
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
                
                <div className="flex justify-between gap-1.5 text-sm">
                    <p className="text-gray-400">{ticket.customer}</p>
                    <p className="text-gray-400">{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketsCard;