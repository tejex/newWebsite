'use client'
import Paper from '@mui/material/Paper'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from './MyCard'
import { useState, useEffect } from 'react'

export const IntroCard = () => {
    const [isVisible, setIsVisible] = useState(false)
    const technologies = [
        'Python',
        'Typescript',
        'Javascript',
        'React.js',
        'Next.js',
        'HTML',
        'CSS',
        'Flutter',
        'Swift',
        'C++',
        'Java',
    ]
    useEffect(() => {
        // Set isVisible to true after the component mounts to trigger the fade-in effect
        setTimeout(() => {
            setIsVisible(true)
        }, 100)
    }, [])

    const tech = (
        <div className={'mb-10 hidden md:block technologies'}>
            <ul className="w-80 grid grid-cols-2 md:grid grid-rows-4 grid-flow-col">
                {technologies.map((tech, index) => {
                    return (
                        <li key={index} className="text-md">
                            <div className="flex flex-row">
                                {'->'} {tech}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    const imageSource = require('../images/profilePic3.png')

    return (
        <div
            className={`w-full mb-36 ${
                isVisible
                    ? 'opacity-100 transition-opacity duration-1000'
                    : 'opacity-0'
            }`}
        >
            <h1 className="font-bold ml-32 md:ml-28 text-transparent bg-gradient-to-r from-slate-300 to-slate-500 text-4xl bg-clip-text">
                About Me
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 p-10 ml-0 md:ml-28">
                <Paper
                    square={false}
                    variant="elevation"
                    elevation={24}
                    className="bg-slate-950 text-white custom-shadow p-10 full h-auto mb-20 md:mb-0"
                >
                    <p className="block md:hidden">
                        Hello!! Thanks for visiting my website, I'm currently a
                        senior at Depauw University pursuing a bachelors in
                        Computer Science.
                    </p>
                    <br />
                    <p className="block md:hidden">
                        I have great interest towards Fullstack Web Development
                        and have recently grown to love computer vision👀 as
                        well : ) Check out some of my projects below!!
                    </p>
                    <p className="lead text-md hidden md:block">
                        I'm a passionate full stack developer with a keen
                        interest in both front and back-end development and have
                        worked with technologies like React, Next.js and
                        MongoDB.
                    </p>
                    <br />
                    <p className="lead hidden md:block">
                        I have also recently developed great interest for
                        Computer Vision 👀 and have worked with popular
                        libraries like OpenCV, Yolov8 and MediaPipe to bring
                        some of my project ideas to life : )
                    </p>
                    <br />
                    <p className="lead hidden md:block">
                        I'm currently a senior majoring in computer science at
                        <a href="https://www.depauw.edu/" className="text-neon">
                            {' '}
                            Depauw University
                        </a>
                        .
                    </p>
                    <p className="lead py-5 hidden md:block">
                        Here are some technologies i've worked with:
                    </p>
                    {tech}
                </Paper>
                <CardContainer>
                    <CardBody className="relative group/card bg-gradient-to-br from-slate-800 to-slate-900 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col">
                        <CardItem
                            translateZ={100}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            <Image
                                src={imageSource}
                                height="1200"
                                width="1200"
                                className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <CardItem
                            translateZ={100}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mt-10"
                        >
                            Bamlak Deju Abera
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    )
}
