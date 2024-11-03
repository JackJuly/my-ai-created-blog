import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import AboutMe from './AboutMe';
import MyBlogs from './MyBlogs';
import BlogDetail from './BlogDetail';

import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';


const MainPage = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation Bar */}
            <NavBar toggleSidebar={toggleSidebar} />


            <div className="flex">
                {/* Sidebar */}
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                <main className={`relative z-10 flex-1 bg-[#f3f4f6] h-screen overflow-y-auto pt-28 px-4 sm:px-8 smd:px-16 smd:ml-64`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/blogs" element={<MyBlogs />} />
                        <Route path="/blogs/:id" element={<BlogDetail />} />
                    </Routes>
                </main>
            </div>
        </div >
    );
};

export default MainPage;