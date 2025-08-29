export default function Tools(props) {
    const { imgs } = props;

    return (
        <div>
            <h5 className="italic text-gray-400 text-center pt-20 pb-5">Tools & Frameworks</h5>
            <div className="flex flex-wrap justify-center item-center">
                {
                    imgs.map((img, i) => 
                        <img 
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            className="px-3 h-10 transition duration-400 ease-in-out transform translate-y-0 hover:scale-150 hover:-translate-y-3"
                        />
                    )
                }
            </div>
        </div>
    )
}
