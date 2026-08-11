import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Faq() {
    // FAQ Section =====================

    const [activeIndex, setActiveIndex] = useState(2);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What industries use Watch Water solutions?",
            answer:
                "Watch Water solutions are designed for residential, commercial, industrial, and municipal water treatment applications.",
        },
        {
            question: "How do I choose the right water treatment product?",
            answer:
                "The right product depends on your water quality, contaminants, application, and treatment requirements.",
        },
        {
            question:
                "What contaminants can Watch Water technologies remove?",
            answer:
                "Our solutions are designed to address PFAS, arsenic, iron, manganese, heavy metals, suspended solids, and other challenging water contaminants.",
        },
        {
            question:
                "Are your products suitable for municipal water treatment?",
            answer:
                "Yes. Our water treatment technologies can be used for a variety of municipal and large-scale water treatment applications.",
        },
        {
            question:
                "Do you provide technical support and consultation?",
            answer:
                "Yes, our team provides technical support and consultation to help select and implement the right water treatment solution.",
        },
        {
            question: "Where are Watch Water products available?",
            answer:
                "Watch Water products are available through our network of distributors and partners.",
        },
        {
            question:
                "Can Watch Water technologies support water reuse projects?",
            answer:
                "Yes, our technologies can support water reuse and advanced water treatment projects.",
        },
        {
            question:
                "How can I request a product recommendation?",
            answer:
                "You can contact our team with your water treatment requirements and we can recommend a suitable product.",
        },
    ];

    return (
        <>
            <section className="faq_sec pad_min">
                <div className="row align-items-start g-4">
                    <div className="col-lg-6 col-12">
                        <div className="faq_content">

                            <h2 className="brand-text mb-0">
                                Frequently <br />
                                Asked Questions
                            </h2>

                            <p className="fs-18 my-lg-4 my-3">
                                Find answers to common questions about our
                                water treatment technologies, applications,
                                product selection, and technical support.
                            </p>

                            <Link to="/">
                                <div className="latest-btn d-flex align-items-center gap-2">
                                    <span>Learn More</span>

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

                    {/* RIGHT SIDE FAQ */}
                    <div className="col-lg-6 col-12">
                        <div className="faq_list">

                            {faqData.map((item, index) => (
                                <div
                                    className={`faq_item ${activeIndex === index ? "active" : ""
                                        }`}
                                    key={index}
                                >

                                    <button
                                        type="button"
                                        className="faq_question"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span>{item.question}</span>

                                        <span className="faq_arrow">
                                            {activeIndex === index ? "↑" : "↓"}
                                        </span>
                                    </button>

                                    <div className="faq_answer">
                                        <p className="fs-18">{item.answer}</p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}