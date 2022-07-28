import DefaultPicture from "./images/default-profile-picture.jpeg"

const Member = () => {
    return (
        <div className="card">
            <img
                src={DefaultPicture}
                alt="Picture of a team member"
                style={{ width: "100%" }}
            />
            <div className="container">
                <h4>John Doe</h4>
                <p>Engineer</p>
            </div>
        </div>
    )
}

export default Member
