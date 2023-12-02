import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-purple-500 text-white py-4">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Link href="/">
                        <h1 className="text-2xl font-bold">DaisyUI Example</h1>
                    </Link>
                    <ul className="flex justify-end items-center font-bold space-x-5 tracking-wide">
                        <li>
                            <Link href="/"> Home</Link>
                        </li>
                        <li>
                            <Link href="/login"> Login</Link>
                        </li>
                        <li>
                            <Link href="/modal"> Modal</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
