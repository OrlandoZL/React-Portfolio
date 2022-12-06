import React from "react";
const profile_pic = require('')

export default function About() {

    return (
        <div className="page">


            <div className="about">
                <h1>
                    About me
                </h1>
                <img src={profile_pic} className="profile-picture"></img>
                <p>
                    Hi, My name is Orlando and I am a software developer. I graduated highschool this year. I am currently learning how to use react.
                </p>
            </div>


        </div>
    )
}