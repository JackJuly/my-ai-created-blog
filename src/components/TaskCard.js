import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuoteRight, FaRegCalendarCheck } from "react-icons/fa6";

const TaskCard = () => {

    const { t, i18n } = useTranslation();

    const currentYear = new Date().getFullYear();
    const currentDate = new Date();
    const monthNames_en = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const monthNames_zh = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    const month = i18n.language === 'zh' ? monthNames_zh[currentDate.getMonth()] : monthNames_en[currentDate.getMonth()];
    const day = currentDate.getDate();

    const startOfYear = new Date(currentYear, 0, 1);
    const dayOfYear = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

    // 判断是否是闰年
    const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;
    const totalDaysInYear = isLeapYear ? 366 : 365;

    // 计算百分比
    const progressPercentage = (dayOfYear / totalDaysInYear) * 100;

    let specialMessage = "Happy Coding ☀️"; // 默认显示内容


    return (
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col justify-between sm:h-full min-h-full h-40 sm:w-full w-80">

            <div className="flex items-center mb-4 font-semibold">
                <FaRegCalendarCheck className="text-lg mr-2" />
                <span>{t('date_format', { month, day })}</span>
            </div>

            {/* 代码图标和标题 */}
            <div className="hidden sm:block flex-col items-center mb-4 ">
                <FaQuoteRight className="mr-2" />

                <h2 className="pl-6 text-2xl font-bold">{specialMessage}</h2>

            </div>
            <div className="flex-row">
                <div className="flex items-center mb-2 mt-8">

                    <span className="text-xl font-bold">{currentYear}{t('home_progress')}</span>
                </div>


                <div className="flex items-center">
                    <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden mr-2">
                        <div className="h-full bg-blue1" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <span className="font-semibold">{progressPercentage.toFixed(0)}%</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;