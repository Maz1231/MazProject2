import React from "react"

export default function Info() {
    return (
        <div>
            {/* https://i.pinimg.com/474x/01/cc/b4/01ccb4ca08573327ab3cbff9fcc973ec.jpg */}
            <img alt="Info Profile" className="info-img-proj1" src={process.env.PUBLIC_URL + "/Maz.JPG"} />
            <h3 className="info-name-proj1">Mazz</h3>
            <h4 className="info-position-proj1">Where is the Party at?</h4>
            <p className="info-email-proj1">mazin1231@hotmail.com</p>
            <div className="info-btns-proj1">
                <a href="mailto:mazin1231@hotmail.com"><button className="info-email-btn-proj1" type="button">Email</button></a>
                <a href="https://www.linkedin.com/in/mazin-idris-475313254/"><button className="info-linkedin-btn-proj1" type="button">LinkedIn</button></a>
            </div>
        </div>
    )
}