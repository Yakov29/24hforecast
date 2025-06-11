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

            const tempByHour = {};
            data.list.forEach(item => {
                const hour = new Date(item.dt * 1000).getHours();
                tempByHour[hour] = item.main.temp;
            });

            const labels = [];
            const temperatures = [];

            for (let hour = 0; hour < 24; hour++) {
                labels.push(`${hour}:00`);
                if (tempByHour.hasOwnProperty(hour)) {
                    temperatures.push(tempByHour[hour]);
                } else {
                    temperatures.push(temperatures.length ? temperatures[temperatures.length - 1] : null);
                }
            }

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
                        spanGaps: true,
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
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            position: 'top',
                            ticks: {
                                color: '#000',
                                maxRotation: 0,
                                minRotation: 0,
                            },
                            grid: {
                                color: '#00000022',
                                drawOnChartArea: true,
                            },
                        },
                        y: {
                            beginAtZero: false,
                            ticks: {
                                color: '#000',
                            },
                            grid: {
                                color: '#00000022',
                                drawOnChartArea: true,
                            },
                        },
                    },
                },
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
