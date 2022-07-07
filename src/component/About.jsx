import React from "react";
import './About.css';

function About() {
  return (
    <div>
      <>
        <div className="box">
          <div className="container1">
            <div className="title">
              <p className="titleName">About Us</p>
            </div>
          </div>
          <div className="container2">
            <p className="information">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              vero, expedita nihil inventore autem dignissimos commodi quia eos
              minima aspernatur fugit repellat itaque ab natus blanditiis
              doloremque nesciunt obcaecati tenetur vitae quasi ipsa laborum
              cumque! Ab recusandae earum dignissimos obcaecati corporis quam
              ratione accusamus, doloremque officiis possimus! Quidem dolorum
              minus, voluptatum ratione error perferendis iure blanditiis in et
              modi magnam id incidunt vero esse assumenda sit vel. Quam
              aspernatur rerum ut numquam, reprehenderit tempore! Nisi,
              molestiae voluptates iste obcaecati consequatur placeat totam
              delectus impedit veniam veritatis dignissimos reiciendis porro
              fugit.
            </p>
          </div>
          <img src="man.png" className="man" alt="man" height={"400px"} />
        </div>
      </>
    </div>
  );
}

export default About;
