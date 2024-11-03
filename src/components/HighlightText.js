import React from 'react';

export const HighlightText = ({
    children,
    className = "",
    bgColor = "bg-emerald-100",
    textColor = "text-emerald-700",
    darkBgColor = "dark:bg-emerald-700/[0.2]",
    darkTextColor = "dark:text-emerald-500",
}) => {
    return (
        <span
            className={`font-bold ${bgColor} ${textColor} ${darkBgColor} ${darkTextColor} px-1 py-0.5 ${className}`}
        >
            {children}
        </span>
    );
};
