import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { BLOGS } from '../assets/blogsData';
import BlogCard from '../components/BlogCard';
import AnimatedText from '../components/AnimatedText';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};


const MyBlogs = () => {
    const { t, i18n } = useTranslation();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {

        if (isFirstLoad) {
            setIsFirstLoad(false);
        }
    }, [isFirstLoad]);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-4"
        >

            <motion.h1
                key={i18n.language}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="flex justify-between items-end"
            >
                <AnimatedText textKey="side_blogs" />
                <span className="text-sm text-gray-500 mr-4">
                    {t('blogs_count')}{BLOGS.length} {t('blogs_total')}
                </span>
            </motion.h1>


            <div className="space-y-6">
                {BLOGS.map((blog) => (
                    <motion.div key={blog.id} variants={itemVariants}>
                        <BlogCard
                            id={blog.id}
                            title={blog.title}
                            title_zh={blog.title_zh}
                            summary={blog.summary}
                            summary_zh={blog.summary_zh}
                            category={blog.category}
                            category_zh={blog.category_zh}
                            date={blog.date}
                            image={blog.image}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default MyBlogs;