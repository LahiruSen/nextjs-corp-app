import type { StaticImageData } from "next/image"
import Image from "next/image"

interface HeroProps{
    imageData: StaticImageData;
    imgAlt: string;
    title: string
}

export default function Hero(props: HeroProps){ 
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 -z-10">
                <Image src={props.imageData} alt={props.imgAlt} fill style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div className="flex justify-center items-center h-full">
                <h1 className="text-white text-7xl font-bold">{props.title}</h1>
            </div>
        </div>
    )
}