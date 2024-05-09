import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface CustomImageProps {
    imageSource: string | StaticImageData // Accept string or StaticImageData
}

const CustomImage: React.FC<CustomImageProps> = ({ imageSource }) => {
    const src = typeof imageSource === 'string' ? imageSource : imageSource.src

    return (
        <Image
            className="rounded-lg transition-all"
            src={imageSource}
            alt="image of an electric car"
        />
    )
}

export default CustomImage
