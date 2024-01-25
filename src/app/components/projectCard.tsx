import Image from "next/image";

const projectCard = ({imageSrc, imageAlt, name, description, technologies}: {
    imageSrc: string,
    imageAlt: string,
    name: string,
    description: string,
    technologies: string[]
}) => {
    return <div
        className={"flex flex-grow flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900"}>
        <Image src={imageSrc} alt={imageAlt} width={400}
               height={400}/>
        <h3 className={"text-lg font-medium pt-8 pb-2"}>{name}</h3>
        <p className={"py-2"}>{description}</p>
        <h4 className={"py-4 text-teal-600 dark:text-teal-500"}>Technologies I used</h4>
        {technologies.map(technologieText => <p
            className={"text-gray-800 py-1 dark:text-gray-400"}>{technologieText}</p>)}
    </div>
}

export default projectCard;