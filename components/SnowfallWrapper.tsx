"use client";

import Snowfall from "react-snowfall";

export default function SnowfallWrapper() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 9999,
            }}
        >
            <Snowfall snowflakeCount={150} color="#ffffff" />
        </div>
    );
}
