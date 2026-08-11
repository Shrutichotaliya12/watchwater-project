import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Insta, Link, Twiter, } from "../components/svg";


export default function Footer() {
    return (
        <>
            <footer className="footer position-relative mb-0">
                <video
                    className="w-100 object-fit-cover d-block"
                    autoPlay
                    muted
                    loop
                >
                    <source
                        src="/assets/img/home/footer.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="footer_content text-start text-white pad_min">
                    <div className="up_footer d-flex flex-column justify-content-between">
                        <div className="row align-items-start g-4 pt-5">
                            <div className="col-lg-3">
                                <img src="/assets/img/logo/footer-logo.png" className="footer_logo" />
                                <p className="text-start mt-4 mb-0">Innovative water treatment technologies designed to enhance water quality, sustainability, and performance globally.</p>
                            </div>
                            <div className="col-lg-9">
                                <div className="row gy-4">
                                    <div className="col-lg-3 col-sm-6 col-6 text-start text-lg-start">
                                        <h6 className="mb-4">Solutions</h6>
                                        <ul className="ps-0 ">
                                            <li><a className="text-decoration-none text-white" href="#">Drinking Water Treatment</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Wastewater Treatment</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">PFAS Removal</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Arsenic Removal</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Heavy Metal Removal</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Scale Prevention</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Water Reuse</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 col-6 text-start text-lg-start">
                                        <h6 className="mb-4">Products</h6>
                                        <ul className="ps-0 ">
                                            <li><a className="text-decoration-none text-white" href="#">Longeva™</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">FilterSorb®</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Filtration Media</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Adsorption Media</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Instant Chemicals</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Oxy Treatment</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Water Treatment Systems</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 col-6 text-start text-lg-start">
                                        <h6 className="mb-4">Resources</h6>
                                        <ul className="ps-0 ">
                                            <li><a className="text-decoration-none text-white" href="#">Technical Data Sheets</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Product Catalogs</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Poster Library</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Articles & Insights</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Case Studies</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Certifications</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">FAQ</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 col-6 text-start text-lg-start">
                                        <h6 className="mb-4">Company</h6>
                                        <ul className="ps-0 ">
                                            <li><a className="text-decoration-none text-white" href="#">About Us</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Research & Innovation</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Sustainability</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Global Network</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Careers</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">News & Events</a></li>
                                            <li><a className="text-decoration-none text-white" href="#">Contact Us</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="social_footer d-block align-items-center d-sm-flex justify-content-start gap-5 mt-lg-0 mt-4">
                            <div>
                                <h6 className="mt-4 mt-sm-0">Contact Us</h6>
                                <div className="d-block align-items-center d-sm-flex justify-content-start gap-3 contact-text">
                                    <a
                                        href="#"
                                        className="text-white text-decoration-none"
                                    >
                                        +49 (0) 621 87951-0
                                    </a>

                                    <a
                                        href="mailto:info@watchwater.com"
                                        className="text-white text-decoration-none mail-link"
                                    >
                                        info@watchwater.com
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h6 className="mt-4 mt-sm-0">Follow Us</h6>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                    <Facebook />

                                    <Link />

                                    <Insta />

                                    <Twiter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="low_footer py-3">
                    <div className="row d-flex flex-column flex-md-row align-items-center align-items-md-center justify-content-between">
                        <div className="col-lg-6 col-12">
                            <p className="w-100 mb-0 text-center text-lg-start">Copyright © 2026 Watch Water®. All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-end  mt-2 mt-lg-0 gap-3">
                                <a className="text-secodary" href="#">Cookie settings</a>
                                <a className="text-secodary" href="#">Privacy Policy </a>
                                <a className="text-secodary" href="#">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}