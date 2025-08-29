import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "SupportHub MCP Server",
    description: "MCP Server exposing Walmart's SupportHub API endpoints as tools for utilization through LLM chatbots. Used on the Seller Center to assist chatbots that handle items, returns, and pricing issues.",
    img: "resources/182288589.png",
    tools: "TypeScript, Node.js, MCP Typescript SDK, SSE, HTTP Streamable, Postman",
    link: null
  },
  {
    name: "SupportHub Google ADK Agent",
    description: "Google ADK chatbot built with the intentions of evaluating for efficiency and accuracy alongside partner intern's LangGraph agent. Assist users on the Seller Center with items, returns, and pricing issues.",
    img: "resources/agent-development-kit.png",
    tools: "Python, Google ADK, FastAPI, OpenAI API",
    link: null
  },
  {
    name: "Radar Sensor Scene",
    description: "A working simulation of a vehicle radar sensor returning data from measurements on random points of static objects. Prototype for future work with simulated scenes for car sensor testing.",
    img: "resources/radar-sensor.png",
    tools: "ROS, C++, C, Makefile",
    link: "https://github.com/ckim115/radar-sensor-scene"
  },
  {
    name: "Firefox Tab Manager",
    description: "A firefox extension for organizing tabs. Contains options for sorting, filtering, and removing tabs based on user-defined parameters.",
    img: "resources/tab-manager.png",
    tools: "Javascript, HTML, CSS",
    link: "https://github.com/ckim115/Firefox-Tab-Organizer"
  },
  {
    name: "Hotel Finder",
    description: "A webapp providing a space for people to check on nearby hotels, their details, and a link to their website if any.",
    img: "resources/hotel-webapp.png",
    tools: "Python, HTML, Flask, SQLite, Google Places API, TripAdvisor API",
    link: "https://github.com/ckim115/Firefox-Tab-Organizer"
  },
  {
    name: "Personal Website",
    description: "Website introducing myself, my experience, and other information about myself.",
    img: "resources/website.png",
    tools: "React.JS, Javascript, HTML, TailwindCSS",
    link: "https://github.com/ckim115/ckim115.github.io"
  }
]

export default function Projects() {
  return (
    <div className="p-10 flex flex-wrap items-center justify-between min-h-screen">
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
