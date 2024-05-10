import { Header } from './components/Header'
import { ExperienceButtons } from './components/experience'
import { HoverEffect } from './components/projects'
import { IntroCard } from './components/IntroCard'
import { ContactMe } from './components/contactMe'
import { tabs } from './components/data/data'
import { ClosingItem } from './components/ClosingItem'
import { items } from './components/data/data'

export default function Home() {
    return (
        <div className="bg-slate-950">
            <Header />
            <IntroCard />
            <ExperienceButtons tabs={tabs} />
            <HoverEffect items={items} />
            <ContactMe />
            <ClosingItem />
        </div>
    )
}
