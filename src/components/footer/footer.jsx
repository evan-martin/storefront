import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';

import "./footer.styles.scss";

export default function Footer() {

    return (
        <div className="footer">
            <div className="logo">
                <p>Evan Martin</p>
                <a href="https://www.evan-martin.dev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <AccountCircleIcon />
                </a>
                <a href="https://github.com/evan-martin/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/evan-martin-2a4ba5225/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <LinkedInIcon />
                </a>
            </div>
            <div className="logo" >
            <a href="/about" style={{ textDecoration: "none" }} >
                <p>About</p>
                <InfoIcon />
            </a>
            </div>
        </div>
    );
}