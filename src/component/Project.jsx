import 'tw-elements';
import ngopiyuk from '../img/ngopiyuk.png';
import abclearningcenter from '../img/abclearningcenter.png';
import abcjobs from '../img/abcjobs.png';
import abccars from '../img/abccars.png';

const Project = () => {
    return(
        <section id="project">
            <h1 className="text-3xl text-center text-primary font-bold mt-10 mb-2">My Projects</h1>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade relative" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                    <a href='https://wahyudwiprstka.github.io/projek_perancangan_web'>
                    <img
                        src={ngopiyuk}
                        class="block w-full"
                        alt="..."
                    />
                    </a>
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">Ngopi Yuk</h5>
                        <p>A coffee shop website, made by HTML, CSS, Javascript</p>
                    </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <a href='https://wahyudwiprstka.github.io/ABC-Learning-Center'>
                    <img
                        src={abclearningcenter}
                        class="block w-full"
                        alt="..."
                    />
                    </a>
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">ABC Learning Center</h5>
                        <p>Website for learning center company that provides courses for people who wants to be a software developer. This project was made by HTML, CSS, and Javascript</p>
                    </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <a href='https://github.com/wahyudwiprstka/ABC-Jobs'>
                    <img
                        src={abcjobs}
                        class="block w-full"
                        alt="..."
                    />
                    </a>
                    <div class="carousel-caption hidden md:block absolute text-center text-black">
                        <h5 class="text-xl">ABC Jobs</h5>
                        <p>Community portal for software developers to communicate, or find a job. This project was made by JSP, Spring MVC, Bootstrap, Javascript, MySQL</p>
                    </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                    <a href='https://github.com/wahyudwiprstka/ABC-Cars'>
                    <img
                        src={abccars}
                        class="block w-full"
                        alt="..."
                    />
                    </a>
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">ABC Cars</h5>
                        <p>A car bidding website. This project was made by JSP, Spring Boot, Bootstrap, and Mysql</p>
                    </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </section>
    );
}

export default Project;