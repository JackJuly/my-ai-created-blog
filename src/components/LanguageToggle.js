import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    // init language
    const initialLanguage = navigator.language.startsWith('zh') ? 'zh' : 'en';
    const [isEnglish, setIsEnglish] = useState(initialLanguage === 'en');

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? 'zh' : 'en';
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    };

    return (
        <div className="flex items-center space-x-4">
            <div
                onClick={toggleLanguage}
                className="relative w-32 h-10 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center"
            >
                {/* English and Chinese Text */}
                <motion.span
                    className={`absolute left-6 font-semibold transition-colors duration-300 z-20 ${isEnglish ? 'text-blue1' : 'text-black'}`}
                >
                    EN
                </motion.span>
                <motion.span
                    className={`absolute right-5 font-semibold transition-colors duration-300 z-20 ${!isEnglish ? 'text-blue1' : 'text-black'}`}
                >
                    中文
                </motion.span>

                {/* Sliding Circle with smaller rounded edges */}
                <motion.div
                    className="w-16 h-8 bg-black rounded-full z-10"
                    animate={isEnglish ? { x: 0 } : { x: 56 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 80 }}
                />
            </div>
        </div>
    );
};

export default LanguageToggle;