import { useState } from "react"
import { useEffect } from "react"

function UserCard(props) {
    let badges = ["Novice 🐥","Beginner 💪","Challenger ⚔️", "Legend 🏆", "Master 🎓", "Guru 🏅","Beyonder ⭐","Top 1% ☝️"]
    let scoreDivisions = Math.ceil(100/badges.length)
    return (
        <div className="card">
            <div>
                <img src={props.user.avatar} alt="" />
            </div>
            <div className="titles">
                <h3>
                    {props.user.name}
                </h3>
                <p>
                    {props.user.email}
                </p>
                <p>
                    {props.user.title}

                </p>
                <p>
                    Score:{props.user.score}

                </p>
                <h2>
                    {badges[Math.floor((props.user.score/scoreDivisions))]}
                </h2>
            </div>
        </div>
    )
}
export default UserCard
