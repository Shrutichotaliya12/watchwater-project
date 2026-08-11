import React, { useState } from "react";
import WebsiteData from "../config/website";

export default function MegaMenu({ data = WebsiteData }) {
    const [selectedCategory, setSelectedCategory] = useState(data[0]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container">

            <div
                className="row align-items-stretch g-2 mega-menu-row"
                style={{ background: "#F8FAFB", height: "100%", overflow: "hidden" }}
            >

                {/* ================= LEFT ================= */}
                <div className="col-lg-6 h-100">
                    <div className="product-div h-100">
                        <h4 className="mb-4">
                            Our Websites
                        </h4>
                        <ul className="mega-scroll-list">
                            {data.map((category, index) => (
                                <li key={index}>
                                    <button
                                        type="button"
                                        className={`nav-link-mega border-0 bg-transparent w-100 ${
                                            selectedCategory?.id === category.id
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleCategoryClick(category)
                                        }
                                    >
                                        <span>
                                            {category.title}
                                        </span>
                                        <div className="arrow-div">
                                            <svg
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
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ================= RIGHT IMAGE ================= */}
                <div className="col-lg-6 h-100">

                    <div className="mega-img w-100 h-100">

                        <img
                            src={selectedCategory?.image}
                            alt={selectedCategory?.title || ""}
                        />

                        <div className="mega-overlay"></div>

                        <div className="mega-img-content">

                            <h2 className="mb-3">
                                {selectedCategory?.title}
                            </h2>

                            <p style={{ marginBottom: '5px' }}>
                                {selectedCategory?.description}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}