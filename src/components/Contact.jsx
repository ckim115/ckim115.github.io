// "Footbar"
// like navbar, insert link from app page
// github, linkedin, and email image
// should have a small gray title 'Contact'
export default function Contact() {
  return (
    <nav className="bg-white sticky bottom-0 z-50 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">Contacts</p>
        <div className="flex items-center justify-between h-16">
          {/* Contact Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/christina-hayoung-kim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/LinkedIn_icon.svg"
                alt="LinkedIn"
                class="size-10"
              />
            </a>
            <a
              href="https://github.com/ckim115"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/Octicons-mark-github.svg"
                alt="GitHub"
                class="size-10"
              />
            </a>
            <a href="mailto:christina.hayoung@gmail.com">
              <img
                src="images/email.png"
                alt="Email"
                class="size-10"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
