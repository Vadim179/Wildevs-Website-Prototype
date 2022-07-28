import DefaultGamePicture from "./images/default-games-picture.jpg"

const MemberCard = () => {
    return (
        <div className="card">
            <img src={DefaultGamePicture} alt="Coming soon" />
            <div className="container">
                <h4>Game 1</h4>
                <p>Our new game</p>
            </div>
        </div>
    )
}

export default MemberCard
