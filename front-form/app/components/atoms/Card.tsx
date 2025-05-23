import React, { HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

interface CardHighlightedTextProps extends HTMLAttributes<HTMLDivElement> {
    text: string
}

interface CardQuotesProps extends HTMLAttributes<HTMLImageElement> {
    size?: number;
}

const CardRoot: React.FC<CardProps> = ({ children, className, ...rest }) => {
    return (
        <div className={`border rounded-2xl  border-purple-dull cursor-pointer hover:bg-purple-dull-10 ${className}`} {...rest}>
            {children}
        </div>
    );
};

const CardTitle = ({ children, className, ...rest }: HTMLAttributes<HTMLHeadingElement>) => {
    return <h1 className={`text-base ${className}`} {...rest}>{children}</h1>
}

const CardContent = ({ children, className = '', ...rest }: HTMLAttributes<HTMLHeadingElement>) => {
    return <h2 className={`text-base ${className}`} {...rest}>{children}</h2>
}

const CardWrapLabel = ({ children, ...rest }: HTMLAttributes<HTMLDivElement>) => {
    return <div {...rest}>{children}</div>
}

interface CardLabelProps {
    text: string;
    className?: string;
}

const CardLabel = ({ text, className = '' }: CardLabelProps) => {
    return <h3 className={className}>{text}</h3>
}

const CardImage = ({ alt, ...rest }: ImageProps) => {
    return <div>
        <Image alt={alt} {...rest} />
    </div>
}

const CardHighlightedText = ({ text, className }: CardHighlightedTextProps) => <p className={`text-xs md:text-lg text-purple-dark ${className}`}>{text}</p>

const CardQuotes = ({ size = 19 }: CardQuotesProps) => <Image src="/Quotes.svg" alt='quotes' width={size} height={size} />

export const Card = {
    Root: CardRoot,
    Title: CardTitle,
    Content: CardContent,
    WrapLabel: CardWrapLabel,
    Label: CardLabel,
    Image: CardImage,
    Highlight: CardHighlightedText,
    Quotes: CardQuotes
}