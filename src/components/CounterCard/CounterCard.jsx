import { useState } from "react";

const CounterCard = () => {
    const [ inProgress, setInprogress ] = useState(0)
    const [ resolved, setResolved ] = useState(0)

    const cards = [
        { title: "In-Progress", count: inProgress, gradient: "from-blue-400 to-blue-600" },
        { title: "Resolved", count: resolved, gradient: "from-green-400 to-green-600" }
    ];

    return (
        <div className="px-15 py-8 mt-20 bg-red-200">
            <div className="grid grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-r ${card.gradient} p-8 rounded-lg shadow-lg text-white`}
                    >
                        <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
                        <p className="text-4xl font-bold">{card.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CounterCard;