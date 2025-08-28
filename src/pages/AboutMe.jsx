export default function AboutMe() {

  return (
    <div className="p-10 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="p-10 text-left mt-4 text-lg h-screen flex-1 flex flex-col justify-center items-start space-y-6"> 
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mb-1.5">I am a Software Engineer and senior Computer Science student at San Jose State University (GPA 3.8, graduating May 2026), with hands-on experience developing scalable systems, AI/ML applications, and robotics simulations.</p>
        <p className="mb-1.5">At Walmart Global Tech, I designed and implemented a custom TypeScript-based MCP server integrating over 25 internal support tools with LLM agents, enabling secure and resilient AI-driven workflows. Previously, as a Computational Robotics Intern at Texas A&M, I developed radar sensor simulations in ROS/C++ to generate synthetic data for algorithm testing and autonomous vehicle modeling.</p>
        <p className="mb-1.5">My projects span across full-stack development, browser extensions, and robotics systems, with skills in Java, Python, Swift, JavaScript, Typescript, C, and GraphQL. I am passionate about building intelligent and user-focused systems, particularly at the intersection of AI and large-scale software.</p>
        <p className="mb-1.5">I am currently seeking opportunities in software engineering particularly frontend, backend, and fullstack work where I can continue applying my technical expertise to real-world challenges.</p>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="resources/kirby_shot.jpg"
          alt="Picture of Me"
          className="max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
