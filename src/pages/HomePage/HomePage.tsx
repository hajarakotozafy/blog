import { FC } from "react";
import "./HomePage.scss";

const HomePage:FC = () => {
    return (
        <div className="homepage-hero">
            <div className="homepage-hero-left">
                <p>ARTICLES</p>
            </div>
            <div className="homepage-hero-right">
                <p>INTERVIEWS</p>
            </div>
        </div>
    )
}

export default HomePage;