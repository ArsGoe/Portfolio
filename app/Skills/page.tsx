// Page.tsx
import React from 'react';

const Page = () => {
    const skills = [
        { name: 'Java', percentage: '75%' },
        { name: 'JavaFX / Scenebuiler', percentage: '65%' },
        { name: 'HTML/CSS', percentage: '80%' },
        { name: 'PHP', percentage: '70%' },
        { name: 'Laravel', percentage: '70%' },
        { name: 'Python', percentage: '80%' },
        { name: 'SQL', percentage: '65%' }
    ];

    return (
        <section id="skills" className="bg-black text-white p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">MES COMPETENCES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded shadow-md">
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                            <p>{skill.percentage}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;