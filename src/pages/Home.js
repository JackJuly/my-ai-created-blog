import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard'
import TaskCard from '../components/TaskCard';
import StatCard from '../components/StatCard';
import { CardStack } from '../components/CardStack';
import { BAGES } from '../assets/badgesData';

function HomePage() {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start bg-gray-100">
                <div className="flex flex-col sm:flex-row sm:space-x-8 w-full sm:items-end items-center">
                    <div className="min-h-full w-2/3 flex-grow hidden sm:block">
                        <TaskCard className="min-h-full" />
                    </div>
                    <div className="min-h-full flex-grow">
                        <ProfileCard className="min-h-full" />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-8 w-full sm:items-start items-center mt-8">
                    <div className="mt-4 flex-grow">
                        <CardStack items={BAGES} className="pt-8" />
                    </div>

                    <div className="min-h-full flex-grow block sm:hidden mt-8 sm:mt-0">
                        <TaskCard className="min-h-full" />
                    </div>
                    <div className="min-h-full flex-grow mt-8 sm:mt-0">
                        <StatCard className="min-h-full" />
                    </div>

                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-8 w-full sm:items-start items-center mt-8 block sm:hidden">
                    <div className="mt-4 flex-grow block sm:hidden w-80 h-20">
                    </div>
                </div>

            </div>
        </motion.div >

    );
}

export default HomePage;