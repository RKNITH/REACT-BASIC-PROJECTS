import React, { useState } from 'react';

// Sample Data for the Tree View
const menuData = [
    {
        id: 1,
        name: 'Home',
        children: [],
    },
    {
        id: 2,
        name: 'About',
        children: [
            {
                id: 3,
                name: 'Our Team',
                children: [
                    {
                        id: 4,
                        name: 'Management',
                        children: [],
                    },
                    {
                        id: 5,
                        name: 'Developers',
                        children: [],
                    },
                ],
            },
            {
                id: 6,
                name: 'Company History',
                children: [],
            },
        ],
    },
    {
        id: 7,
        name: 'Services',
        children: [
            {
                id: 8,
                name: 'Web Development',
                children: [],
            },
            {
                id: 9,
                name: 'App Development',
                children: [],
            },
        ],
    },
    {
        id: 10,
        name: 'Contact',
        children: [],
    },
];

// Recursive Tree View Component
const TreeNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="m-2">
            <div
                className="flex justify-between items-center cursor-pointer p-2 bg-gray-200 rounded-md"
                onClick={handleToggle}
            >
                <span className="font-medium text-black">{node.name}</span>
                {node.children.length > 0 && (
                    <span className="text-gray-500">{isOpen ? '−' : '+'}</span>
                )}
            </div>
            {isOpen && node.children.length > 0 && (
                <div className="ml-4 m-2">
                    {node.children.map((child) => (
                        <TreeNode key={child.id} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

const TreeView = () => {
    return (
        <div className="flex items-center justify-center m-10">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-orange-500 text-4xl font-bold text-center mb-6">Tree View</h1>
                <div className="flex flex-col gap-4 bg-white text-black p-4 rounded-lg shadow-inner">
                    {menuData.map((item) => (
                        <TreeNode key={item.id} node={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TreeView;
