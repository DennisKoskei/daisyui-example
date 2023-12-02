import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-purple-600 text-white py-8 mt-4">
            <div className="container mx-auto flex justify-between">
                <p>&copy; {new Date().getFullYear()} DaisyUI Example </p>
                <p>
                    View code on
                        <Link
                            href="https://github.com/DennisKoskei/daisyui-example"
                            className="underline pl-1"
                        >
                            Github
                        </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
