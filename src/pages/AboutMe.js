import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { i18n } = useTranslation();
    const [markdownContent, setMarkdownContent] = useState('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // 动态加载 Markdown 文件
    useEffect(() => {
        const loadMarkdown = async () => {
            let file = '';

            if (i18n.language === 'en') {
                file = '/markdowns/en/about_en.md';
            } else {
                file = '/markdowns/zh/about_zh.md';
            }

            const response = await fetch(file);
            const text = await response.text();
            setMarkdownContent(text);

            setIsFirstLoad(false);
        };

        loadMarkdown();
    }, [i18n.language]);

    return (
        <div className="p-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={i18n.language}
                    initial={isFirstLoad ? { opacity: 0, y: 20 } : { opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default AboutMe;