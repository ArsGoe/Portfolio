"use client";

import React from "react";


const Footer = () => {
    return (
        <footer className="bg-footer text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold">Suivez mon actualité</h2>
                    <div className="mt-2 flex space-x-4">
                        <a href="https://fr.linkedin.com/in/roméo-jacquemin" target="_blank" rel="noopener noreferrer"
                           className="text-text hover:underline">
                            LinkedIn
                        </a>
                        <a href="https://github.com/ArsGoe" target="_blank" rel="noopener noreferrer"
                           className="text-text hover:underline">
                            GitHub
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Mon Mail</h2>
                    <p className="mt-2">romeo.jacquemine@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;