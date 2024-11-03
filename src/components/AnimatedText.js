import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AnimatedText = ({ textKey, isEnable = true }) => {
    const { t, i18n } = useTranslation();

    const textAnimation = {
        initial: { opacity: 0, transition: { duration: 1.2 } },
        animate: { opacity: 1, transition: { duration: 1.2 } },
        exit: { opacity: 0, transition: { duration: 1.2 } },
    };

    return isEnable ? (
        <motion.span
            key={i18n.language}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textAnimation}
        >
            {t(textKey)}
        </motion.span>
    ) : (
        <span>{t(textKey)}</span>
    );
};

export default AnimatedText;