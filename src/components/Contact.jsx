const contacts = [
  {
    ref: "https://www.linkedin.com/in/christina-hayoung-kim/",
    img: "resources/LinkedIn_icon.svg"
  }, 
  { 
    ref: "https://github.com/ckim115",
    img: "resources/Octicons-mark-github.svg"
  }, 
  {
    ref: "mailto:christina.hayoung@gmail.com",
    img: "resources/email.png"
  }
];

export default function Contact() {
  return (
    <nav className="bg-white bottom-0 sticky z-50 pt-6">
      <div className="px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <p className="text-center text-gray-400">Contacts</p>
        <div className="flex items-center justify-center h-16 w-full">
          {/* Contact Links */}
          <div className="flex space-x-6">
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.ref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contact.img}
                  alt={`Contact link ${i}`}
                  className="size-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
