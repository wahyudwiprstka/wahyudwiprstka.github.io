import 'tw-elements';
import ngopiyuk from '../img/ngopiyuk.png';
import abclearningcenter from '../img/abclearningcenter.png';
import abcjobs from '../img/abcjobs.png';
import abccars from '../img/abccars.png';

const Project = () => {
    return(
        <section className="z-10 py-8 shadow-lg md:shadow dark:bg-dark dark:shadow-slate-600" id="project">
            <h1 className="text-3xl text-center text-primary font-bold mb-2">My Projects</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm w-full md:w-1/2 lg:w-1/4 dark:shadow-slate-600">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={ngopiyuk} alt=""/>
                    </a>
                    <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Ngopi Yuk</h5>
                    <p className="text-gray-700 text-base mb-4">
                        A coffee shop website that was made by HTML, CSS, Javascript.
                    </p>
                    <a href='https://wahyudwiprstka.github.io/projek_perancangan_web/' target="_blank">
                    <button type="button" className="p-2 bg-indigo-600 rounded-lg shadow mt-2 text-white hover:bg-indigo-800 font-medium transition duration-150">Visit Website</button>
                    </a>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm w-full md:w-1/2 lg:w-1/4 dark:shadow-slate-600">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={abclearningcenter} alt=""/>
                    </a>
                    <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">ABC Learning Center</h5>
                    <p className="text-gray-700 text-base mb-4">
                        A website that provides courses to people that want to be a software developer. This project was made by HTML, CSS, and Javascript.
                    </p>
                    <a href='https://wahyudwiprstka.github.io/ABC-Learning-Center/' target="_blank">
                    <button type="button" className="p-2 bg-indigo-600 rounded-lg shadow mt-2 text-white hover:bg-indigo-800 font-medium transition duration-150">Visit Website</button>
                    </a>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm w-full md:w-1/2 lg:1/4 dark:shadow-slate-600">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={abcjobs} alt=""/>
                    </a>
                    <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">ABC Jobs Portal</h5>
                    <p className="text-gray-700 text-base mb-4">
                        A community portal website that use to communicate between software developer or find a job as a software developer. This project was made by JSP, Spring MVC, Bootstrap, Javascript and MySQL
                    </p>
                    <a href='https://github.com/wahyudwiprstka/ABC-Jobs' target="_blank">
                    <button type="button" className="p-2 bg-indigo-600 rounded-lg shadow mt-2 text-white hover:bg-indigo-800 font-medium transition duration-150">See Repository</button>
                    </a>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm w-full md:w-1/2 lg:1/4 dark:shadow-slate-600">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={abccars} alt=""/>
                    </a>
                    <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">ABC Cars</h5>
                    <p className="text-gray-700 text-base mb-4">
                        A car bidding website. This project was made by JSP, Spring Boot, Bootstrap, Javascript and MySQL
                    </p>
                    <a href='https://github.com/wahyudwiprstka/ABC-Cars' target="_blank">
                    <button type="button" className="p-2 bg-indigo-600 rounded-lg shadow mt-2 text-white hover:bg-indigo-800 font-medium transition duration-150">See Repository</button>
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;