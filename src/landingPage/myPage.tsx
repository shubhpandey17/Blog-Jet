import React from 'react';
import { Link } from 'react-router-dom'; 

const Header: React.FC = () => {
  return (
    <>
             
              <nav className="flex items-center bg-gray-400  hover:bg-blue-900">
                <img src='./images/MrHackTooth Logo.png' className="w-40 cursor-pointer"/>
                <ul className="flex-1 text-center font-bold text-white">
                  <li className="list-none inline-block px-5"><Link to="/">Home</Link></li>
                  <li className="list-none inline-block px-5"><Link to="/courses">Courses</Link></li>
                  <li className="list-none inline-block px-5"><Link to="/about">About Us</Link></li>
                  <li className="list-none inline-block px-5"><Link to="/contact">Contact Us</Link></li>
                </ul>
                <img src=''/>
              </nav>

              <div className="mt-36 max-w-xl pl-10">
                <h1 className="text-6xl font-semibold leading-normal">HACKTOOTH<br/>Best Learning for Your Kids</h1>
                <p>Unlocking The World of Coding For Young Minds </p>
              </div>

              <div className="mt-24 pl-10 text-center">
                <Link to="" className="bg-blue-500 rounded-3xl py-3 px-8 font-medium inline-block hover:bg-transparent hover:border-blue-500 duration-300 hover:border">Courses</Link>
                
              </div>
           
             <img src='./images/image7.png' className='  xl:absolute bottom-40 right-24 w-80 h-80'/>
              
     
    </>
  );
};

export default Header;
