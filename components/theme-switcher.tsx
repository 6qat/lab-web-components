'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';

type ThemeSwitcherProps = {
    mode: 'toggle' | 'dropdown';
    className?: string;
};

type SunOrMoonProps = {
    className?: string;
};

const SunOrMoon = ({ className }: SunOrMoonProps) => (
    <div className={`flex flex-1 items-center justify-center`}>
        <Sun
            className={`rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${className}`}
        />
        <Moon
            className={`absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${className}`}
        />
    </div>
);

export default function ThemeSwitcher({ mode, className }: ThemeSwitcherProps) {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return mode === 'dropdown' ? (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                    <SunOrMoon className={`${className}`} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        // mode === "toggle"
        <Button
            variant='outline'
            // size="icon"
            className={`${className}`}
            onClick={() => {
                if (theme === 'light') setTheme('dark');
                else setTheme('light');
            }}
        >
            <SunOrMoon className={`${className}`} />
        </Button>
    );
}