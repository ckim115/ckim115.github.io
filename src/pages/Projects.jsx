import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "SupportHub MCP Server",
    description: "MCP Server exposing Walmart's SupportHub API endpoints as tools for utilization through LLM chatbots",
    img: "placeholder",
    link: null
  }
]

export default function Projects() {
  return (
    <div>
      {
        projects.map((project, i) => 
          <ProjectCard 
            key={i}
            name={project.name}
            description={project.description}
            img={project.img}
            link={project.link}
          />
        )
      }
    </div>
  );
}
