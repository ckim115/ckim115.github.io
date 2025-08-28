export default function ProjectCard(props) {
    const { name, description, img, link } = props
    // one project card

    return (
        <div>
            <h1>{name}</h1>
            <img 
                src={img}
                alt="Project image"
            />
            <p>{description}</p>
            {link !== null ? 
                <a href={link} target="_blank" rel="noopener noreferrer">Source</a> : 
                <p></p>
            }
        </div>
    )
}
