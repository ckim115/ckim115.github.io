// "Footbar"
// like navbar, insert link from app page
// github, linkedin, and email image
// should have a small gray title 'Contact'
export default function Contact() {
  return (
    <nav className="bg-white sticky bottom-0 z-50 pt-6 w-full">
      <div className="px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <p className="text-center text-gray-400">Contacts</p>
        <div className="flex items-center justify-center h-16 w-full">
          {/* Contact Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/christina-hayoung-kim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="resources/LinkedIn_icon.svg"
                alt="LinkedIn"
                className="size-10"
              />
            </a>
            <a
              href="https://github.com/ckim115"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="resources/Octicons-mark-github.svg"
                alt="GitHub"
                className="size-10"
              />
            </a>
            <a href="mailto:christina.hayoung@gmail.com">
              <img
                src="resources/email.png"
                alt="Email"
                className="size-10"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
