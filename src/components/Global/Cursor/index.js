// src/CustomCursor.js
import React, { useEffect, useState } from "react";
// import "./CustomCursor.css";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const handleMouseEnter = () => {
            setIsVisible(true); // Show cursor when the mouse re-enters
        };

        const handleMouseLeave = () => {
            setIsVisible(false); // Hide cursor when the mouse leaves
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                display: isVisible ? "block" : "none",
            }}
        />
    );
};

export default CustomCursor;
