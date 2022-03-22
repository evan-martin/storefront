import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

import "./footer.styles.scss";

export default function Footer() {

    return (
        <div className="footer">
            <div className="logo">
                <a href="https://github.com/evan-martin/recipe-box" rel="noopener" style={{ textDecoration: "none" }}>
                    <p>Evan Martin</p>
                    <GitHubIcon />
                </a>
            </div>
            <a href="/about" style={{ textDecoration: "none" }} >
                <p>About</p>
            </a>
        </div>
    );
}