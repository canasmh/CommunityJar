import React from "react";
import "./Footer.css"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
    <footer>
        <p>© CommunityJar {currentYear}</p>
    </footer>
    )
}

export default Footer;