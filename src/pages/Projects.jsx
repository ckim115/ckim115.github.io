import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "SupportHub MCP Server",
    description: "MCP Server exposing Walmart's SupportHub API endpoints as tools for utilization through LLM chatbots",
    img: "resources/182288589.png",
    tools: "TypeScript, ...",
    link: null
  },
  {
    name: "SupportHub Google ADK Agent",
    description: "Google ADK chatbot built with the intentions of evaluating for efficiency and accuracy alongside partner intern's LangGraph agent.",
    img: "resources/agent-development-kit.png",
    tools: "Python, ...",
    link: null
  }
]

export default function Projects() {
  return (
    <div className="p-10 flex flex-col md:flex-row items-center justify-between min-h-screen">
      {
        projects.map((project, i) => 
          <ProjectCard 
            key={i}
            name={project.name}
            description={project.description}
            img={project.img}
            tools={project.tools}
            link={project.link}
          />
        )
      }
    </div>
  );
}
