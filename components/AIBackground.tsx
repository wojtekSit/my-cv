import Image from 'next/image'

export default function AIBackground() {
    return (
        <Image
            src='/background.webp'
            alt="backgroundimg"
            quality={100}
            fill={true}
            sizes="100vw"
            style={{
                objectFit: 'cover',
            }}
        />
    )
}
