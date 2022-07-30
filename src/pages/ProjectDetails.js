import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './shared/Spinner';

const ProjectDetails = () => {
    const [spinner, setSpinner] = useState(true)

    const { id } = useParams();
    const [project, setProject] = useState({});



    useEffect(() => {
        if (id) {
            fetch("/projects_data.json")
                .then(res => res.json())
                .then(data => {
                    const matchProject = data.find(pro => pro.id === id)
                    setProject(matchProject)
                    setSpinner(false)
                })
        }
    }, [id])
    if (spinner) {
        return <Spinner />
    }
    return (
        <div className='flex lg:h-screen flex-col items-center justify-center mt-36 lg:flex-row gap-4 px-2 lg:px-40'>
            <div class="carousel w-full ">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={project?.project_ss[0]} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={project?.project_ss[1]} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={project?.project_ss[2]} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='max-w-80 lg:pl-28'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl px-2 lg:px-5">
                    <div class="">
                        <h2 class="card-title">{project.project}</h2>
                        <p>{project.project_desc}</p>
                        <div>
                            <p className='text-xl'>features</p>
                            <ul className='list-disc list-inside'>
                                {
                                    project.features.map(feature => <li className=''>{feature}</li>)
                                }
                            </ul>
                        </div>
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <a target='_blank' rel='noreferrer' href={project.link.live} className='btn btn-xs' >Live Site</a>

                            <a target='_blank' rel='noreferrer' href={project.link.client} className='btn btn-xs' >Client Site</a>

                            <a target='_blank' rel='noreferrer' href={project.link.server} className='btn btn-xs' >Server Site</a>

                        </div>
                        <p className='text-xl mt-4 '>Owener</p>
                        <div className='flex gap-2 p-4 items-center'>
                            <div class="avatar">
                                <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/ZJ20K9K/abdulahad.png" />
                                </div>
                            </div>
                            <div>Abdul Ahad</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectDetails;