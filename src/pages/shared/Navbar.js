import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItmes = <>
        <li><a href='/#home'>Home</a></li>
        {/* <li><a href='/'>Home</a></li> */}
        <li><a href='/#home#skills'>Skills</a></li>
        <li><a href='/#home#projects'>Projects</a></li>
        <li><Link to='about'>About Me</Link></li>
        <li><Link to='blog'>Blog</Link></li>
        <li><Link to='contact'>Contact Me</Link></li>

    </>

    return (


        <nav class="navbar fixed bg-base-200 lg:px-28 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItmes}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl" href='/'>Abdul~Ahad</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItmes}

                </ul>
            </div>

        </nav>



    );
};

export default Navbar;