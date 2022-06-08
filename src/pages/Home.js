import React from 'react';
const Home = () => {
    return (
        <div className='overflow-hidden'>
            <div class="hero w-screen h-screen bg-contain bg-no-repeat	" style={{ backgroundImage: 'url(https://i.ibb.co/ZJ20K9K/abdulahad.png)' }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">I'm Abdul Ahad</h1>
                        <p class="mb-5">I Have 1-year of experiences Web Development sector. I learned many cores and modern things of teck from google and youtube, and also completed the course of programming hero.</p>
                        <div className='flex justify-center gap-2'>
                            <a href='https://drive.google.com/file/d/1Fm5Cl5D6R4HnhSaxsjgmk1MVPi3pxItG/view' class="btn btn-primary" target="_blank" rel='noreferrer'>See Resume</a>
                            <button class="btn btn-primary">Hire Quickly</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;