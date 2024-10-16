import React from 'react'

const Footer = () => {
    return (
        <div style={{ height: "350px", backgroundColor: "black", padding: "80px", display: "flex", gap: "4em", paddingLeft: "190px" }}>
            <div style={{ height: "200px", width: "200px" }}>
                <h1 style={{ color: "white", paddingBottom: "10px" }}>Company </h1>
                <p style={{ color: "white" }}>Our mission is to deliver exceptional services and solutions to our clients, making sure to meet their needs.</p>
            </div>
            <div style={{ height: "200px", width: "200px" }}>
                <h1 style={{ color: "white", paddingBottom: "20px" }}>Quick link</h1>
                <a href="#" style={{ fontWeight: "bold", color: "white" }}>home</a> <br /><br />
                <a href="#" style={{ fontWeight: "bold", color: "white" }}>about</a> <br /><br />
                <a href="#" style={{ fontWeight: "bold", color: "white" }}>services</a><br /><br />
                <a href="#" style={{ fontWeight: "bold", color: "white" }}>contact</a>
            </div>
            <div style={{ height: "200px", width: "400px" }}>
                <h1 style={{ color: "white", paddingBottom: "40px" }}>Contact me </h1>
                <a style={{ color: "white" }} href="mailto:ansarimadiha881@gmail.com">ansarimadiha881@gmail.com</a>
                <br /><br />
                <p style={{ color: "white" }}>Phone no : 03162044275</p>
            </div>
        </div>

    )
}

export default Footer
