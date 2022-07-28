import AboutWallpaper from "./images/about-wallpaper.png"

const About = () => {
    return (
        <div id="about">
            <h1>This is our story</h1>
            <div className="about-showcase">
                <div className="about-info">
                    <p>
                        We started as a small team with a big goal.
                        <br />
                        To build something great! Etc.
                        <br />
                        ...
                    </p>
                </div>
                <img src={AboutWallpaper} alt="Wallpaper about us" />
            </div>
        </div>
    )
}

export default About
