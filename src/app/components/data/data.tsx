'use-client'
import Image from 'next/image'
import incognitoImage from '../../images/incognito.png'
import amazonImage from '../../images/amazonLogo.png'
import mathTrackImage from '../../images/XR_Technologies.png'
import techPointImage from '../../images/TechPoint.png'

export const experiences = [
    {
        company: 'Amazon',
        logo: amazonImage,
        jobTitle: 'Incoming SDE Intern',
        duration: 'May 2024 - August 2024',
        description: ['Incoming SDE Intern, Summer 2024.'],
    },
    {
        company: 'Amazon',
        logo: amazonImage,
        jobTitle: 'Software Engineer Intern',
        duration: 'June 2023 - August 2023',
        description: [
            'Spearheaded the design and implementation of multiple features on a Language Model Playground',
            'Wrote and conducted tests on components of LLM playground using the React Testing Library, Jest and Mocha',
            'Implemented REST APIs and backend functionalities using Node.js, Typescript and Socket.io',
        ],
    },
    {
        company: 'MathTrack',
        logo: mathTrackImage,
        jobTitle: 'Software Engineer Intern',
        duration: 'May 2022 - August 2022',
        description: [
            'Made use of  technologies such as Javascript and React to design and develop interactive web applications',
            'Utilized frameworks including React and Bootstrap to enhance interactive nature of web applications',
            'Acquired fundamental knowledge of React, Angular and Node.js during internship experience',
            'Developed a wide variety of web development skills',
        ],
    },
    {
        company: 'TechPoint',
        logo: techPointImage,
        jobTitle: 'UI / UX Design Intern',
        duration: 'May 2022 - August 2022',
        description: [
            'Worked in a team of 10 to design an innovative solution to increase tech jobs in Indiana',
            'Developed a user friendly UI for the solution as a member of the production group',
            'Obtained various skills from this internship experience such as the importance of working in a team in the tech industry',
            "Part of the winning team for the Tech Jobs in Indiana category in TechPoint's The Pitch competition.",
        ],
    },
]

export const tabs = experiences.map((exp, idx) => {
    return {
        title: exp.company,
        value: idx + '',
        content: (
            <div
                key={idx}
                className="w-full overflow-hidden relative rounded-2xl p-6 md:p-10 font-bold text-lightGray bg-slate-800"
            >
                <div className="flex flex-row mb-5">
                    <Image
                        src={exp.logo}
                        alt=""
                        className="w-14 mr-5 rounded-lg"
                    />

                    <h1 className="font-sans md:text-3xl lg:text-4xl">
                        {exp.company} - {exp.jobTitle}
                    </h1>
                </div>
                <h5 className="md:text-md mb-3 md:mb-2">{exp.duration}</h5>
                <ul className="">
                    {exp.description.map((exp, index) => {
                        return (
                            <li
                                key={index}
                                className="text-md font-sans mb-3 md:mb-5"
                            >
                                - {exp}
                            </li>
                        )
                    })}
                </ul>
            </div>
        ),
    }
})

const bestProjects = [
    {
        name: 'Incognito',
        description:
            'Python-based color detection project leveraging computer vision techniques to identify and classify colors in images with high accuracy.',
        technologies: 'Python OpenCV Numpy',
        gitHub: 'https://github.com/tejex/colorDetection',
        visit: '',
        image: require('../../images/incognito.png'),
    },
    {
        name: 'Spotify User Profile',
        description:
            'Python-powered face anonymizer project utilizing computer vision algorithms to automatically blur or obscure faces in images for privacy protection',
        gitHub: 'https://github.com/tejex/faceAnonymizer',
        visit: '',
        image: require('../../images/spotifyDesktop1.png'),
    },
    {
        name: 'Spotify User Profile Destop App',
        description:
            "Electron.js-based desktop app utilizing TypeScript and the Spotify Developer API for user authentication, providing personalized insights on users' top listened-to artists and songs directly from their Spotify account",
        technologies: 'Typescript HTML CSS EJS Electron.js',
        gitHub: 'https://github.com/tejex/Bookie',
        visit: '',
        image: require('../../images/incognito.png'),
    },
]

export const items: {
    title: string
    description: string
    link: string
    visit?: string
}[] = [
    {
        title: 'Car Rentalz',
        description:
            'Full Stack Car Rental website application. App includes 3d renderings of cars made possible with the use of Three.js',
        link: 'https://github.com/tejex/carRentalz',
    },
    {
        title: 'Color Detection - Computer Vision',
        description:
            'This project utilizes computer vision techniques to detect and track colors in real-time video streams from webcams.',
        link: 'https://github.com/tejex/colorDetection',
    },
    {
        title: 'Reality',
        description:
            'Solar System model built with Javascript, React, React-three-fiber and three.js technologies',
        link: 'https://bamsolarsystem.netlify.app/',
        visit: 'https://bamsolarsystem.netlify.app/',
    },
    {
        title: 'Bookie',
        description:
            "Blog website built with EJS. Allows users to create posts as well as view other people's posts, while also allowing sign-in and sign up with google. Back-end built with MongoDB and Mongoose.",
        link: 'https://github.com/tejex/Bookie',
    },
    {
        title: 'Blog Website',
        description:
            'This blog website uses EJS templating, Node and express as well as JavaScript, HTML and CSS to allow users to make a blog post and post it onto the home page.',
        link: 'https://github.com/tejex/Blog-Website',
    },
    {
        title: 'Incognito',
        description:
            'A back-end focused web application built with Javascript, EJS, HTML and MongoDB. Submit a secret or any piece of text, anonymously!!',
        link: 'https://github.com/tejex/Anonymous-Secrets-App',
    },
]

export const projects = bestProjects.map((project, idx) => {
    return {
        title: project.name,
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <Image src={incognitoImage} alt="" className="w-full h-full" />
        ),
    }
})
