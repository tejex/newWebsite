import React from 'react'
import { useState, useEffect } from 'react'
import incognitoImage from '../images/incognito.png'
import carRentalzImage from '../images/carRentalz.png'
import spotifyUI from '../images/spotifyDesktop1.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import CustomImage from './CustomImage'

export const SpotlightProjects = () => {
    const [activeProject, setActiveProject] = useState('SpotifyUI')
    const [imageActive, setActive] = useState(true)
    interface Project {
        id: string
        label: string
        content: string
        image: any
        techStack: string[]
        github: string
        live: string
    }
    let tabs: { [key: string]: Project } = {
        SpotifyUI: {
            id: 'SpotifyUI',
            label: 'Spotify User Insights',
            content:
                'Unlock personalized insights with the Spotify Insights desktop app. Explore your music habits, discover trends, and delve into your listening history effortlessly.',
            image: spotifyUI,
            techStack: [
                'HTML',
                'CSS',
                'Typescript',
                'React',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Git',
                'Electron.js',
            ],
            github: 'string',
            live: 'string',
        },
        HideMe: {
            id: 'HideMe',
            label: 'HideMe 👀',
            content:
                'This project uses computer vision to anonymize faces in images. It detects facial features and replaces them with blurred or pixelated regions, protecting privacy while preserving image context, ideal for images, videos, and live streams.',
            image: incognitoImage,
            techStack: ['Python3', 'OpenCV', 'MediaPipe'],
            github: 'https://github.com/tejex/faceAnonymizer',
            live: 'string',
        },
        FaceAuth: {
            id: 'FaceAuth',
            label: 'Face Attendance System',
            content:
                'Authenticate effortlessly with FaceAuth. Utilize facial recognition for secure, personalized access, ensuring reliable account authentication.',
            image: carRentalzImage,
            techStack: ['Python', 'OpenCV', 'HTML', 'CSS'],
            github: 'https://github.com/tejex/faceAttendanceSystem',
            live: 'string',
        },
    }

    const changeProject = (newProject: string) => {
        setActiveProject(newProject)
    }

    return (
        <div className="flex w-fullflex-col text-red-200 mt-12 h-4/6 w-full">
            <div className="w-1/3 grid grid-cols-1 h-full">
                <div className="flex flex-row items-center justify-start w-full gap-x-5 h-full">
                    {Object.values(tabs).map((project) => {
                        return (
                            <button
                                key={project.id}
                                onClick={() => {
                                    changeProject(project.id)
                                }}
                                className={`${
                                    activeProject === project.id
                                        ? ''
                                        : 'hover:text-white/60'
                                } relative rounded-full px-3 py-1.5 text-2xl font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                                style={{
                                    WebkitTapHighlightColor: 'transparent',
                                }}
                            >
                                {activeProject === project.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 border-2 rounded-md border-slate-300 mix-blend-difference"
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.2,
                                            duration: 0.6,
                                        }}
                                    />
                                )}
                                {project.id}
                            </button>
                        )
                    })}
                </div>
                <div className="mt-10 h-full w-full border-2 rounded-lg border-slate-300 p-5 text-white transition-all">
                    <h1 className="text-4xl mb-10">
                        {tabs[activeProject].label}
                    </h1>
                    <p>{tabs[activeProject].content}</p>
                    <ul
                        className={`mt-5 grid grid-cols-${
                            tabs[activeProject].techStack.length > 4 ? 2 : 1
                        }`}
                    >
                        {tabs[activeProject].techStack.map((tech) => {
                            return (
                                <li key={tech}>
                                    {' '}
                                    -{'>'} {tech}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="grid grid-cols-2 w-1/3 mt-5">
                        <a href={tabs[activeProject].github}>
                            <FontAwesomeIcon
                                icon={faGithub as IconProp}
                                className="mr-5 mt-2"
                                style={{ color: 'white', fontSize: 24 }}
                                href={tabs[activeProject].github}
                            />
                        </a>
                        <a href={tabs[activeProject].live}>
                            <FontAwesomeIcon
                                icon={faLink as IconProp}
                                className="mr-5 mt-2"
                                style={{ color: 'white', fontSize: 24 }}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ml-10 w-2/3 h-full">
                <CustomImage imageSource={tabs[activeProject].image} />
            </div>
        </div>
    )
}
