'use client'
import Image from 'next/image'
import incognitoImage from '../../images/incognito.png'
import amazonImage from '../../images/amazonLogo.png'

export const experiences = [
    {
        company: 'Kamsa',
        tabLabel: 'Kamsa',
        logo: null,
        jobTitle: 'Software Engineer',
        duration: 'February 2025 - August 2026',
        location: 'Philadelphia, PA',
        description: [
            'Cut form completion time by 70% by redesigning modal workflows using Next.js routing and interception.',
            'Improved Largest Contentful Paint by 30% on data-heavy pages by implementing server-side pagination with TanStack Table for datasets of 1,000+ rows.',
            'Eliminated 40% of redundant API calls by standardizing client-side data fetching with SWR caching across TypeScript, Python, and Django services.',
            'Decreased financial and employee data discrepancies by 20% by building automated currency-normalization services with Python and Django.',
        ],
    },
    {
        company: 'Amazon',
        tabLabel: "Amazon '24",
        logo: amazonImage,
        jobTitle: 'Software Development Engineer Intern',
        duration: 'May 2024 - August 2024',
        location: 'Sunnyvale, CA',
        description: [
            'Built an automated Java health-checking service for a multi-threaded distributed platform, reducing on-call diagnosis time from 1-2 hours to 15-30 minutes.',
            'Designed lock-free concurrent error tracking for reliable host-health evaluation, preventing race conditions under 100k-300k simulated requests.',
            'Refactored service integrations into reusable modules, simplifying support for Amazon.com retail and Prime Video.',
        ],
    },
    {
        company: 'Amazon',
        tabLabel: "Amazon '23",
        logo: amazonImage,
        jobTitle: 'Software Development Engineer Intern',
        duration: 'June 2023 - August 2023',
        location: 'Bellevue, WA',
        description: [
            'Developed user-facing features for an AI/LLM playground with React and TypeScript, delivering responsive model-selection and configuration workflows.',
            'Built a dynamic Material UI configuration interface that let users adjust model parameters such as temperature and randomness in real time.',
            'Reduced build and load times by 90% through caching, lazy loading, and frontend performance tuning while implementing dynamic LLM model switching.',
        ],
    },
]

export const tabs = experiences.map((exp, idx) => {
    return {
        title: exp.tabLabel,
        value: idx + '',
        content: (
            <div
                key={idx}
                className="w-full relative rounded-2xl p-6 md:p-8 font-bold text-lightGray bg-slate-800"
            >
                <div className="flex flex-row mb-5">
                    {exp.logo ? (
                        <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-14 h-14 object-contain mr-5 rounded-lg"
                        />
                    ) : (
                        <div
                            aria-hidden="true"
                            className="w-14 h-14 mr-5 shrink-0 rounded-lg bg-teal-400 text-slate-950 flex items-center justify-center text-2xl"
                        >
                            {exp.company.charAt(0)}
                        </div>
                    )}

                    <h1 className="font-sans md:text-2xl lg:text-3xl">
                        {exp.company} - {exp.jobTitle}
                    </h1>
                </div>
                <div className="flex flex-wrap justify-between gap-2 mb-4 text-sm md:text-base">
                    <h5>{exp.duration}</h5>
                    <h5>{exp.location}</h5>
                </div>
                <ul className="">
                    {exp.description.map((description, index) => {
                        return (
                            <li
                                key={index}
                                className="text-sm lg:text-base font-sans mb-3"
                            >
                                - {description}
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
        title: 'Face Anonymizer',
        description:
            'This project employs computer vision techniques to anonymize faces in images, ensuring privacy protection by detecting and obscuring facial features with various anonymization methods.',
        link: 'https://github.com/tejex/faceAnonymizer',
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
