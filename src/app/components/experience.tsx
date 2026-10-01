'use client'

import { useState } from 'react'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { cn } from '../util'
import { Tab } from '@mui/material'

type Tab = {
    title: string
    value: string
    content?: string | React.ReactNode | any
}

export const ExperienceButtons = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[]
    containerClassName?: string
    activeTabClassName?: string
    tabClassName?: string
    contentClassName?: string
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0])
    const [tabs, setTabs] = useState<Tab[]>(propTabs)

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs]
        const selectedTab = newTabs.splice(idx, 1)
        newTabs.unshift(selectedTab[0])
        setTabs(newTabs)
        setActive(newTabs[0])
    }

    return (
        <div className="hidden md:block ml-28 relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full h-full w-full">
            <h1 className="mb-20 font-bold text-transparent bg-gradient-to-r from-slate-300 to-slate-500 text-4xl bg-clip-text">
                Professional Experience
            </h1>
            <div className="grid grid-cols-5 w-full h-full">
                <div className="flex flex-col items-start gap-3 col-span-1">
                    {propTabs.map((experience, idx) => {
                        return (
                            <div key={idx} className="relative">
                                <Button
                                    onClick={() => {
                                        moveSelectedTabToTop(idx)
                                    }}
                                    key={idx}
                                    sx={{
                                        minWidth: 0,
                                        padding: '4px',
                                        textTransform: 'none',
                                    }}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                    className="w-auto text-base lg:text-lg text-white"
                                >
                                    <div className="relative flex items-center">
                                        {active.value === experience.value && (
                                            <motion.div
                                                layoutId="clickedbutton"
                                                transition={{
                                                    type: 'spring',
                                                    bounce: 0.3,
                                                    duration: 0.6,
                                                }}
                                                className={cn(
                                                    'absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal-400',
                                                    activeTabClassName
                                                )}
                                            />
                                        )}
                                        <h4
                                            key={idx + 1}
                                            className="ml-4 rounded-md border-2 border-slate-300 px-3 py-1.5"
                                        >
                                            {experience.title}
                                        </h4>
                                    </div>
                                </Button>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full h-full col-span-4">
                    <FadeInDiv
                        key={active.value}
                        active={active}
                        tabs={tabs}
                        className={cn('w-4/5', contentClassName)}
                    />
                </div>
            </div>
        </div>
    )
}

export const FadeInDiv = ({
    className,
    tabs,
}: {
    className?: string
    key?: string
    tabs: Tab[]
    active: Tab
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value
    }
    return (
        <div className="relative w-full min-h-[34rem]">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn('min-h-[34rem] absolute top-0 left-0', className)}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    )
}
