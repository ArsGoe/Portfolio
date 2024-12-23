import React from 'react';

const ProjectsPage = () => {
    const projects = [
        { name: 'Roca', description: 'Roca est un site de lecture et de création d\'histoire à choix. Ce projet a été réalisé lors du marathon Web en collaboration avec un autre pôle de mon IUT qui est le pôle MMI. Le site utilise Laravel, HTML/CSS, SQL et PHP. Le site permet de lire une histoire, mais aussi crée une histoire soit même et de la publier.' },
    ];

    return (
        <section id="portfolio" className="bg-background text-white p-8">
            <div className="container mx-auto bg-footer">
                <h2 className="text-3xl font-bold mb-8">MES PROJETS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-footer">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-footer p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="mt-2 text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;