const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-slate-100 text-black h-16 flex items-center justify-between px-15 z-50">
            <div className='font-bold px-2'>
                <h2>CS- Ticket System</h2>
            </div>
            <div className='flex justify-end items-center gap-6'>
                <a href="" className='hover:text-gray-300'>Home</a>
                <a href="" className='hover:text-gray-300'>FAQ</a>
                <a href="" className='hover:text-gray-300'>Changelog</a>
                <a href="" className='hover:text-gray-300'>Blog</a>
                <a href="" className='hover:text-gray-300'>Download</a>
                <a href="" className='hover:text-gray-300'>Contact</a>
                <button className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold'>+ New Ticket</button>
            </div>
        </nav>
    );
};

export default Navbar;