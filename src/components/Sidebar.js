import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FaRegIdCard } from 'react-icons/fa6';
import { RiArticleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

    const screensize = 1105
    const [isMobile, setIsMobile] = useState(window.innerWidth < screensize);
    const location = useLocation();


    const buttonStyles = {
        base: 'w-full flex items-center px-4 py-2 text-lg font-bold text-left',
        default: 'text-black bg-white hover:bg-gray-300',
        active: 'bg-black text-blue1',
    };


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < screensize);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (

        <motion.div

            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg pt-28 p-4 z-30"
            initial={isMobile ? { x: '-100%' } : { opacity: 0 }}
            animate={isMobile ? { x: isSidebarOpen ? 0 : '-100%' } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >

            <nav className="space-y-4 z-50">
                <Link
                    to="/"
                    className={`${buttonStyles.base} ${location.pathname === '/' ? buttonStyles.active : buttonStyles.default} rounded-full`}
                    onClick={toggleSidebar}
                >
                    <FiHome className="mr-3" /> <AnimatedText textKey="side_home" />
                </Link>
                <Link
                    to="/about"
                    className={`${buttonStyles.base} ${location.pathname === '/about' ? buttonStyles.active : buttonStyles.default} rounded-full`}
                    onClick={toggleSidebar}
                >
                    <FaRegIdCard className="mr-3" /> <AnimatedText textKey="side_about" />
                </Link>
                <Link
                    to="/blogs"
                    className={`${buttonStyles.base} ${location.pathname === '/blogs' ? buttonStyles.active : buttonStyles.default} rounded-full`}
                    onClick={toggleSidebar}
                >
                    <RiArticleLine className="mr-3" /> <AnimatedText textKey="side_blogs" />
                </Link>
            </nav>



            {isMobile && (
                <button className="absolute bottom-20 right-30 lg:hidden" onClick={toggleSidebar}>

                    <svg
                        className="w-8 h-8 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5M12 19l-7-7 7-7"
                        />
                    </svg>

                </button>
            )}

        </motion.div>

    );
};

export default Sidebar;