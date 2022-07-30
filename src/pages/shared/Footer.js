import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation()
    return (
        <div className={pathname === '/contact' ? 'mt-40' : 'mt-28'}>
            <footer class="footer items-center p-4 bg-neutral text-neutral-content">
                <div class="items-center grid-flow-col">
                    <img className='w-6 h-6 rounded' src="https://i.ibb.co/ZJ20K9K/abdulahad.png" alt="" />
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='https://www.linkedin.com/in/md-abdul-ahad-web-developer' target="_blank"><i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href='https://github.com/abdulahad-gh' target="_blank"><i class="fa-brands fa-github" ></i></a>
                    <a href='https://web.facebook.com/AbdulAhad.Messenger/' target="_blank"><i class="fa-brands fa-facebook" ></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;