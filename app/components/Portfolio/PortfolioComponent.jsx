"use client";
import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import portfolio from "../../data/portfolio.json";

const Portfolio = () => {
    const sliderRef = useRef(null);
    const activeRef = useRef(null);
    const countRef = useRef(null);
    const previousRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            const keenSlider = new KeenSlider(
                sliderRef.current,
                {
                    loop: true,
                    defaultAnimation: {
                        duration: 750,
                    },
                    slides: {
                        origin: "center",
                        perView: 1.3,
                        spacing: 16,
                    },
                    breakpoints: {
                        "(min-width: 640px)": {
                            slides: {
                                origin: "center",
                                perView: 1.5,
                                spacing: 16,
                            },
                        },
                        "(min-width: 768px)": {
                            slides: {
                                origin: "center",
                                perView: 1.75,
                                spacing: 16,
                            },
                        },
                        "(min-width: 1024px)": {
                            slides: {
                                origin: "center",
                                perView: 3,
                                spacing: 16,
                            },
                        },
                    },
                    created(slider) {
                        slider.slides[slider.track.details.rel].classList.remove(
                            "opacity-40"
                        );
                        if (activeRef.current) {
                            activeRef.current.innerText = slider.track.details.rel + 1;
                        }
                        if (countRef.current) {
                            countRef.current.innerText = slider.slides.length;
                        }
                    },
                    slideChanged(slider) {
                        slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
                        slider.slides[slider.track.details.rel].classList.remove(
                            "opacity-40"
                        );
                        if (activeRef.current) {
                            activeRef.current.innerText = slider.track.details.rel + 1;
                        }
                    },
                },
                []
            );

            if (previousRef.current) {
                previousRef.current.addEventListener("click", () => keenSlider.prev());
            }
            if (nextRef.current) {
                nextRef.current.addEventListener("click", () => keenSlider.next());
            }
        }
    }, []);

    return (
        <section
            id="portfolio"
            className="bg-white flex justify-center items-center w-full"
        >
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-xl font-bold tracking-tight text-sky-700 sm:text-3xl max-w-xs mx-auto">
                    Algunos de los proyectos que he llevado a cabo
                </h2>

                <div className="mt-8">
                    <div ref={sliderRef} className="keen-slider">
                        {portfolio.map((item, index) => (
                            <div
                                key={index}
                                className="keen-slider__slide opacity-40 transition-opacity duration-500"
                            >
                                <a href={item.link} className="block" target="_blank">
                                    <img
                                        alt={item.short}
                                        src={item.image}
                                        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                                    />

                                    <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                                        <strong className="font-medium text-sky-800">
                                            {item.short}
                                        </strong>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <button
                            aria-label="Previous slide"
                            ref={previousRef}
                            className="text-gray-600 transition-colors hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>

                        <p className="w-16 text-center text-sm text-gray-700">
                            <span ref={activeRef}></span> / <span ref={countRef}></span>
                        </p>

                        <button
                            aria-label="Next slide"
                            ref={nextRef}
                            className="text-gray-600 transition-colors hover:text-gray-900"
                        >
                            <svg
                                className="size-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;