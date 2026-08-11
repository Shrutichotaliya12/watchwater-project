import React, { useState } from "react";
import { ArrowWhite, ArrowCross } from "../components/svg";

const productData = {
    Longeva: {
        title: "Longeva",
        sup: "TM",
        description:
            "Engineered for extended service life, providing reliable treatment performance while reducing replacement frequency and operational costs.",
        image: "/assets/img/about/product_img.png",
        items: [
            "Longeva™ Media",
            "Longeva™ Filter",
            "Longeva™ Water",
            "Longeva™ Poster",
        ],
    },

    Filtersorb: {
        title: "Filtersorb",
        description:
            "Prevent scale formation naturally without chemicals, improving system efficiency and extending the lifespan of critical infrastructure.",
        image: "/assets/img/about/product1.png",
        items: [
            "Filtersorb SP3",
            "Filtersorb CT",
            "Longeva™ Water",
            "Longeva™ Poster",
        ],
    },

    Filtration: {
        title: "Filtration",
        description:
            "Advanced filtration media engineered to remove suspended solids, iron, manganese, and other contaminants for cleaner water.",
        image: "/assets/img/about/product2.png",
        items: [
            "Zeosorb",
            "Katalyst-Light",
            "Crystolite",
            "Filtration Poster",
        ],
    },

    Adsorption: {
        title: "Adsorption",
        description:
            "High-performance adsorption solutions designed to target and remove arsenic, PFAS, heavy metals, and emerging contaminants.",
        image: "/assets/img/about/product3.png",

        groups: [
            {
                title: "Products",
                items: [
                    "AQUARedox",
                    "OXYLOCK®",
                    "HydroSorb",
                    "Titansorb",
                    "Titansorb P",
                ],
            },
            {
                title: "Trapp Family",
                items: [
                    "Trappsorb",
                    "Carbontrapp",
                    "Corrtrapp",
                    "Bariumtrapp",
                    "Borontrapp",
                    "Acidtrapp",
                    "Scaletrapp",
                    "Microtrapp",
                    "Silicatrapp",
                    "Ferrolox",
                    "Ferrolox G",
                    "Nitrotrapp",
                ],
            },
            {
                title: "Carbons & MOF",
                items: [
                    "Catalytic Carbon",
                    "Ferrolox XG",
                    "Catalytic Carbon MG",
                    "DyeOxy & DyeSorb",
                    "Activesorb CX",
                    "VinylSorb",
                    "Activesorb 200",
                    "Titanicarbon",
                    "Activesorb AG",
                    "BisOxy-Liner",
                    "Ferrolox X",
                ],
            },
        ],
    },

    Chemicals: {
        title: "Instant Chemicals",
        description:
            "Specialized treatment chemicals formulated to deliver rapid results, enhance water quality, and support efficient treatment processes.",
        image: "/assets/img/about/product4.png",
        items: [
            "ZINCPHOS-CT",
            "Instant Oxydes",
            "BIODOS-CB",
            "iSOFT-Descaler",
            "CarbonOxy R",
            "Instant Oxydes-P",
            "Instant Pool Cover",
            "Cleaning Agent",
            "PureOxy",
            "CarboFix",
            "PoolOxy",
            "Carbolic",
            "Instant i-SOFT",
        ],
    },

    Oxy: {
        title: "Oxy Treatment",
        description:
            "Innovative oxidation technologies that effectively break down contaminants, improve water quality, and optimize treatment performance.",
        image: "/assets/img/about/product5.png",
        items: [
            "Smart PO₂",
            "Ferric-SG",
            "Oxysorb",
            "Quantum XSW",
            "LagoonOxy",
            "SoilOxy",
            "RedOxy Treatment",
            "LeachOxy",
            "SolarOxy-3C",
            "RedOxy-3C",
            "AlgaeOxy",
            "Deodor-Oxy",
            "RedOxy-4C",
            "BlackOxy",
            "Virol-Oxy",
            "OxyOne",
            "White-Oxy",
            "Legio-oxy",
            "Rapid-oxy",
            "GreenOxy",
            "In-Pipe Clarifier",
        ],
    },

    System: {
        title: "System",
        description:
            "Integrated water treatment systems combining advanced technologies to deliver reliable, efficient, and sustainable water management solutions.",
        image: "/assets/img/about/product6.png",

        groups: [
            {
                title: "POU System",
                items: [
                    "Special Filter",
                    "My Magnesium Filter",
                    "Carbonblock-TS3",
                    "Special Shower Filter",
                    "Special-CC",
                    "Scale-Tech",
                    "Scaletrapp",
                    "My Titan Filter",
                ],
            },
            {
                title: "POE System",
                items: [
                    "Softnor",
                    "Nitro-Soft",
                    "Quick Exchange System",
                    "Salt-Free Water Filter",
                    "Watch UF 2500",
                    "In Tank Treatment",
                ],
            },
        ],
    },
};

const tabs = [
    "Longeva",
    "Filtersorb",
    "Filtration",
    "Adsorption",
    "Chemicals",
    "Oxy",
    "System",
];

