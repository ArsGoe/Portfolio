import React from "react";

const HomePage = () => {

    const experiences = [
        {
            nom: 'BUT Informatique',
            endroit: 'IUT de Lens',
            duree: '2022 - Aujourd’hui',
            plus: 'Formation informatique avec spécialisation dans les applications web.'
        },
        {
            nom: 'Baccalauréat',
            endroit: 'Lycée Arthur Rimbaud, Sin-le-Noble',
            duree: 'Juin 2022',
            plus: 'Baccalauréat avec spécialité Mathématiques, Sciences physiques/Chimie avec option maths experts.'
        },
        {
            nom: 'Stage en intelligence artificielle et robotique',
            endroit: 'Laboratoire de Mathématiques de Lens',
            duree: 'Avril - Juin 2024',
            plus: 'Pendant ce stage, j\'ai travaillé sur le fonctionnement d\'une intelligence artificielle dans le milieu de la robotique.'
        },
        {
            nom: 'Employé polyvalent en restauration',
            endroit: 'Lille',
            duree: "première moitié de 2024",
            plus: 'J\'ai travaillé pendant plusieurs mois dans un restaurant en temps qu\'employé polyvalent.'
        },
        {
            nom: 'Présidence d\'une association étudiante',
            endroit: 'IUT de Lens',
            duree: '2023 - 2024',
            plus: 'J\'ai, penddant une année, été le président d\'une association étudiante à l\'IUT de Lens.'
        }
    ];

    const skills = [
        {name: 'Angular', percentage: '70%'},
        {name: 'Canva', percentage: '60%'},
        {name: 'Git', percentage: '85%'},
        {name: 'HTML/CSS', percentage: '80%'},
        {name: 'Java', percentage: '75%'},
        {name: 'JavaFX / Scenebuilder', percentage: '65%'},
        {name: 'Laravel', percentage: '70%'},
        {name: 'MongoDB', percentage: '75%'},
        {name: 'Neo4J', percentage: '70%'},
        {name: 'NoSQL', percentage: '65%'},
        {name: 'PHP', percentage: '70%'},
        {name: 'Python', percentage: '80%'},
        {name: 'React', percentage: '80%'},
        {name: 'SQL', percentage: '65%'},
        {name: 'Symphony', percentage: '70%'},
        {name: 'TypeScript', percentage: '75%'}
    ];

    const projects = [
        {
            name: "Projet Marathon",
            description: "Site bibliothèque de lecture/écriture, réalisé avec Laravel, HTML/CSS, SQLite.",
        },
        {
            name: "FlatCraft",
            description: "Terraria fait maison, réalisé avec Java avec JavaFX.",
        },
        {
            name: "Pokedex",
            description: "Création d'un pokedex utilisant une API pour récupérer les informations, réalisé avec Python et Flask.",
        },
        {
            name: "Raytracer",
            description: "Projet ayant pour but de réaliser des images de scènes mettant en place des sources de lumière, utilisant la technologie de Ray-Tracing, réalisée en Java.",
        },
        {
            name: "Niryo",
            description: "Projet utilisant une intelligence artificielle pour déplacer un bras robotique.",
        },
    ];


    return (
        <div className="min-h-screen bg-background p-4">
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold">Roméo JACQUEMIN</h1>
            </header>
            <section id="about" className="bg-background text-white p-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center bg-footer">
                    <div className="bg-footer">
                        <h2 className="text-3xl font-bold mb-4 text-text">À PROPOS DE MOI</h2>
                        <p>Roméo Jacquemin, 20 ans, étudiant à l'IUT de Lens, en BUT Informatique et en intelligence
                            artificielle.
                            Pendant mes trois années à l'IUT de Lens, j'ai pu apprendre à programmer dans différents
                            languages pour différentes tâches,
                            du web, de la base de données, de la POO, etc.
                        </p>
                    </div>
                </div>
                <br/>
                <div className="container mx-auto bg-footer">
                    <h2 className="text-3xl font-bold mb-8 text-text">FORMATIONS / EXPERIENCES</h2>
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-8 bg-box">
                            <h3 className="text-2xl font-semibold">{exp.nom}</h3>
                            <p className="text-xl">{exp.endroit} - {exp.duree}</p>
                            <p>{exp.plus}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="skills" className="text-white p-8">
                <div className="container mx-auto bg-footer">
                    <h2 className="text-3xl font-bold mb-8 text-text">MES COMPETENCES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-footer">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-box p-4 rounded shadow-md">
                                <h3 className="text-xl font-bold">{skill.name}</h3>
                                <p>{skill.percentage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="skills" className="text-white p-8">
                <div className="container mx-auto bg-footer">
                    <h2 className="text-3xl font-bold mb-8 text-text">MES PROJETS</h2>
                    {projects.map((exp, index) => (
                        <div key={index} className="mb-8 bg-box">
                            <h3 className="text-2xl font-semibold">{exp.name}</h3>
                            <p className="text-xl">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;