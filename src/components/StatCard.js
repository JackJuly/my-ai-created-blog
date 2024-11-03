import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useTranslation } from 'react-i18next';

const StatCard = () => {

    const { t } = useTranslation();

    const data = {
        labels: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
        datasets: [
            {
                data: [50, 55, 53, 60, 70, 65, 75, 80, 90, 85],
                borderColor: '#82d7f7',
                fill: true,

                backgroundColor: 'rgba(130, 215, 247, 0.1)',
                tension: 0.4,
            },
        ],
    };


    return (
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between h-40 sm:w-full w-80">

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold mb-1">{t('stat_visitors')}: &nbsp;&nbsp;<span className="text-2xl font-bold m-0">14k</span> </h2> {/* 将 mb-2 改为 mb-1 */}

                    <p className="text-gray-500 mb-1">{t('stat_days')}</p>
                </div>
                <div className="bg-blue1 text-white rounded-full px-2 py-1 text-sm font-semibold">
                    +25%
                </div>
            </div>

            {/* 趋势图 */}
            <div className="mt-4 flex-1 h-24" style={{ position: 'relative', paddingBottom: '40px' }}>
                <Line
                    data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                        },
                        scales: {
                            x: { display: false },
                            y: { display: false },
                        },
                        elements: {
                            point: { radius: 0 },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default StatCard;