import React, { useState } from 'react';
import Projects from './Projects';

const ProjectContainer = () => {
    const [mernProjects, setMernProjects] = useState([
        {
            name: 'Watch N Track',
            description:
                ' Nam nisl est, aliquam sit amet erat faucibus, vestibulum euismod leo. Donec quis nulla eget augue mollis lacinia. Maecenas consectetur dictum ex eu fermentum. Donec sit amet erat dignissim, dignissim ipsum eleifend, pretium augue. Maecenas euismod massa sed lorem pharetra facilisis. Nam ac nulla a enim tincidunt egestas vitae et nulla. Curabitur eu felis luctus, aliquam orci quis, suscipit turpis. Nullam sed lacinia felis, sed ultrices augue. Cras elementum posuere tellus egestas vehicula.',
            github: 'https://github.com/cburnjohnson/watch-n-track',
            deploy: 'https://watchntrack.herokuapp.com/',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'Phone Book',
            techUsed: 'MongoDB, Express, React, NodeJS, and JavaScript.',
            description:
                "Phone book application that stores user's personal professional contacts.",
            github: 'https://github.com/cburnjohnson/phone-book',
            deploy: 'https://phonebook47.herokuapp.com/',
            image: 'https://source.unsplash.com/random'
        }
    ]);

    const [reactProjects, setReactProjects] = useState([
        {
            name: 'Where To Eat',
            techUsed:
                'React, JavaScript, CSS, Bootstrap, and Google Places API.',
            description:
                'Restaurant application that displays a random nearby restaurant and information about the restaurant.',
            github: 'https://github.com/cburnjohnson/where-to-eat',
            deploy: 'https://wheretoeat.netlify.com',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'Pokédex',
            techUsed: 'React, JavaScript, and CSS.',
            description: 'An application that emulates a Pokédex.',
            github: 'https://github.com/cburnjohnson/pokedex',
            deploy: 'https://pokedex123.netlify.com/',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'LoL Summoners',
            techUsed: 'React, JavaScript, and CSS.',
            description:
                'League of Legends application that allows the user to look up the statistics of a League of Legends account.',
            github: 'https://github.com/cburnjohnson/lol-summoners',
            deploy: 'https://lolsummoners.netlify.com',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'IT Work Orders',
            techUsed:
                'React, Redux, JavaScript, Materialize Css, and JSON Server.',
            description: 'Logging/Tracking React for IT work orders.',
            github: 'https://github.com/cburnjohnson/it-work-orders',
            image: 'https://source.unsplash.com/random'
        }
    ]);

    const [javascriptProjects, setJavascriptProjects] = useState([
        {
            name: 'Rock Paper Scissors',
            techUsed: 'JavaScript, HTML, and CSS.',
            description:
                'Rock Paper Scissors game against the computer. Records the user and computer score while playing.',
            github: 'https://github.com/cburnjohnson/rock-paper-scissors',
            deploy: 'https://cburnjohnson.github.io/rock-paper-scissors/',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'To Do List',
            techUsed: 'JavaScript, HTML, and CSS.',
            description:
                'To Do List application that records tasks and moves them over to the done section when completed.',
            github: 'https://github.com/cburnjohnson/to-do-list',
            deploy: 'https://cburnjohnson.github.io/to-do-list/',
            image: 'https://source.unsplash.com/random'
        }
    ]);

    const [cNetProjects, setCNetProejcts] = useState([
        {
            name: 'Twenty One Game',
            techUsed: '.NET, ASP.NET, and C#.',
            description:
                'Console application that emulates the game Twenty One.',
            github: 'https://github.com/cburnjohnson/Twenty-One-Game',
            image: 'https://source.unsplash.com/random'
        },
        {
            name: 'Car Insurance Quoter',
            techUsed:
                '.NET, ASP.NET, C#, SQLServer, JavaScript, and Bootstrap.',
            description:
                "Web application that issues car insurance quotes based on the user's input. The application also pulls all recent quotes from the database, and displays the data on the admin page.",
            github: 'https://github.com/cburnjohnson/CarInsuranceApp',
            image: 'https://source.unsplash.com/random'
        }
    ]);

    const [phpProjects, setPhpProjects] = useState([
        {
            name: 'Cloud the Pom',
            techUsed: 'PHP, JavaScript, HTML, and CSS.',
            description: `A website created for my dog that allows me to login and
                upload pictures that get stored in a picture library
                directory. The home page has a carousel populated with
                random pictures from the picture library. The login
                information is “guest” for username and password
                (uploading is not available for guests).`,
            github: 'https://github.com/cburnjohnson/cloud-the-pom/',
            deploy: 'https://cloudthepom.com',
            image: 'https://source.unsplash.com/random'
        }
    ]);

    const [currentProjects, setCurrentProjects] = useState({
        active: 'react',
        currentProjects: mernProjects,
        noProjects: {
            name: '',
            description: '',
            github: '',
            deploy: '',
            image: ''
        }
    });

    const onMernClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'mern'
        });
    };

    const onReactClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'react'
        });
    };

    const onJavascriptClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'javascript'
        });
    };

    const onPhpClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'php'
        });
    };

    const onCNetClick = () => {
        setCurrentProjects({
            ...currentProjects,
            active: 'c#net'
        });
    };

    return (
        <div className='projects-container'>
            <div className='projects-buttons'>
                <button onClick={onMernClick}>MERN Stack</button>

                <button onClick={onReactClick}>React</button>

                <button onClick={onJavascriptClick}>Vanilla JS</button>

                <button onClick={onPhpClick}>PHP</button>

                <button onClick={onCNetClick}>C#/.NET</button>
            </div>
            <h1 className='projects-header'>
                {currentProjects.active === 'mern'
                    ? 'MERN Stack Projects'
                    : currentProjects.active === 'react'
                    ? 'React Projects'
                    : currentProjects.active === 'javascript'
                    ? 'Vanilla JavaScript Projects'
                    : currentProjects.active === 'php'
                    ? 'PHP Projects'
                    : currentProjects.active === 'c#net'
                    ? 'C#/.NET Projects'
                    : 'Projects'}
            </h1>
            <Projects
                projects={
                    currentProjects.active === 'mern'
                        ? mernProjects
                        : currentProjects.active === 'react'
                        ? reactProjects
                        : currentProjects.active === 'javascript'
                        ? javascriptProjects
                        : currentProjects.active === 'php'
                        ? phpProjects
                        : currentProjects.active === 'c#net'
                        ? cNetProjects
                        : currentProjects.noProjects
                }
            />
        </div>
    );
};

export default ProjectContainer;
