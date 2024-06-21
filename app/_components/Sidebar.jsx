'use client'

import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineDashboard, AiOutlineLogout, AiOutlineMenu, AiOutlineSetting, AiOutlineUser} from 'react-icons/ai'

const navElements = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <AiOutlineDashboard className='w-6 h-6 mr-2' />
    },
    {
        title: 'Profile',
        href: '/profile',
        icon: <AiOutlineUser className='w-6 h-6 mr-2' />
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: <AiOutlineSetting className='w-6 h-6 mr-2' />
    },
]

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <div className={`h-screen bg-gray-900 text-gray-100 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
            <div className="flex items-center justify-between h-20 bg-gray-800 border-b border-gray-700 p-4">
                {
                    !isCollapsed && (
                        <h1 className="text-3xl font-bold text-blue-400">
                            <Link href="/">
                                Sidebar
                            </Link>
                        </h1>
                    )
                }
                <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className='text-gray-100 focus:outline-none'
                >
                    {isCollapsed ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
                </button>
            </div>
            <div className='flex-1 flex flex-col justify-between overflow-hidden'>
                <nav className='mt-10'>
                    {
                        navElements.map((navElement) => (
                            <Link href={navElement.href} key={navElement.title}>
                                <div className={`flex items-center py-2.5 px-4 rounded transition duration-300 hover:bg-gray-700 hover:text-blue-400 ${isCollapsed ? 'justify-center' : ''}`}>
                                    {navElement.icon}
                                    <span className={`ml-2 transition-opacity duration-300 delay-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                                        {!isCollapsed && navElement.title}
                                    </span>
                                </div>
                            </Link>
                        ))
                    }
                </nav>
                <div className='mb-10 transition-opacity duration-300 delay-300'>
                    <button className='flex items-center py-2.5 px-4 w-full text-left rounder transition duration-300 hover:bg-red-700 hover:text-white'>
                        <AiOutlineLogout className='w-6 h-6 mr-2' />
                        <span className={`transition-opacity duration-300 delay-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                            {
                                !isCollapsed && "Log Out"
                            }
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar