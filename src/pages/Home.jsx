import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowCross, ArrowWhite, High, Minus, Plus, Right, Solution, Perform, Techno, BlackArrow } from "../components/svg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Latest from "../components/Latest";
import Faq from "../components/Faq";
import Product_techno from "../components/Product_techno";



export default function Home() {
    const [activeTab, setActiveTab] = useState("Longeva");
    const [activeImage, setActiveImage] = useState(
        "/assets/img/about/about_img.png"
    );

    // Techno Section ================
    const technoData = [
        {
            id: 1,
            icon: <High />,
            title: "High Efficiency",
            description: "Optimize treatment while cutting costs and resources."
        },
        {
            id: 2,
            icon: <Solution />,
            title: "Sustainable Solutions",
            description: "Minimizes environmental impact and supports water sustainability."
        },
        {
            id: 3,
            icon: <Perform />,
            title: "Reliable Performance",
            description: "Reliable results in municipal, industrial, and commercial water treatment."
        },
        {
            id: 1,
            icon: <Techno />,
            title: "Advanced Technology",
            description: "Innovations solving today's toughest water treatment challenges."
        },
    ];

    return (
        <>
            <Header />

            {/* ========= Hero-section ======= */}
            <section className="hero_sec">

                <video
                    className="w-100 object-fit-cover d-block"
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="/assets/img/home/home-video.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="container">
                    <div className="hero_content text-center d-flex flex-column align-items-center justify-content-center g-4 h-100">
                        <h1 className="main-title text-white mb-4">Transforming Water Challenges
                            into Sustainable Solution</h1>
                        <p className="text-white mb-4 fs-18">Deploy large-scale hashrate instantly. Secure, compliant, and high-performance mining solutions for institutions.</p>

                        <div className="btn-group">
                            <Link to="/" className="primary-btn">
                                <div className="btn-content">
                                    <span>Get Started</span>
                                    <Right />
                                </div>
                            </Link>
                            <Link to="/" className="secondary-btn">
                                <div className="btn-content">
                                    <span>Request Demo</span>

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
            </section>

            {/* ========== Card section =========== */}
            <section className="card-sec pad_side">
                <div className="row align-items-stretch">

                    <div className="col-lg-3 col-sm-6 col-12 custom-col">
                        <div className="card-content text-center h-100">
                            <div className="d-flex align-items-center justify-content-center mb-4 gap-2">
                                <h2 className="mb-0">45+</h2>
                                <span className="mb-0">
                                    Countries <br />Served
                                </span>
                            </div>

                            <p className="mb-0 fs-18">
                                Trusted by clients across global markets.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12 custom-col">
                        <div className="card-content text-center">
                            <div className="d-flex align-items-center mb-4 gap-2">
                                <h2 className="mb-0">100+</h2>
                                <span className="mb-0">Treatment  <br />Technologies</span>
                            </div>
                            <p className="mb-0 fs-18">Advanced solutions for diverse water challenges.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12 custom-col">
                        <div className="card-content text-center">
                            <div className="d-flex align-items-center mb-4 gap-2">
                                <h2 className="mb-0">1+</h2>
                                <span className="mb-0">Successful  <br />Projects</span>
                            </div>
                            <p className="mb-0 fs-18">Proven performance across industries worldwide.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12 custom-col">
                        <div className="card-content text-center">
                            <div className="d-flex align-items-center mb-4 gap-2">
                                <h2 className="mb-0">25+</h2>
                                <span className="mb-0 fs-18">Years  <br />Experience</span>
                            </div>
                            <p className="mb-0">Engineering smarter water treatment solutions.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ========== About Section ========= */}
            <section className="about-sec top_100 overflow-x-hidden">
                <div className="about-content">
                    <span className="com-span">ABOUT WATCH WATER <ArrowCross /></span>
                    <h2 className="sub-title mb-0">Pioneering Water Treatment Innovation Worldwide</h2>
                    <p className="mb-0 fs-18">For over two decades, Watch Water has been developing advanced technologies that help industries and
                        municipalities achieve cleaner, safer, and more sustainable water management.</p>
                </div>

                <div className="row align-items-center justify-content-center about_faq"
                    style={{ border: "1px solid var(--bg-light)" }}
                >
                    <div className="col-lg-6 col-12">
                        <div className="text-start">
                            <img src={activeImage}
                                className="img-fluid w-100"
                                alt="About Watch Water" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">

                        <div id="ques" className="accordion accordion-flush mb-0 mt-3 mt-lg-0 p-0 p-xl-3 p-xxl-5"
                        >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading_ques_1">
                                    <button
                                        className="accordion-button px-0 py-xl-4 collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse_ques_1"
                                        aria-expanded="false"
                                        aria-controls="collapse_ques_1"
                                    >
                                        <span className="fs-22">Who We Are</span>

                                        <span className="faq-icon ms-auto">
                                            {/* Plus Icon */}
                                            <Plus />

                                            {/* Minus Icon */}
                                            <Minus />
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapse_ques_1"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="heading_ques_1"
                                    data-bs-parent="#ques"
                                >
                                    <div className="accordion-body px-0">
                                        <p className="py-0 fs-18">
                                            Watch Water is a global water treatment technology company specializing in filtration media, adsorption solutions, oxidation technologies, and sustainable water treatment systems. Our mission is to solve complex water challenges through innovation and scientific excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading_ques_2">
                                    <button
                                        className="accordion-button px-0 py-3 collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse_ques_2"
                                        aria-expanded="false"
                                        aria-controls="collapse_ques_2"
                                    >
                                        <span className="fs-22">Our Innovation & Research</span>

                                        <span className="faq-icon ms-auto">
                                            {/* Plus Icon */}
                                            <Plus />

                                            {/* Minus Icon */}
                                            <Minus />
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapse_ques_2"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="heading_ques_2"
                                    data-bs-parent="#ques"
                                >
                                    <div className="accordion-body px-0">
                                        <p className="py-0 fs-18">
                                            Research and development are at the heart of everything we do. Our laboratories continuously develop and improve treatment technologies designed to address emerging contaminants, improve operational efficiency, and support environmental sustainability.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading_ques_1">
                                    <button
                                        className="accordion-button px-0 py-3 collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse_ques_3"
                                        aria-expanded="false"
                                        aria-controls="collapse_ques_3"
                                    >
                                        <span className="fs-22">Global Presence & Expertise</span>

                                        <span className="faq-icon ms-auto">
                                            {/* Plus Icon */}
                                            <Plus />

                                            {/* Minus Icon */}
                                            <Minus />
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapse_ques_3"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="heading_ques_3"
                                    data-bs-parent="#ques"
                                >
                                    <div className="accordion-body px-0">
                                        <p className="py-0 fs-18">
                                            With solutions deployed across more than 45 countries, Watch Water supports municipalities, industries, and engineering partners worldwide through a strong network of experts, distributors, and technical specialists.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading_ques_1">
                                    <button
                                        className="accordion-button px-0 py-4 collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse_ques_4"
                                        aria-expanded="false"
                                        aria-controls="collapse_ques_4"
                                    >
                                        <span className="fs-22">Our Commitment to Sustainability</span>

                                        <span className="faq-icon ms-auto">
                                            {/* Plus Icon */}
                                            <Plus />

                                            {/* Minus Icon */}
                                            <Minus />
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapse_ques_4"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="heading_ques_4"
                                    data-bs-parent="#ques"
                                >
                                    <div className="accordion-body px-0">
                                        <p className="py-0 fs-18">
                                            We believe access to clean water is essential for a sustainable future. Our technologies are designed to reduce chemical consumption, improve water reuse, conserve resources, and help organizations meet environmental goals.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* =========== Product section ========= */}
            <Product_techno />

            {/* =========== Product section ========= */}
            <section className="innovation-sec pad_top">
                <video
                    className="w-100 object-fit-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="/assets/img/home/water_video.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="innovation-content text-center d-flex flex-column align-items-center justify-content-center h-100">
                    <h1 className="main-title mb-4" style={{ color: "var(--black)" }}>Discover the Stories Behind Water Innovation</h1>
                    <p className="mb-4" style={{ color: "var(--black)" }}>Browse technical posters highlighting innovative treatment technologies, industry insights, and real-world solutions for complex water challenges.</p>


                    <Link to="/" className="secondary-btn">
                        <div className="btn-content">
                            <span>Browse Poster Library</span>

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
            </section>

            {/* ========== Techno Section ========= */}
            <section className="techno-sec pad_min overflow-x-hidden">
                <div className="about-content mb-5">
                    <span className="com-span">Why Our Technologies Matter </span>
                    <h2 className="sub-title mb-0">Innovative Technologies. Sustainable Water Solutions.</h2>
                    <p className="mb-0 fs-18">Discover the key advantages that make Watch Water technologies a trusted
                        choice for water treatment professionals worldwide.</p>
                </div>

                <div className="row g-4 justify-content-center">
                    {technoData.map((item, index) => (
                        <div className="col-xxl-3 col-xl-4 col-sm-6 col-12" key={index}>
                            <div className="techno-content d-flex flex-column align-items-center gap-5 py-4 justify-content-center">
                                <div>
                                    {item.icon}
                                </div>

                                <div className="techno-div d-flex flex-column justify-content-center align-items-center">
                                    <h2 className="text-center mb-3">
                                        {item.title}
                                    </h2>

                                    <p className="mb-0 text-center fs-22">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========= Latest Section =========== */}
            <Latest />

            {/* ========== Faq Section ============ */}
            <Faq />

            {/* ======= Pre-footer Section ======== */}
            <section className="pre_footer pad_min">
                <div className="pre_footer_div">
                    <div className="row align-items-end justify-content-center g-4">
                        <div className="col-lg-8 col-12">
                            <h2 className="brand-text mb-4">Stay Ahead <br />of <span>Water Innovation</span></h2>
                            <p className="mb-0 text-white fs-18">Subscribe to receive the latest insights, technology updates, industry trends, and water treatment innovations directly to your inbox.</p>
                        </div>

                        <div className="col-lg-4 col-12">
                            <label className="text-white mb-3">Email</label>
                            <div className="row align-items-center justify-content-center g-3 mb-3 mb-sm-0">
                                <div className="col-sm-8 col-12">
                                    <input type="text" placeholder="Type your email address here" className="w-100 bg-transparent" />
                                </div>
                                <div className="col-sm-4 col-12">
                                    <button className="btn get_btn rounded-0 text-uppercase px-2 py-3 mt-0 d-flex align-items-center gap-2">Subscribe <svg
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
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =========== Footer ============== */}
            <Footer />

        </>
    )
}