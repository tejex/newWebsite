import { LampDemo } from './components/Header'
import { ExperienceButtons } from './components/experience'
import { HoverEffect } from './components/projects'
import { IntroCard } from './components/IntroCard'
import { ContactMe } from './components/contactMe'
import { tabs } from './components/data/data'

export default function Home() {
    const items: {
        title: string
        description: string
        link: string
    }[] = [
        {
            title: 'Car Rentalz',
            description:
                'Full Stack Car Rental website application. App includes 3d renderings of cars made possible with the use of Three.js',
            link: 'https://www.example.com/1',
        },
        {
            title: 'Color Detection - Computer Vision',
            description:
                'This project utilizes computer vision techniques to detect and track colors in real-time video streams from webcams.',
            link: 'https://www.example.com/2',
        },
        {
            title: 'Reality',
            description:
                'Solar System model built with Javascript, React, React-three-fiber and three.js technologies',
            link: 'https://www.example.com/3',
        },
        {
            title: 'Bookie',
            description:
                "Blog website built with EJS. Allows users to create posts as well as view other people's posts, while also allowing sign-in and sign up with google. Back-end built with MongoDB and Mongoose.",
            link: 'https://www.example.com/4',
        },
        {
            title: 'Blog Website',
            description:
                'This blog website uses EJS templating, Node and express as well as JavaScript, HTML and CSS to allow users to make a blog post and post it onto the home page.',
            link: 'https://www.example.com/5',
        },
        {
            title: 'Incognito',
            description:
                'A back-end focused web application built with Javascript, EJS, HTML and MongoDB. Submit a secret or any piece of text, anonymously!!',
            link: 'https://www.example.com/6',
        },
    ]

    return (
        <div className="bg-slate-950">
            <LampDemo />
            <IntroCard />
            <ExperienceButtons tabs={tabs} />
            <HoverEffect items={items} />
            <ContactMe />
            <div className="contact mb-2 opacity-50 w-full grid justify-items-center">
                <p className="md:hidden text-xl font-bold text-white">
                    Visit on your PC to see more : )
                </p>
                <p className="copyright text-white mb-10">
                    Designed and Built By Bamlak Deju Abera{' '}
                    <i className="fa-solid fa-copyright"></i>
                </p>
            </div>
        </div>
    )
}
