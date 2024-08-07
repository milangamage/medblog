'use client';

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    handleClick?: () => void;
    isSubmitting?: boolean; // New prop
};

export default function Button({
    type,
    title,
    variant,
    handleClick,
    isSubmitting = false,
}: ButtonProps) {
    const buttonVariant = isSubmitting
        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
        : variant;

    return (
        <button
            className={`rounded-md lg:rounded-lg cursor-pointer ${buttonVariant}`}
            type={type}
            onClick={handleClick}
            disabled={isSubmitting}
        >
            <span className="cursor-pointer text-sm lg:text-base">{title}</span>
        </button>
    );
}
