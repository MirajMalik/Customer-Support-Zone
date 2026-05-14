import { NavLink } from "react-router";

const Navbar = ({setShowForm}) => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-slate-100 text-black h-16 flex items-center justify-between px-15 z-50">
            <div className='font-bold px-2'>
                <h2>CS- Ticket System</h2>
            </div>
            <nav className='flex justify-end items-center gap-6'>
                <NavLink to="/" className='hover:text-gray-300'>Home</NavLink>
                <NavLink to="/analytics" className='hover:text-gray-300'>Analytics</NavLink>
                <NavLink to="/changelog" className='hover:text-gray-300'>Changelog</NavLink>
                <NavLink to="/blog" className='hover:text-gray-300'>Blog</NavLink>
                <NavLink to="/download" className='hover:text-gray-300'>Download</NavLink>
                <NavLink to="/contact" className='hover:text-gray-300'>Contact</NavLink>
                <button 
                    onClick={() => setShowForm(true)}
                    className='bg-red-500 hover:bg-red-600 px-4 py-2 ml-2 rounded font-semibold'>
                        + New Ticket
                </button>
            </nav>
        </nav>
    );
};

export default Navbar;