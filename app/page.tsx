import React from "react";
import {Col, Progress, Row} from "antd";

const HomePage = () => {

    const experiences = [
        {
            nom: 'BUT Informatique',
            endroit: 'IUT de Lens',
            duree: '2022 - Aujourd’hui',
            plus: 'Formation informatique avec spécialisation dans les applications web.'
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
        },
        {
            nom: 'Baccalauréat',
            endroit: 'Lycée Arthur Rimbaud, Sin-le-Noble',
            duree: 'Juin 2022',
            plus: 'Baccalauréat avec spécialité Mathématiques, Sciences physiques/Chimie avec option maths experts.'
        }
    ];

    const skills = [
        { name: 'Git', percentage: 85 },
        { name: 'Python', percentage: 80 },
        { name: 'React', percentage: 80 },
        { name: 'HTML/CSS', percentage: 80 },
        { name: 'Java', percentage: 75 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'TypeScript', percentage: 75 },
        { name: 'Angular', percentage: 70 },
        { name: 'Laravel', percentage: 70 },
        { name: 'Neo4J', percentage: 70 },
        { name: 'PHP', percentage: 70 },
        { name: 'Symphony', percentage: 70 },
        { name: 'Canva', percentage: 60 },
        { name: 'JavaFX / Scenebuilder', percentage: 65 },
        { name: 'NoSQL', percentage: 65 },
        { name: 'SQL', percentage: 65 }
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
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Roméo Jacquemin
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Il s`agit de mon portfolio étudiant comptant mes projets réalisés pendant ma formation de BUT
                    Informatique à l`IUT de Lens
                </p>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-text">À PROPOS DE MOI</h2>
            <p>Roméo Jacquemin, 20 ans, étudiant à l`IUT de Lens, en BUT Informatique et en intelligence
                artificielle.
                Pendant mes trois années à l`IUT de Lens, j`ai pu apprendre à programmer dans différents
                languages pour différentes tâches,
                du web, de la base de données, de la POO, etc.
            </p>
            <br/>
            <h2 className="text-3xl font-bold mb-8 text-text">FORMATIONS / EXPERIENCES</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {experiences.map((exp, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {exp.duree}
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.nom} - {exp.endroit}
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            {exp.plus}
                        </p>
                    </li>
                ))}
            </ol>
            <h2 className="text-3xl font-bold mb-8 text-text">MES COMPETENCES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Row gutter={[16, 16]}>
                    {skills.map((skill, index) => (
                        <Col span={12} key={index}>
                            <h4>{skill.name}</h4>
                            <Progress percent={skill.percentage} size="small"/>
                        </Col>
                    ))}
                </Row>
            </div>
            <br/>
            <br/>



            <h2 className="text-3xl font-bold mb-8 text-text">MES PROJETS</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Exemples de projets
                    </th>
                    <th scope="col" className="px-6 py-3">
                    </th>
                </tr>
                </thead>
                <tbody>
                    {projects.map((exp, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <h3 className="text-2xl font-semibold">{exp.name}</h3>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <p className="text-xl">{exp.description}</p>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default HomePage;