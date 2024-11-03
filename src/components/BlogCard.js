import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTag, FaCalendarAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const BlogCard = ({ id, title, title_zh, summary, summary_zh, category, category_zh, date, image }) => {
    const { i18n } = useTranslation();

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const currentTitle = i18n.language === 'zh' ? title_zh : title;
    const currentSummary = i18n.language === 'zh' ? summary_zh : summary;
    const currentCategory = i18n.language === 'zh' ? category_zh : category;

    return (
        <motion.div
            className="flex bg-white rounded-3xl shadow-lg overflow-hidden mb-4"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.3 }}
            style={{ maxHeight: '170px' }}
        >
            <Link to={`/blogs/${id}`} className="flex w-full">

                <div className="p-6 flex-1">
                    <motion.h2
                        className="text-2xl font-bold"
                        key={i18n.language}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={textVariants}
                    >
                        {currentTitle}
                    </motion.h2>
                    <motion.p
                        className="mt-2 text-gray-600 line-clamp-2"
                        key={`${i18n.language}-summary`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={textVariants}
                    >
                        {currentSummary}
                    </motion.p>


                    <motion.span
                        className="mt-4 flex items-center text-sm text-gray-500"
                        key={`${i18n.language}-category`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={textVariants}
                    >
                        <FaCalendarAlt className="mr-2" />
                        <span className="mr-4">{date}</span>
                        <FaTag className="mr-2" />
                        <span className="mr-4">{currentCategory}</span>
                    </motion.span>
                </div>

                <div className="w-1/3 flex items-center justify-center overflow-hidden hidden sm:flex" style={{ maxHeight: '200px' }}>
                    <img
                        src={image}
                        alt={currentTitle}
                        className="w-full object-cover"
                        style={{ maxHeight: '100%', objectFit: 'cover' }}
                    />
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;