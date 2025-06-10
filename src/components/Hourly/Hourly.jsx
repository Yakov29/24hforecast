import React, { useEffect, useRef } from "react";
import Container from "../Container/Container";
import { Chart } from "chart.js/auto";
import getHourlyAPI from "../../api/getHourlyAPI";

import './Hourly.css';


const Hourly = ({ city }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        getHourlyAPI(city).then((data) => {
            if (!data || !data.list) return;

            const now = new Date();
            const todayDateStr = now.toISOString().split('T')[0]; // yyyy-mm-dd сегодняшняя дата

            // Отфильтровываем все записи сегодняшнего дня (все часы 00:00 - 23:00)
            const forecastToday = data.list.filter(item => {
                const dateStr = item.dt_txt.split(' ')[0];
                return dateStr === todayDateStr;
            });

            const labels = forecastToday.map(item =>
                new Date(item.dt_txt).getHours() + ":00"
            );

            const temperatures = forecastToday.map(item => item.main.temp);

            const hourlyData = {
                labels,
                datasets: [
                    {
                        label: "Hourly Forecast",
                        data: temperatures,
                        backgroundColor: "#FFB36C",
                        borderColor: "#FFB36C",
                        borderWidth: 2,
                        tension: 0.4,
                        fill: false,
                    },
                ],
            };

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartRef.current, {
                type: 'line',
                data: hourlyData,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            position: 'top',
                            ticks: {
                                color: '#000',
                                maxRotation: 0,
                                minRotation: 0
                            },
                            grid: {
                                color: '#00000022'
                            }
                        },
                        y: {
                            beginAtZero: false,
                            ticks: {
                                color: '#000'
                            },
                            grid: {
                                color: '#00000022'
                            }
                        }
                    }
                }
            });
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [city]);



    return (
        <section className="hourly">
            <Container>
                <div className="hourly__data">
                    <canvas ref={chartRef}></canvas>
                </div>

            </Container>
        </section>
    );
};

export default Hourly;
