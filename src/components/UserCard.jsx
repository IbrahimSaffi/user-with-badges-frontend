function UserCard(props){
    return (
    <div className="card">
        <div>
            <img src={props.user.picture.thumbnail} alt="" />
        </div>
        <div className="titles">
        <h3>
      {props.user.name.title} {props.user.name.first} {props.user.name.last}
        </h3>
        <p>
            {props.user.email}

        </p>
        </div>
    </div>
    )
}
export default UserCard
