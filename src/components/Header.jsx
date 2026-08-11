import React, { useState, useEffect, useRef } from "react";
import MegaMenu from "./Megamenu";
import Webmenu from "./Webmenu";
import megaMenuData from "../config/megamenu";
import ApplicationData from "../config/application";
import WebsiteData from "../config/website";
import { Droptoggle, Right,  } from "./svg";

export default function Header() {
    const [language, setLanguage] = useState("ENG");
    const [openMenu, setOpenMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timer = useRef();

    // ================= DROPDOWN TOGGLE =================
    const toggleDropdown = (menu) => {
        clearTimeout(timer.current);

        setOpenMenu((prev) => {
            if (prev === menu) {
                return null;
            }

            return menu;
        });
    };

    // ================= CLOSE DROPDOWN =================
    const closeDropdown = () => {
        timer.current = setTimeout(() => {
            setOpenMenu(null);
        }, 200);
    };

    // ================= CLEANUP =================
    useEffect(() => {
        return () => clearTimeout(timer.current);
    }, []);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-custom bg-body-tertiary">
                    <div className="container-fluid">

                        {/* ================= LOGO ================= */}
                        <a className="navbar-brand" href="#">
                            <img
                                src="/assets/img/logo/logo.png"
                                alt="Logo"
                            />
                        </a>

                        {/* ================= MOBILE TOGGLE ================= */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
                            id="navbarSupportedContent"
                        >

                            {/* ================= LEFT NAVIGATION ================= */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {/* ================= HOME ================= */}
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-decoration-underline"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>


                                {/* =====================================================
                                    OUR PRODUCT
                                ====================================================== */}
                                <li
                                    className="nav-item mega-dropdown"
                                    onMouseLeave={closeDropdown}
                                >
                                    <a
                                        href="#"
                                        className="nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleDropdown("product");
                                        }}
                                    >
                                        <span>Our Product</span>

                                        <svg
                                            className={`nav-arrow ${openMenu === "product"
                                                ? "rotate"
                                                : ""
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                        >
                                            <path
                                                d="M0.53125 0.530273L4.53125 4.53027L8.53125 0.530273"
                                                stroke="#222931"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </a>

                                    <div
                                        className={`mega-menu product-mega-menu ${openMenu === "product"
                                            ? "show"
                                            : ""
                                            }`}
                                    >
                                        <MegaMenu data={megaMenuData} />
                                    </div>
                                </li>


                                {/* =====================================================
                                    APPLICATIONS
                                ====================================================== */}
                                <li
                                    className="nav-item mega-dropdown"
                                    onMouseLeave={closeDropdown}
                                >
                                    <a
                                        href="#"
                                        className="nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleDropdown("applications");
                                        }}
                                    >
                                        <span>Applications</span>

                                        <svg
                                            className={`nav-arrow ${openMenu === "applications"
                                                ? "rotate"
                                                : ""
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                        >
                                            <path
                                                d="M0.53125 0.530273L4.53125 4.53027L8.53125 0.530273"
                                                stroke="#222931"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </a>

                                    <div
                                        className={`mega-menu application-mega-menu ${openMenu === "applications"
                                            ? "show"
                                            : ""
                                            }`}
                                    >
                                        <MegaMenu data={ApplicationData} />
                                    </div>
                                </li>


                                {/* =====================================================
                                    OUR WEBSITES
                                ====================================================== */}
                                <li
                                    className="nav-item mega-dropdown"
                                    onMouseLeave={closeDropdown}
                                >
                                    <a
                                        href="#"
                                        className="nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleDropdown("websites");
                                        }}
                                    >
                                        <span>Our Websites</span>

                                        <svg
                                            className={`nav-arrow ${openMenu === "websites"
                                                ? "rotate"
                                                : ""
                                                }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                        >
                                            <path
                                                d="M0.53125 0.530273L4.53125 4.53027L8.53125 0.530273"
                                                stroke="#222931"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </a>

                                    <div
                                        className={`mega-menu websites-mega-menu ${openMenu === "websites"
                                            ? "show"
                                            : ""
                                            }`}
                                    >
                                        <Webmenu />
                                    </div>
                                </li>


                                {/* ================= POSTER LIBRARY ================= */}
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Poster Library
                                    </a>
                                </li>


                                {/* ================= NEWS ================= */}
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#"
                                    >
                                        News
                                    </a>
                                </li>


                                {/* ================= DISTRIBUTORSHIP ================= */}
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Distributorship
                                    </a>
                                </li>


                                {/* ================= CONTACT US ================= */}
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Contact Us
                                    </a>
                                </li>

                            </ul>


                            {/* =====================================================
                                RIGHT SIDE
                            ====================================================== */}
                            <div className="d-flex align-items-center ms-auto header-right">

                                {/* ================= LANGUAGE ================= */}

                                <div className="language-dropdown">
                                    <button
                                        className="language-btn"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {/* Search Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                cx="10.5"
                                                cy="10.5"
                                                r="7.5"
                                                stroke="#222931"
                                                strokeWidth="1.2"
                                            />
                                            <path
                                                d="M16 16L20.5 20.5"
                                                stroke="#222931"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                            />
                                        </svg>

                                        <div className="select-menu">
                                            <span className="selected-language">
                                                {language}
                                            </span>

                                            <Droptoggle />
                                        </div>
                                    </button>

                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => setLanguage("ENG")}
                                            >
                                                ENG
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => setLanguage("FR")}
                                            >
                                                FR
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => setLanguage("GER")}
                                            >
                                                GER
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                {/* ================= CTA BUTTON ================= */}
                                <div className="d-flex align-items-center gap-2">
                                    <a
                                        href="#"
                                        className="consult-btn "
                                    >
                                        Request Consultation

                                        <Right />
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}