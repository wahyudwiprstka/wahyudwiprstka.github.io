import '../css/navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const showMenu = () => {
        let menu = document.getElementById("menu");
        if(menu.style.display == "block"){
            menu.style.display = "none";
        }else{
            menu.style.display = "block";
        }
    }

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeChange = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
    }

    return(
        <nav className="z-50 h-20 flex flex-row justify-between px-6 md:px-28 items-center fixed top-0 shadow dark:text-white backdrop-blur dark:shadow-slate-600">
            <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"><a href='#home'>Wahyu Dwi Prastika</a></h1>
            </div>
            <div className="navlink-sm hidden xl:block">
                <ul className="flex items-center">
                    <li className="ml-5 text-lg"><a href="#home">Home</a></li>
                    <li className="ml-5 text-lg"><a href="#about">About me</a></li>
                    <li className="ml-5 text-lg"><a href="#skill">Skills</a></li>
                    <li className="ml-5 text-lg"><a href="#project">Projects</a></li>
                    <li className="ml-5 text-lg"><a href='#contact'>Contact</a></li>
                    <li className="ml-5 text-lg"><a href='https://github.com/wahyudwiprstka/wahyudwiprstka.github.io/blob/main/Resume%20-%20I%20Kadek%20Wahyu%20Dwi%20Prastika.docx?raw=true'><button className="p-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-800 transition">Download My Resume</button></a></li>
                    <li className="text-white">
                            <div className='flex'>
                                <span className='ml-5 text-sm text-slate-500'>Light</span>
                                <input type="checkbox" className='hidden' id='dark-toggle' onChange={handleThemeChange}/>
                                <label htmlFor='dark-toggle'>
                                    <div className='mx-1 flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1'>
                                        <div className='toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out'></div>
                                    </div>
                                </label>
                                <span className='mr-2 text-sm text-slate-500'>Dark</span>
                            </div>
                    </li>
                </ul>
            </div>
            <div className='ml-10 flex z-50 lg:-z-50 xl:hidden'>
                <span className='text-sm text-slate-500'>Light</span>
                <input type="checkbox" className='hidden' id='dark-toggle-sm' onChange={handleThemeChange}/>
                <label htmlFor='dark-toggle-sm'>
                    <div className='mx-1 flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1'>
                        <div className='toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out'></div>
                    </div>
                </label>
                <span className='mr-2 text-sm text-slate-500'>Dark</span>
            </div>
            <div className="z-50 xl:hidden xl:-z-10">
                <a className="block mr-2" onClick={showMenu}><i className="fa-solid fa-bars"></i></a>
                <div className="hidden p-2 bg-slate-600 rounded-lg shadow-lg absolute top-16 right-1 md:right-9" id="menu">
                    <ul className="flex flex-col items-center">
                        <li className="text-white"><a href="#home">Home</a></li>
                        <li className="mt-2 text-white"><a href="#about">About me</a></li>
                        <li className="mt-2 text-white"><a href='#skill'>Skills</a></li>
                        <li className="mt-2 text-white"><a href='#project'>Projects</a></li>
                        <li className="mt-2 text-white"><a href='#contact'>Contact</a></li>
                        <li className="mt-2 text-white"><a href='https://github.com/wahyudwiprstka/wahyudwiprstka.github.io/blob/main/Resume%20-%20I%20Kadek%20Wahyu%20Dwi%20Prastika.docx?raw=true'>Download My Resume</a></li>
                    </ul>
                </div>
    
            </div>
            
            
        </nav>
    );
}

export default Navbar;