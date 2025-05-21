import React, { HTMLAttributes } from 'react';



const PanelRoot: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => {
    return (
        <div
            className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
            role="region"
            {...rest}
        >
            {children}
        </div>
    );
};

const PanelHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => {
    return (
        <div
            className={`border-b border-gray-200 px-4 py-3 ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
};

const PanelContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => {
    return (
        <div
            className={`px-4 py-3 ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
};

const PanelFooter: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => {
    return (
        <div
            className={`border-t border-gray-200 px-4 py-3 ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
};

export const Panel = {
    Root: PanelRoot,
    Header: PanelHeader,
    Content: PanelContent,
    Footer: PanelFooter
};
