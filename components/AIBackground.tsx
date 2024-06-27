import Image from 'next/image'
import backgroundpic from '../public/background.webp'

export default function AIBackground() {
    return (
        <Image
            src={backgroundpic}
            alt="backgroundimg"
            placeholder="blur"
            quality={100}
            fill={true}
            sizes="100vw"
            style={{
                objectFit: 'cover',
            }}
        />
    )
}
