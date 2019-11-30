import React from "react"

function Arrow({ direction }) {
    return (
        <svg
            className={`arrow ${direction}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.36 53.89"
        >
            <title>Previous</title>
            <polygon
                className="cls-1"
                points="1.41 53.89 0 52.48 25.53 26.95 0 1.41 1.41 0 28.36 26.95 1.41 53.89"
            />
        </svg>
    );
}

export default Arrow;
