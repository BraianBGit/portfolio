import Image, {StaticImageData} from "next/image";

const projectCard = ({imageSrc, imageAlt, name, description, technologies}: {
    imageSrc: string,
    imageAlt: string,
    name: string,
    description: string,
    technologies: StaticImageData[]
}) => {
    return <div
        className={"flex flex-row flex-grow flex-shrink sm:basis-1/2 md:basis-2/3 xl:basis-2/5 shadow-lg rounded-xl dark:bg-gray-900 hover:scale-105 transition-transform"}
        key={name}>
        <Image src={imageSrc} alt={imageAlt} width={200}
               height={200} className={"min-h-full"}/>
        <div className={"flex flex-col px-4 justify-center py-4"}>
            <h3 className={"text-xl font-medium pb-2"}>{name}</h3>
            <p className={"py-4"}>{description}</p>
            <div className={"flex gap-2 mt-auto"}>
                {technologies.map(technology => <Image src={technology} alt={imageAlt} width={30}
                                                       height={30}
                                                       className={"pt-2 hover:scale-110 transition-transform"}/>)}
            </div>
        </div>
    </div>
}

export default projectCard;