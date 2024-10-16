import React from 'react'

const Header = () => {
    return (
        <div style={{ height: "80px", backgroundColor: "sandybrown", paddingTop: "0px", paddingLeft: "290px" }}>

            <nav>
                <ul style={{ display: "flex", paddingTop: "30px", listStyleType: "none" }}>
                    <li style={{ margin: "0 15px", paddingRight: "90px" }}>
                        <a href="#" style={{ color: "black", textDecoration: "none", fontStyle: "italic", fontWeight: "bolder", fontSize: "20px" }}>Home</a>
                    </li>
                    <li style={{ margin: "0 15px", paddingRight: "90px" }}>
                        <a href="#" style={{ color: "black", textDecoration: "none", fontStyle: "italic", fontWeight: "bolder", fontSize: "20px" }}>About</a>
                    </li>

                    <li style={{ margin: "0 15px", paddingRight: "90px" }}>
                        <a href="#" style={{ color: "black", textDecoration: "none", fontStyle: "italic", fontWeight: "bolder", fontSize: "20px" }}>Services</a>
                    </li>

                    <li style={{ margin: "0 15px", paddingRight: "90px" }}>
                        <a href="#" style={{ color: "black", textDecoration: "none", fontStyle: "italic", fontWeight: "bolder", fontSize: "20px" }}>Contact</a>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default Header
