import { useOutletContext } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { LayoutGrid, CheckCircle2, Clock, AlertCircle, TrendingUp } from 'lucide-react';

const Analytics = () => {
    const { tickets, resolved, inProgress } = useOutletContext();

    const priorityOrder = ['High', 'Medium', 'Low', 'Critical'];
    const priorityData = priorityOrder.map(priority => ({
            name: priority,
            value: tickets.filter(t => t.priority === priority).length
        }))
        .filter(d => d.value > 0);

    const statusData = [
        { name: 'Total', value: tickets.length, color: '#3b82f6' },
        { name: 'In Progress', value: inProgress, color: '#f59e0b' },
        { name: 'Resolved', value: resolved, color: '#10b981' },
    ];

    const PRIORITY_COLORS = {
        High: '#e27676',
        Medium: '#f59e0b',
        Low: '#3b82f6',
        Critical: '#ff0000'
    };

    const resolutionRate = tickets.length > 0 ? Math.round((resolved / tickets.length) * 100) : 0;

    return (
        <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Analytics Overview</h1>
                    <p className="text-slate-500 mt-1">Monitor team's support performance and ticket distribution.</p>
                </div>
                <div className="bg-emerald-50 px-4 py-2 rounded-full flex items-center gap-2 border border-emerald-100">
                    <TrendingUp className="text-emerald-600" size={18} />
                    <span className="text-emerald-700 font-semibold">{resolutionRate}% Resolution Rate</span>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 transition-all hover:shadow-md hover:border-blue-100">
                    <div className="p-4 bg-blue-50 rounded-2xl">
                        <LayoutGrid className="text-blue-600" size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Tickets</p>
                        <h3 className="text-3xl font-bold text-slate-800">{tickets.length}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 transition-all hover:shadow-md hover:border-amber-100">
                    <div className="p-4 bg-amber-50 rounded-2xl">
                        <Clock className="text-amber-600" size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">In Progress</p>
                        <h3 className="text-3xl font-bold text-slate-800">{inProgress}</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 transition-all hover:shadow-md hover:border-emerald-100">
                    <div className="p-4 bg-emerald-50 rounded-2xl">
                        <CheckCircle2 className="text-emerald-600" size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Resolved</p>
                        <h3 className="text-3xl font-bold text-slate-800">{resolved}</h3>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-8">
                        <AlertCircle className="text-slate-400" size={20} />
                        <h2 className="font-bold text-slate-700 text-lg">Priority Breakdown</h2>
                    </div>
                    <div className="h-[320px] w-full">
                        {tickets.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={priorityData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70}
                                        outerRadius={90}
                                        paddingAngle={8}
                                        dataKey="value"
                                    >
                                        {priorityData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={PRIORITY_COLORS[entry.name]} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                                <AlertCircle size={40} className="opacity-20" />
                                <p>No ticket data to display</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-8">
                        <LayoutGrid className="text-slate-400" size={20} />
                        <h2 className="font-bold text-slate-700 text-lg">Ticket Status Comparison</h2>
                    </div>
                    <div className="h-[320px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={statusData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} 
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#64748b', fontSize: 12 }} 
                                />
                                <Tooltip 
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={45}>
                                    {statusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
