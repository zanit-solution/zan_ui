import React from 'react';

interface AvatarProps {
    src: string;
    alt: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
    isActive?: boolean;
}

const sizeClasses = {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
    xxl: "w-32 h-32",
};

const borderRadius = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
};

const Avatar= ({ src, alt, size = "md", rounded = "full" ,isActive = false }) => {
    return (
        <div className="relative inline-block">
            <img
                src={src}
                alt={alt}
                className={`object-cover ${sizeClasses[size]} ${borderRadius[rounded]}`}
            />
            {isActive && (
                <span className="absolute top-0 right-0 block h-3 w-3 md:h-4 md:w-4 bg-green-500 rounded-full ring-2 ring-white"></span>
            )}
        </div>
    );
};

export default Avatar;
