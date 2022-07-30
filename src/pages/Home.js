import ParticlesBg from 'particles-bg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from './shared/PageTitle';
import Spinner from './shared/Spinner';
const Home = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects_data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const [spinner, setSpinner] = useState(false)

    const navigate = useNavigate();

    if (spinner) {
        return <Spinner />
    }

    return (
        <>
            <section className='overflow-hidden '>
                <PageTitle title="Home" />
                <ParticlesBg num={50} type="cobweb" bg={true} />


                <div id='home' class="hero w-screen h-screen bg-cover lg:bg-contain bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/ZJ20K9K/abdulahad.png)', marginTop: '54px' }}>

                    <div class="hero-overlay bg-opacity-70 lg:bg-opacity-40"></div>

                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-50 mx-auto">
                            <div className='lg:max-w-lg'>
                                <h1 class=" text-2xl lg:text-5xl font-bold">I'm <span className='text-sky-500'>Abdul Ahad</span> </h1>
                                <h1 class="mb-5 text-2xl lg:text-3xl font-bold ">Full Stack Web Developer</h1>
                                <p class="mb-5">I Have 1-year of experiences Web Development sector. I learned many cores and modern things of teck from google and youtube, and also completed the course of programming hero.</p>
                            </div>
                            <div className='flex justify-center gap-2 max-w-40'>
                                <a href='https://drive.google.com/file/d/1Fm5Cl5D6R4HnhSaxsjgmk1MVPi3pxItG/view' class="btn border-0 bg-sky-600" target="_blank" rel='noreferrer'>See Resume</a>
                                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/md-abdul-ahad-a52245230/' type='tel' class="btn btn-primary">Hire Quickly</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='px-20'>
                <h2 className='text-2xl text-center pt-20'>Skills</h2>
                <div className='lg:flex justify-center items-center'>
                    <div>
                        {/* <img src="../Assets/Images/skill-portfolio-image.jpg" alt="" /> */}
                        <img className='w-[900px]' src="https://i.ibb.co/nzKj8mz/skill-portfolio-image.jpg" alt="" />
                    </div>
                    <div>
                        {/* <img src="../Assets/Images/skills.png" alt="" /> */}
                        <img className='grow-0 ' src="https://i.ibb.co/hLRxs5M/skills.png" alt="" />
                    </div>
                </div>
            </section>

            <section id='home#projects' className='px-2 lg:px-20  mb-10 '>
                <h2 className='text-2xl text-center pt-20'>Projects</h2>
                <div className='grid grid-cols-1  lg:grid-cols-3 gap-4 mt-10 '>

                    {projects.map(project => <div class="flex flex-col lg:flex-row card-compact bg-base-100 shadow-xl rounded-lg items-center">
                        <img className=' w-40 lg:w-full h-60  rounded-lg  object-cover' src={project.img} alt="Shoes" />
                        <div class="card-body">
                            <h2 class="card-title">{project.project}</h2>
                            <p>{project.project_desc.slice(0, 100)}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary" onClick={() => {
                                    setSpinner(true)
                                    navigate(`project/${project.id}`)

                                }} >Viiew Details</button>
                            </div>
                        </div>
                    </div>)

                    }



                </div>

            </section>

        </>
    );
};

export default Home;