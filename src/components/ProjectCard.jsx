export default function ProjectCard(props) {
    const { name, description, img, tools, link } = props
    // one project card

    return (
        <div>
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <img
                    src={img}
                    alt="Project image"
                    className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r object-contain"
            />
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {description}
                </p>
                <p className="mt-2 italic font-bold block font-sans leading-relaxed antialiased text-xs text-gray-400">
                {tools}
                </p>
            </div>
            <div className="p-6 pt-0">
                {link !== null ? 
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        <a href={link} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </button> 
                    : <p></p>
                }
            </div>
            </div>
        </div>
    )
}
