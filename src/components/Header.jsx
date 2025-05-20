import chef from "../assets/chef-icon.png";
import "../index.css";

export default function Header(){
    return(
        <header className="header_container">
            <img src={chef} alt="chef-icon" className="header_img" />
            <h1 className="header_text">Chef Claude</h1>
        </header>
    )
}