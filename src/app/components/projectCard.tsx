import Image, {StaticImageData} from "next/image";

const projectCard = ({imageSrc, imageAlt, name, description, technologies}: {
    imageSrc: string,
    imageAlt: string,
    name: string,
    description: string,
    technologies: string[]
}) => {
    return <div
        className={"flex flex-col sm:flex-row flex-grow flex-shrink sm:basis-1/2 md:basis-2/3 xl:basis-2/5 h-full shadow-lg rounded-xl bg-teal-50 dark:border-teal-400 dark:border dark:bg-transparent hover:scale-105 transition-transform"}
        key={name}>
        <Image src={imageSrc} alt={imageAlt} width={200}
               height={200} className={"min-h-full self-center"}/>
        <div className={"flex flex-col px-4 justify-center py-4"}>
            <h3 className={"text-xl font-medium pb-2"}>{name}</h3>
            <p className={"py-4"}>{description}</p>
            <div className={"flex gap-2 mt-auto"}>
                {technologies.map(technology => <div
                    className={"bg-teal-100 dark:border dark:border-teal-800 dark:bg-teal-800 rounded-xl p-2 hover:scale-110 transition-transform"} key={technology}>
                    <Image src={technology}
                           alt={imageAlt}
                           width={30}
                           height={30} className={"max-w-fit h-8"}/>
                </div>)}
            </div>
        </div>
    </div>
}

export default projectCard;