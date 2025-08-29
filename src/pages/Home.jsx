import { ReactTyped } from "react-typed";
import Tools from "../components/Tools";

const tool_images = [
  {
    src: "tool_resources/typescript-icon.svg",
    alt: "TypeScript"
  },
  {
    src: "tool_resources/javascript.svg",
    alt: "JavaScript"
  },
  {
    src: "tool_resources/java.svg",
    alt: "Java"
  },
  {
    src: "tool_resources/c.svg",
    alt: "C"
  },
  {
    src: "tool_resources/nodejs-icon.svg",
    alt: "NodeJS"
  },
  {
    src: "tool_resources/react.svg",
    alt: "ReactJS"
  },
  {
    src: "tool_resources/github-icon.svg",
    alt: "GitHub"
  },
  {
    src: "tool_resources/git-icon.svg",
    alt: "Git"
  },
  {
    src: "tool_resources/linux-tux.svg",
    alt: "Linux"
  },
  {
    src: "tool_resources/eclipse-icon.svg",
    alt: "Eclipse"
  },
  {
    src: "tool_resources/visual-studio-code.svg",
    alt: "VSCode"
  },
  {
    src: "tool_resources/pycharm.svg",
    alt: "PyCharm CE"
  }
]

export default function Home() {
  return (
    <div>
      <div className="p-10 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h1 className="text-4xl font-bold">Hi, I'm Christina 👋</h1>
          <p className="text-2xl">
            I am a {" "}
            <ReactTyped
              strings={[" Software Engineer", " Innovator", " Writer", " Problem Solver", " Contributer", " Collaborator"]}
              typeSpeed={100}
              loop
              backSpeed={40}
              cursorChar="|"
              showCursor={true}
            />
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="resources/headshot.jpg"
            alt="Picture of Me"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
      <Tools imgs={tool_images} />
    </div>
  );
}
