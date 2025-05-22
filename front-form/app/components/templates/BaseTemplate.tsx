"use client"
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface BaseTemplateProps {
    children: ReactNode;
    className?: string;
    titlePage?: string;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({
    children,
    className = '',
    titlePage = ''
}) => {
    const pathname = usePathname();
    const isPathRoot = pathname === '/';
    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
            <main className={`flex flex-col gap-[32px] items-center justify-center lg:flex-row lg:gap-0 lg:max-w-fit w-full ${className}`}>
                <div className="w-full">
                    <div className='flex items-center justify-between gap-2 w-[31.25rem] '>
                        {!isPathRoot && (
                            <Link href='/' className='text-white flex items-center gap-2'>
                                <ArrowLeftIcon className='w-6 h-6' />
                                <span className='text-white hover:text-purple-500 transition-all duration-300'>Voltar</span>
                            </Link>
                        )}
                        <h1 className='text-white text-3xl'>{titlePage}</h1>
                    </div>
                </div>
                {children}
            </main >
        </div >
    );
};

export default BaseTemplate;
