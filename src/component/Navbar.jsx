const Navbar = () => {
    const showMenu = () => {
        let menu = document.getElementById("menu");
        if(menu.style.display == "block"){
            menu.style.display = "none";
        }else{
            menu.style.display = "block";
        }
    }

    return(
        <nav className="h-20 flex flex-row justify-between px-6 md:px-28 items-center sticky top-0 z-30 bg-white shadow">
            <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Wahyu Dwi Prastika</h1>
            </div>
            <div className="hidden lg:block">
                <ul className="flex items-center">
                    <li className="ml-5 text-lg"><a>Home</a></li>
                    <li className="ml-5 text-lg"><a>About me</a></li>
                    <li className="ml-5 text-lg"><a>Skills</a></li>
                    <li className="ml-5 text-lg"><a>Projects</a></li>
                    <li className="ml-5 text-lg"><a>Contact</a></li>
                    <li className="ml-5 text-lg"><button className="p-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-800 transition">Download My Resume</button></li>
                </ul>
            </div>
            <div className="block z-50 lg:hidden lg:-z-10">
                <a className="inline-block" onClick={showMenu}><i className="fa-solid fa-bars"></i></a>
                <div className="hidden p-2 bg-slate-600 rounded-lg shadow-lg absolute top-16 right-1 md:right-9" id="menu">
                    <ul className="flex flex-col items-center">
                        <li className="text-white"><a>Home</a></li>
                        <li className="mt-2 text-white"><a>About me</a></li>
                        <li className="mt-2 text-white"><a>Services</a></li>
                        <li className="mt-2 text-white"><a>Projects</a></li>
                        <li className="mt-2 text-white"><a>Contact</a></li>
                        <li className="mt-2 text-white"><a>Download My Resume</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;