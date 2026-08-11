import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Latest() {
    // Latest section ===========
    const latestNews = [
        {
            id: 1,
            image: "/assets/img/home/blog1.png",
            date: "1 Day Ago",
            title: "The Future of PFAS Removal: Advanced Solutions for Cleaner Water",
            link: "/",
        },
        {
            id: 2,
            image: "/assets/img/home/blog2.png",
            date: "1 Days Ago",
            title: "Why Water Reuse Is Essential for Sustainable Industrial Operations",
            link: "/",
        },
        {
            id: 3,
            image: "/assets/img/home/blog3.png",
            date: "1 Days Ago",
            title: "Emerging Water Treatment Technologies Shaping the Industry",
            link: "/",
        },
    ];
    return (
        <>
            <section className="Latest_sec pad_min">
                <div className="d-flex flex-column">
                    <div className="mb-5">
                        <h2 className="text-center mb-0 brand-text">The Latest</h2>
                    </div>

                    <div className="row align-items-start g-3">
                        {latestNews.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6 col-12"
                                key={index}
                            >
                                <motion.div
                                    className="latest-card overflow-hidden"
                                    whileHover="hover"
                                    initial="initial"
                                >

                                    {/* IMAGE */}
                                    <div className="latest-img overflow-hidden">
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            className="img-fluid w-100"
                                            variants={{
                                                initial: {
                                                    scale: 1,
                                                },
                                                hover: {
                                                    scale: 1.05,
                                                },
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="latest-content mt-2">
                                        <span className="latest_span">{item.date}</span>

                                        <h2 className="mt-2 mb-3">
                                            {item.title}
                                        </h2>

                                        <Link to={item.link}>
                                            <div className="latest-btn d-flex align-items-center gap-2">
                                                <span>Read More</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="11"
                                                    viewBox="0 0 14 11"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M8.26238 9.66871L12.8316 5.0995L8.26238 0.530273M12.8316 5.0995H0"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        ))}

                        <div className="d-flex align-items-center justify-content-center mt-5">
                            <Link to="/" className="btn_group">
                                <div className="View_btn d-flex align-items-center gap-2">
                                    <span>Read More</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="11"
                                        viewBox="0 0 14 11"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.26238 9.66871L12.8316 5.0995L8.26238 0.530273M12.8316 5.0995H0"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </section >
        </>
    )
}