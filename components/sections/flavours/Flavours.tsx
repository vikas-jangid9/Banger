"use client";

import React from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme CSS
import IceCreamCard from "../../ui/iceCreamCard/IceCreamCad";
import styles from "./flavours.module.css";

// 1. The Data Array (Matches your image reference
const FLAVORS = [
    {
        id: 1,
        flavorName: "VANILLA",
        imageSrc: "/images/vanilla.png", // Replace with your actual paths
        statText: "CREAMY 100%",
        description: "Don't call it plain. This one's a smooth classic with main character energy.",
        theme: "white"
    },
    {
        id: 2,
        flavorName: "RED GUAVA",
        imageSrc: "/images/guava.png",
        statText: "ZING 100%",
        description: "Tropical chaos in a cup. Sweet, spicy, and unapologetically loud.",
        theme: "pink"
    },
    {
        id: 3,
        flavorName: "CHOCOLATE",
        imageSrc: "/images/chocolate.png",
        statText: "SMOOTHNESS 100%",
        description: "Dark, moody, and intense. The brooding hero of the ice cream world.",
        theme: "brown"
    },
    {
        id: 4,
        flavorName: "BUTTERSCOTCH",
        imageSrc: "/images/butterscotch.png",
        statText: "DELIGHT 100%",
        description: "Sweet, buttery, with just the right snap. Golden hour in a cone.",
        theme: "yellow"
    },
    {
        id: 5,
        flavorName: "BIG CHOCOBAR",
        imageSrc: "/images/chocobar.png",
        statText: "BLISS 100%",
        description: "Classic choco power, now supersized. It's giving bold, it's giving banger.",
        theme: "brown"
    },
    {
        id: 6,
        flavorName: "MANGO DOLLY",
        imageSrc: "/images/mango.png",
        statText: "INDULGENCE 100%",
        description: "All mango, no drama. A juicy classic you'll finish before your post uploads.",
        theme: "orange"
    },
];

export default function FlavorSlider() {
    // 2. Slider Settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 items on desktop
        slidesToScroll: 1,
        centerMode: true, // Helps centered look
        centerPadding: "40px",
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "60px", // Shows a peek of next cards on mobile
                }
            }
        ]
    };

    return (
        <section className={styles.section}>

            {/* Title Section */}
            <div className={styles.header}>
                <h2 className={styles.title}>
                    EVERY FLAVOUR, <br /> A BANGER
                </h2>
                {/* Lightning Bolt Decoration (Optional CSS visual) */}
                <div className={styles.boltDecoration}></div>
            </div>

            {/* The Slider */}
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>
                    {FLAVORS.map((flavor) => (
                        <div key={flavor.id} className={styles.slideItem}>
                            {/* We wrap the card to handle spacing/padding between slides */}
                            <IceCreamCard
                                flavorName={flavor.flavorName}
                                imageSrc={flavor.imageSrc}
                                statText={flavor.statText}
                                description={flavor.description}
                            // You can pass the 'theme' prop if you want to change card colors dynamically
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}