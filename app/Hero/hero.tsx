import React from 'react'

const Hero = () => {
    return (
        <div style={{ height: "500px", backgroundColor: "black" }}>
            <div style={{ display: "flex", padding: "80px", gap: "6em", marginLeft: "80px", paddingTop: "100px" }}>
                <div style={{ height: "290px", width: "440px", backgroundColor: "black" }}>
                    <h1 style={{ color: "white", fontStyle: "italic" }}>Hello I am Madiha  </h1>
                    <p style={{ color: "white", fontStyle: "italic", paddingTop: "20px", fontSize: "20px" }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat totam est, consectetur quaerat laborum eius eaque maxime, perferendis aliquam fuga quasi illum quia. Velit possimus at dolorem ad hic culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quo totam nesciunt asperiores odit facilis dignissimos voluptatem vitae! Sit porro ipsa quo harum ad eum sint laudantium nobis non maiores!</p>
                </div>
                <div style={{ height: "290px", width: "440px", backgroundColor: "orange" }}>
                    <img style={{ height: "290px", width: "440px" }} src="https://kababjees.com/images/highway%20pic1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
