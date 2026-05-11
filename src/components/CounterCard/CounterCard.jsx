

const CounterCard = ({resolved, inProgress}) => {
    const cards = [
        { title: "In-Progress", count: inProgress, gradient: "from-blue-400 to-blue-600" },
        { title: "Resolved", count: resolved, gradient: "from-green-400 to-green-600" }
    ];

    return (
        <div className="pt-10 w-full md:w-2/3 flex mx-auto mt-12">
            <div className="grid grid-cols-2 gap-6 mx-auto w-full flex">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-r ${card.gradient} p-8 rounded-lg shadow-lg text-white flex flex-col items-center justify-center`}
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