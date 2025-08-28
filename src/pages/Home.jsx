import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="p-10 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-start space-y-6">
        <h1 className="text-4xl font-bold">Hi, I'm Christina 👋</h1>
        <p className="text-2xl">
          I am a {" "}
          <ReactTyped
            strings={[" Software Engineer", " Builder", " Writer"]}
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
  );
}
