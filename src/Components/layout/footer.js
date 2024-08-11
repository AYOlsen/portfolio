import Navigation from "./navigation";

export default function Footer () {
    return (
        <footer className={`bg-brown-400 text-brown-700 mx-auto h-48`}>
            <div className="max-width mx-auto flex justify-around pt-6">
                <Navigation 
                    navClassName={``}
                    homeLinkClassName={`font-serif font-semibold text-xl`}
                    ulClassName={`flex flex-col text-base`}
                    divClassName={``}
                    liClassName={`mt-2`}
                />
                <div className={``}>
                    <p className="underline underline-offset-2">Get in touch</p>
                    <a href="mailto:olsenannayodit06@gmail.com">Email</a> <br/>
                    <a href="https://www.linkedin.com/in/anna-yodit-olsen-400b99250/">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}