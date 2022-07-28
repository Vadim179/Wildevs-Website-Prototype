import Logo from "./images/logo.png"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" className="active">
                        <img src={Logo} alt="Wildevs Logo" />
                    </a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
                <li>
                    <a href="#games">Games</a>
                </li>
                <li>
                    <a href="#support">Support</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
