import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ClosingItem = () => {
    return (
        <div className="opacity-50 w-full grid justify-items-center">
            <p className="md:hidden text-xl font-bold text-white">
                Visit on your PC to see more : )
            </p>
            <p className="copyright text-white mb-10">
                Designed and Built By Bamlak Deju Abera{' '}
                <FontAwesomeIcon
                    icon={faCopyright as IconProp}
                    style={{ color: 'white', fontSize: 15 }}
                />
            </p>
        </div>
    )
}