export default function Product_techno() {
    const [activeTab, setActiveTab] = useState("Longeva");

    // Direction:
    // "prev" = content LEFT -> RIGHT
    // "next" = content RIGHT -> LEFT
    const [slideDirection, setSlideDirection] = useState("next");

    const activeIndex = tabs.indexOf(activeTab);
    const currentProduct = productData[activeTab];

    /* =========================================
       PREVIOUS BUTTON
    ========================================= */
    const goPrevious = () => {
        const previousIndex =
            activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;

        // Previous click = move towards RIGHT
        setSlideDirection("prev");

        setActiveTab(tabs[previousIndex]);
    };

    /* =========================================
       NEXT BUTTON
    ========================================= */
    const goNext = () => {
        const nextIndex =
            activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;

        // Next click = move towards LEFT
        setSlideDirection("next");

        setActiveTab(tabs[nextIndex]);
    };

    /* =========================================
       TAB CLICK
    ========================================= */
    const handleTabClick = (tab) => {
        const clickedIndex = tabs.indexOf(tab);

        // Same tab click
        if (clickedIndex === activeIndex) {
            return;
        }

        /*
            Example:

            Longeva -> System
            clickedIndex > activeIndex
            => next
            => content RIGHT -> LEFT

            System -> Longeva
            clickedIndex < activeIndex
            => prev
            => content LEFT -> RIGHT
        */
        if (clickedIndex > activeIndex) {
            setSlideDirection("next");
        } else {
            setSlideDirection("prev");
        }

        setActiveTab(tab);
    };

    return (
        <section className="product_sec pad_min">

            {/* ================= HEADER ================= */}

            <div className="about-content mb-5">

                <span className="com-span">
                    our Products <ArrowWhite />
                </span>

                <h2 className="sub-title mb-0">
                    Innovative Technologies. Sustainable Water Solutions.
                </h2>

                <p className="mb-0 fs-18">
                    Developing advanced treatment solutions for a cleaner and
                    more sustainable future.
                </p>

            </div>


            {/* ================= PRODUCT BOX ================= */}

            <div className="product_wrapper">

                {/* ================= TABS ================= */}

                <div className="product_tabs">

                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            className={`product_tab ${
                                activeTab === tab ? "active" : ""
                            }`}
                            onClick={() => handleTabClick(tab)}
                        >

                            {tab === "Longeva" ? (
                                <>
                                    Longeva<sup>TM</sup>
                                </>
                            ) : tab === "Chemicals" ? (
                                "Instant Chemicals"
                            ) : tab === "Oxy" ? (
                                "Oxy Treatment"
                            ) : (
                                tab
                            )}

                        </button>
                    ))}

                </div>


                {/* ================= CONTENT ================= */}

                <div
                    key={activeTab}
                    className={`product_detail ${
                        slideDirection === "prev"
                            ? "slide-prev"
                            : "slide-next"
                    }`}
                >

                    {/* ================= LEFT CONTENT ================= */}

                    <div className="product_detail_content">

                        <div className="product_detail_top">

                            {/* PRODUCT TITLE + DESCRIPTION */}

                            <div className="product-group">

                                <h2 className="mb-2">

                                    {currentProduct.title}

                                    {currentProduct.sup && (
                                        <sup>
                                            {currentProduct.sup}
                                        </sup>
                                    )}

                                </h2>

                                <p className="product_text mb-0">
                                    {currentProduct.description}
                                </p>

                            </div>


                            {/* ================= NORMAL ITEMS ================= */}

                            {currentProduct.items && (
                                <div className="product_items">

                                    {currentProduct.items.map(
                                        (item, index) => (
                                            <div
                                                className="product_item"
                                                key={index}
                                            >

                                                <span>
                                                    {item}
                                                </span>

                                                <ArrowCross />

                                            </div>
                                        )
                                    )}

                                </div>
                            )}


                            {/* ================= GROUP ITEMS ================= */}

                            {currentProduct.groups && (
                                <div className={`product_groups ${activeTab === 'System' ? 'system_groups' : ''}`}>

                                    {currentProduct.groups.map(
                                        (group, groupIndex) => (
                                            <div
                                                className="product_group"
                                                key={groupIndex}
                                            >

                                                <h6>
                                                    {group.title}
                                                </h6>

                                                <div className="group_items">

                                                    {group.items.map(
                                                        (
                                                            item,
                                                            index
                                                        ) => (
                                                            <div
                                                                className="product_item group_item"
                                                                key={index}
                                                            >
                                                                <span>
                                                                    {item}
                                                                </span>
                                                                <ArrowCross />
                                                            </div>
                                                        )
                                                    )}

                                                </div>

                                            </div>
                                        )
                                    )}

                                </div>
                            )}

                        </div>


                        {/* ================= ARROWS ================= */}

                        <div className="product_navigation">

                            {/* PREVIOUS */}

                            <button
                                type="button"
                                onClick={goPrevious}
                                aria-label="Previous product"
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="11"
                                    viewBox="0 0 14 11"
                                    fill="none"
                                >

                                    <path
                                        d="M5.6302 9.66871L1.06098 5.0995L5.6302 0.530273M1.06098 5.0995H13.8926"
                                        stroke="white"
                                        strokeWidth="1.5"
                                    />

                                </svg>

                            </button>


                            {/* NEXT */}

                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="Next product"
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="11"
                                    viewBox="0 0 14 11"
                                    fill="none"
                                >

                                    <path
                                        d="M8.26238 9.66871L12.8316 5.0995L8.26238 0.530273M12.8316 5.0995H0"
                                        stroke="white"
                                        strokeWidth="1.5"
                                    />

                                </svg>

                            </button>

                        </div>

                    </div>


                    {/* ================= IMAGE ================= */}

                    <div className="product_detail_image">

                        <img
                            src={currentProduct.image}
                            alt={currentProduct.title}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}