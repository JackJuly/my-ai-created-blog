import React from 'react';
import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6";


const ProfileCard = () => {

    return (
        <div className="flex sm:flex-col flex-row justify-between bg-white shadow-lg rounded-3xl p-6 sm:w-64 w-80 h-40 sm:h-full text-center">

            <div className="flex justify-center items-center sm:mb-4 mb-0 sm:ml-0 ml-4">
                <img
                    className="w-24 h-24 rounded-full"
                    src="/images/avatar.png"
                    alt="Avatar"
                />
            </div>


            <div className="w-2/5 sm:w-full flex flex-col sm:mr-0 mr-4">
                <div className="flex flex-col text-2xl font-semibold items-center space-y-0">
                    <span className="relative z-10">Your Name</span>

                    <span className="font-normal text-sm text-neutral-500 m-0">Happ Coding!</span>
                </div>


                <div className="flex justify-center mt-5 text-gray-700 space-x-4">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-xl" />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="text-xl" />
                    </a>
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="text-xl" />
                    </a>
                </div>
            </div>
        </div >

    );
};

export default ProfileCard;