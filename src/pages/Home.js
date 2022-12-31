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
                <PageTitle title="Home" content="web developer or react developer abdul ahad"
                    linksrc='/home'
                />
                <ParticlesBg num={50} type="cobweb" bg={true} />


                <div id='home' class="hero w-screen h-screen bg-cover lg:bg-contain bg-no-repeat mt-16 " style={{ backgroundImage: 'url(https://i.ibb.co/ZJ20K9K/abdulahad.png)' }}>

                    <div class="hero-overlay bg-opacity-70 lg:bg-opacity-40"></div>

                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-50 mx-auto">
                            <div className='lg:max-w-lg'>
                                <h1 class=" text-2xl lg:text-5xl font-bold">I'm <span className='text-sky-500'>Abdul Ahad</span> </h1>
                                <h1 class="mb-5 text-2xl lg:text-3xl font-bold ">Full Stack Web Developer</h1>
                                <p class="mb-5">I Have 2 year's of experiences Web Development sector. I learned many cores and modern things of teck from google and youtube, and also completed the course of <strong>programming hero</strong>.</p>
                            </div>
                            <div className='flex justify-center gap-2 max-w-40'>
                                <a href='https://drive.google.com/file/d/1XdKEN92cwiZcvhHQtQdMOkJmY6tiqKIk/view?usp=sharing' class="btn border-0 bg-sky-600" target="_blank" rel='noreferrer'>See Resume</a>
                                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/md-abdul-ahad-a52245230/' type='tel' class="btn btn-primary">Hire Quickly</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='home#skills' className='lg:px-20 mt-10 lg:pt-20'>
                <h2 className='text-2xl text-center'>Skills</h2>
                <div className='lg:flex lg:flex-row-reverse gap-4 justify-center items-center pt-6'>

                    <div>
                        {/* <img src="../Assets/Images/skills.png" alt="" /> */}
                        <img className='' src="https://i.ibb.co/hLRxs5M/skills.png" alt="" />
                    </div>
                    <div >
                        {/* <img className='w-[900px] rounded-md' src="../Assets/Images/skill-portfolio-image.jpg" alt="" /> */}
                        <img className='p-2 lg:p-0 w-[900px] rounded-xl md:rounded-md' src="https://i.ibb.co/nzKj8mz/skill-portfolio-image.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className='px-2 lg:px-20  mb-10 '>
                <h2 id='home#projects' className='text-2xl text-center pt-20'>Projects</h2>
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