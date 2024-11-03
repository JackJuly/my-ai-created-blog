import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const BlogDetail = () => {
    const { id } = useParams();
    const { i18n } = useTranslation();
    const [markdownContent, setMarkdownContent] = useState('');
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // 动态加载 Markdown 文件
    useEffect(() => {
        const loadMarkdown = async () => {
            let file = '';

            // 根据当前语言加载不同的 Markdown 文件
            if (i18n.language === 'en') {
                file = `/markdowns/en/blogs_en/blog${id}_en.md`;  // 英文文件
            } else {
                file = `/markdowns/zh/blogs_zh/blog${id}_zh.md`;  // 中文文件
            }

            try {
                const response = await fetch(file);
                if (!response.ok) throw new Error('Failed to load markdown file');
                const text = await response.text();
                setMarkdownContent(text);
                setIsFirstLoad(false);
            } catch (error) {
                console.error(error);
                setMarkdownContent('Error loading the blog content.');
            }
        };

        loadMarkdown();
    }, [i18n.language, id]);

    return (
        <motion.div
            key={i18n.language}
            initial={isFirstLoad ? { opacity: 0, y: 50 } : { opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="p-8"
        >
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </motion.div>
    );
};

export default BlogDetail;