"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ADMIN_MENU_ITEMS, MenuItemType } from '@/app/constants/menu';
import DialogButtonForLogin from '../dialog/DialogButtonForLoginForm';

// 전체 경로를 생성하는 유틸리티 함수
const getFullPath = (menu: MenuItemType, parentPath: string = ''): string => {
    return parentPath ? `${parentPath}/${menu.path}` : menu.path;
};

export default function HeaderMenus() {
    const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
    const router = useRouter();

    const handleMenuClick = (menu: MenuItemType, parentPath: string = '') => {
        const fullPath = getFullPath(menu, parentPath);
        if (fullPath && !menu.items?.length) {
            router.push(`/${fullPath}`);
            setOpenMenus(new Set());
        }
    };

    const handleMouseEnter = (menuPath: string) => {
        setOpenMenus(prev => {
            const newSet = new Set(prev);
            newSet.add(menuPath);
            return newSet;
        });
    };

    const handleMouseLeave = (menuPath: string) => {
        setOpenMenus(prev => {
            const newSet = new Set(prev);
            newSet.delete(menuPath);
            return newSet;
        });
    };

    const renderSubMenuItems = (menu: MenuItemType, parentPath: string = '', depth: number = 0) => {
        if (!menu.items || menu.items.length === 0) return null;

        const isFirstLevel = depth === 0;
        const position = isFirstLevel
            ? "left-0 top-full mt-2"
            : "left-full top-0 ml-2";

        const motion_initial = isFirstLevel
            ? { opacity: 0, y: -10 }
            : { opacity: 0, x: -10 };

        const motion_animate = isFirstLevel
            ? { opacity: 1, y: 0 }
            : { opacity: 1, x: 0 };

        const motion_exit = isFirstLevel
            ? { opacity: 0, y: -10 }
            : { opacity: 0, x: -10 };

        const currentPath = getFullPath(menu, parentPath);
        const isOpen = openMenus.has(currentPath);

        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={motion_initial}
                        animate={motion_animate}
                        exit={motion_exit}
                        transition={{ duration: 0.15 }}
                        className={`absolute ${position} z-50`}
                    >
                        <Card className="bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg mt-1.5">
                            <ul className="py-2 min-w-[200px]">
                                {menu.items
                                    .sort((a, b) => a.sort_order - b.sort_order)
                                    .map((subMenu) => {
                                        const subPath = getFullPath(subMenu, currentPath);
                                        return (
                                            <li
                                                key={subPath}
                                                className="relative px-2"
                                                onMouseEnter={() => handleMouseEnter(subPath)}
                                                onMouseLeave={() => handleMouseLeave(subPath)}
                                            >
                                                <button
                                                    onClick={() => handleMenuClick(subMenu, currentPath)}
                                                    className={`w-full text-left px-4 py-2 text-sm rounded-lg
                                                        ${openMenus.has(subPath)
                                                            ? 'bg-blue-50 text-blue-600'
                                                            : 'hover:bg-blue-50/50 text-gray-700 hover:text-blue-600'}
                                                        transition-colors duration-150`}
                                                >
                                                    {subMenu.name}
                                                    {subMenu.items?.length > 0 && (
                                                        <span className="float-right">›</span>
                                                    )}
                                                </button>
                                                {renderSubMenuItems(subMenu, currentPath, depth + 1)}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };

    const renderMenuItems = (items: MenuItemType[]) => {
        return (
            <ul className="flex space-x-6">
                {items
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map((menu) => {
                        const currentPath = menu.path;
                        const isOpen = openMenus.has(currentPath);

                        return (
                            <li
                                key={currentPath}
                                className="relative menu-item"
                                onMouseEnter={() => handleMouseEnter(currentPath)}
                                onMouseLeave={() => handleMouseLeave(currentPath)}
                            >
                                <button
                                    onClick={() => handleMenuClick(menu)}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg
                                        transition-all duration-300 ease-in-out
                                        relative overflow-hidden
                                        ${isOpen
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'hover:bg-blue-50/50 text-gray-700 hover:text-blue-600'}`}
                                >
                                    {menu.name}
                                    {menu.items?.length > 0 && (
                                        <span className="ml-1">▼</span>
                                    )}
                                </button>
                                {renderSubMenuItems(menu, '', 0)}
                            </li>
                        );
                    })}
            </ul>
        );
    };

    return (
        <Card className="bg-white/80 backdrop-blur-sm border-none shadow-sm">
            <nav className="relative px-4 py-2 flex justify-between items-center">
                <img src="/logo.svg" alt="Dankkum Logo" className="w-16 h-auto" />
                <div className="flex space-x-6">
                    {renderMenuItems(ADMIN_MENU_ITEMS)}
                </div>
                <div><DialogButtonForLogin /></div>
            </nav>
        </Card>
    );
}