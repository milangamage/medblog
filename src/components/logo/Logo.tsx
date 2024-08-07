'use client';
import Image from 'next/image';

type LogoProps = {
    height?: number;
    width?: number;
    handleClick?: () => void;
}


export default function Logo({height, width, handleClick}:LogoProps) {
    const heightClass = height ? `h-[${height}px]` : 'h-auto';
    const widthClass = width ? `w-[${width}px]` : 'w-auto';
    return (
        <header className={`${heightClass} ${widthClass} relative`}>
            <Image
                src="/blog/images/Medfuture-logo.png"
                fill={true}
                priority={true}
                alt="Logo"
                className="cursor-pointer"
                onClick={handleClick}
            />
        </header>
    );
}
