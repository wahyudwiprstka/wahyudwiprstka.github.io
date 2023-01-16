import myPhoto from '../img/myPhoto.png';
import blob from '../img/blob.svg';

const Home = () => {
    return(
        <section id="home" className="mt-2 relative mb-32">
            <div className="container flex flex-wrap items-center px-5 m-auto justify-center lg:max-w-5xl">
                <div className="w-full lg:w-1/2 m-auto">
                    <h1 className="mt-2 text-4xl font-bold text-slate-800">Hi! I am <br/> <span className="text-sky-700">Wahyu Dwi Prastika</span></h1>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-600">Web Developer</h3>
                    <p className="mt-2 text-lg">A Fresh Graduate Fullstack Web Developer from Bali, Indonesia.</p>
                    <button className="px-3 py-2 bg-indigo-600 rounded-lg shadow mt-2 text-white hover:bg-indigo-800 font-medium transition duration-150">Download My Resume</button>
                </div>
                <div className='w-full relative lg:w-1/2'>
                    <img src={myPhoto} alt="My Photo" className='m-auto'/>
                    <img src={blob} alt={blob} width="80%" height="80%" className="absolute -top-10 -z-10 left-10"/>
                </div>
            </div>
        </section>
    );
}

export default Home;