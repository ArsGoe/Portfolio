import React from 'react';

const About = () => {
    const experiences = [
        { nom: 'BUT Informatique', endroit: 'IUT de Lens', duree: '2022 - Aujourd’hui', plus: 'Formation informatique avec spécialisation dans les applications web.' },
        { nom: 'Baccalauréat', endroit: 'Lycée Arthur Rimbaud, Sin-le-Noble', duree: 'Juin 2022', plus: 'Baccalauréat avec spécialité Mathématiques, Sciences physiques/Chimie avec option maths experts.' },
        { nom: 'Stage en intelligence artificielle et robotique', endroit: 'Laboratoire de Mathématiques de Lens', duree: 'Avril - Juin 2024', plus: 'Pendant ce stage, j\'ai travaillé sur le fonctionnement d\'une intelligence artificielle dans le milieu de la robotique.'},
        { nom: 'Employé polyvalent en restauration', endroit: 'Lille', duree: "première moitié de 2024", plus: 'J\'ai travaillé pendant plusieurs mois dans un restaurant en temps qu\'employé polyvalent.' },
        { nom: 'Présidence d\'une association étudiante', endroit: 'IUT de Lens', duree: '2023 - 2024', plus: 'J\'ai, penddant une année, été le président d\'une association étudiante à l\'IUT de Lens.' }
    ];

    return (
        <section id="about" className="bg-background text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center bg-footer">
                <div className="bg-footer">
                    <h2 className="text-3xl font-bold mb-4">À PROPOS DE MOI</h2>
                    <p>Roméo Jacquemin, 20 ans, étudiant à l'IUT de Lens, en BUT Informatique et en intelligence artificielle.
                        Pendant mes trois années à l'IUT de Lens, j'ai pu apprendre à programmer dans différents languages pour différentes tâches,
                        du web, de la base de données, de la POO, etc.
                    </p>
                </div>
            </div>
            <br/>
            <div className="container mx-auto bg-footer">
                <h2 className="text-3xl font-bold mb-8">FORMATIONS / EXPERIENCES</h2>
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-8 bg-footer">
                        <h3 className="text-2xl font-semibold">{exp.nom}</h3>
                        <p className="text-xl">{exp.endroit} - {exp.duree}</p>
                        <p>{exp.plus}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;