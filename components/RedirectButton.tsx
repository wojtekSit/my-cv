"use client";
import React from 'react';

interface RedirectButtonProps {
    url: string;
    children: React.ReactNode;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ url, children }) => {
    const handleRedirect = () => {
        window.location.href = url;
    };

    return (
        <button className="btn" onClick={handleRedirect}>
            {children}
        </button>
    );
};

export default RedirectButton;
