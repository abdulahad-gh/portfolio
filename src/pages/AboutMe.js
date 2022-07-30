import React from 'react';
import { useLocation } from 'react-router-dom';
import PageTitle from './shared/PageTitle';

const AboutMe = () => {
    const { pathname } = useLocation()
    // console.log(pathname == '/about');

    return (
        <div className='pt-20'>
            <PageTitle title="about me" />

            <section>
                <div className='flex flex-col md:flex-row justify-evenly items-center'>
                    <div className='px-4'>
                        <div>
                            <div className='flex items-center'>
                                <h1 className='text-xl lg:text-2xl'>Abdul Ahad</h1>
                                <div class="avatar online">
                                    <div class="w-8 h-8 rounded-full">
                                        <img src="https://i.ibb.co/VHdGvxb/abdul-Ahad.png" alt='profileImg' />
                                    </div>
                                </div>

                            </div>
                            <p>I am a Web Developer. I can make react app user friendly. <br />
                                Know to more aboute me? please scroll....
                            </p>
                        </div>

                        <a href='https://www.linkedin.com/in/md-abdul-ahad-a52245230/' target={'_blank'} rel='noreferrer' className='btn btn-sm'>Contact</a>
                        <div class="stat">
                            <div class="stat-figure text-secondary">

                            </div>
                            <div class="stat-value">90%</div>
                            <div class="stat-title">Done 27 projects</div>
                            <div class="stat-desc text-secondary">4 tasks remaining</div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/w0SHg5K/abdul-ahad-removebg-preview.png" alt="" />
                    </div>

                </div>

            </section>
            <section>
                <div className='px-4 lg:px-20 mt-4 '>
                    <h2 className='text-4xl'>About</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 mt-10'>
                        <div>
                            <h2 className='font-bold'>Skills</h2>
                            <div className='flex flex-col  gap-4 mt-4 max-w-56'>
                                <div className='w-24 md:w-56'>
                                    <p>HTML</p>
                                    <progress class="progress progress-info w-full" value="90" max="100"></progress>
                                    <p>CSS</p>
                                    <progress class="progress progress-info w-full" value="94" max="100"></progress>
                                    <p>BootStrap,Tailwind</p>
                                    <progress class="progress progress-info w-full" value="85" max="100"></progress>
                                    <p>JavaScript</p>
                                    <progress class="progress progress-info w-full" value="92" max="100"></progress>
                                    <p>React</p>
                                    <progress class="progress progress-info w-full" value="99" max="100"></progress>
                                    <p>Node.js,Express</p>
                                    <progress class="progress progress-info w-full" value="94" max="100"></progress>
                                    <p>MongoDb</p>
                                    <progress class="progress progress-info w-full" value="92" max="100"></progress>
                                </div>
                            </div>

                        </div>

                        <div>
                            <h2 className='font-bold'>Education</h2>
                            <div>
                                <p className='font-semibold mt-4'>SSC</p>
                                <p>passing Year: 2018.</p>
                                <p>Institute: Satkania govt high school.</p>

                                <p className='font-semibold mt-4'>HSC</p>
                                <p>passing Year: 2020.</p>
                                <p>Institute: Satkania govt college.</p>

                                <p className='font-semibold mt-4'>Present</p>
                                <p>BBS 2nd year</p>
                                <p>Institute: Govt. Hazi Mohammad Mohsin College.</p>

                            </div>
                        </div>
                        <div>
                            <h2 className='font-bold'>Contact Info</h2>
                            <p className='font-semibold mt-4'>Address</p>
                            <address>
                                <p>District: Chittagong</p>
                                <p>Country: Bangladesh</p>
                                <p>Email: abdulahadgmid@gmail.com</p>
                            </address>
                            <p className='font-semibold mt-2'>Social Links</p>
                            <div>
                                <div class="flex gap-4">
                                    <a href='https://www.linkedin.com/in/md-abdul-ahad-web-developer' target="_blank"><i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href='https://github.com/abdulahad-gh' target="_blank"><i class="fa-brands fa-github" ></i></a>
                                    <a href='https://web.facebook.com/AbdulAhad.Messenger/' target="_blank"><i class="fa-brands fa-facebook" ></i></a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutMe;