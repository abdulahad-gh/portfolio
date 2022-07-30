import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItmes = <>
        <li><a href='/#home'>Home</a></li>
        {/* <li><a href='/'>Home</a></li> */}
        <li><a href='/#home#projects'>Projects</a></li>
        <li><Link to='about'>About Me</Link></li>
        <li><Link to='blog'>Blog</Link></li>
        <li><Link to='contact'>Contact Me</Link></li>

    </>
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <div class="navbar  bg-gray-500 text-white p-0 z-20 fixed top-0  overflow-hidden lg:px-20">
                <div class="navbar-start">
                    <div class="flex ">
                        <a class="btn btn-ghost normal-case text-lg  lg:text-xl border-none" href='/'>Abdul~Ahad</a>

                        <label onClick={() => setMenu(!menu)} class="btn btn-ghost absolute right-0 lg:pl-2 lg:hidden">
                            {menu ? 'X' : <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>}
                        </label>

                    </div>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {
                            menuItmes
                        }
                    </ul>
                </div>

            </div>
            {
                menu && <ul class="menu menu-compact absolute top-0 bg-white mt-16 p-2 shadow z-50  right-0 rounded-sm w-52">
                    {
                        menuItmes
                    }
                </ul>
            }
        </div>
    );
};

export default Navbar;