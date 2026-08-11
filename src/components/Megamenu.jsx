import React, { useState } from "react";
import megaMenuData from "../config/megamenu";
import ApplicationData from "../config/application";

export default function MegaMenu({ data = megaMenuData }) {

    const [selectedCategory, setSelectedCategory] = useState(data[0]);

    const [selectedItem, setSelectedItem] = useState(
        data[0]?.children?.[0] || null
    );
    const [mobileStep, setMobileStep] = useState(1);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedItem(category.children?.[0] || null);
        setMobileStep(2);
    };

    const handleBackClick = () => {
        setMobileStep(1);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <div className="container">
                <div
                    className={`row align-items-stretch g-2 ${selectedCategory?.id === 1 ? "two-column-menu" : ""
                        } mega-menu-row`}
                    style={{ background: "#F8FAFB", height: "100%", overflow: "hidden" }}
                >
                    {/* Left Side */}
                    <div className="col-lg-4 h-100 col-sm-12">
                        <div className="product-div h-100">

                            <h4 className="mb-4">
                                {data === megaMenuData
                                    ? "Our Products"
                                    : "Applications"}
                            </h4>

                            <ul className="mega-scroll-list">
                                {data.map((category, index) => (
                                    <li key={index}>

                                        <button
                                            type="button"
                                            className={`nav-link-mega border-0 bg-transparent w-100 ${selectedCategory?.id === category.id
                                                ? "active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                handleCategoryClick(category)
                                            }
                                        >
                                            <span>{category.title}</span>

                                            {category.children?.length > 0 && (
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
                                            )}
                                        </button>

                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                    {/* ================= MIDDLE ================= */}

                    <div className={`col-lg-4 h-100 col-sm-12 ${mobileStep !== 2 ? 'mobile-hide' : ''}`}>

                        <div
                            className="longeva-div h-100"
                            style={{
                                background: selectedCategory?.bgColor || "#ECF0F5",
                            }}
                        >
                            <h4 className="mb-4">
                                {selectedCategory.title}
                            </h4>

                            <ul className="mega-scroll-list">
                                {selectedCategory.children.map((item, index) => (

                                    <li key={index}>

                                        <button
                                            type="button"
                                            className={`nav-link-mega border-0 bg-transparent w-100 ${selectedItem?.id === item.id
                                                ? "active"
                                                : ""
                                                }`}
                                            onClick={() => handleItemClick(item)}
                                        >

                                            <span>{item.title}</span>

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

                    {/* ================= RIGHT ================= */}
                    <div className={`col-lg-4 h-100 col-sm-12 ${mobileStep !== 2 ? 'mobile-hide' : ''}`}>
                        <div className="mega-img w-100 h-100">

                            <img
                                src={selectedItem?.image}
                                alt={selectedItem?.title}
                            />

                            <div className="mega-overlay"></div>

                            <div className="mega-img-content">
                                <h2 className="mb-3">
                                    {selectedItem?.title}
                                </h2>
                                <p style={{ marginBottom: '8px' }}>
                                    {selectedItem?.description}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}