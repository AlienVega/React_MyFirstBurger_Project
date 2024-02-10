import React from "react";
import BannerImage from "../assets/burger4.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          perferendis est consectetur ipsa itaque fuga impedit consequuntur
          assumenda aspernatur minima, ad iure ut molestias, quasi labore quod
          sapiente libero. Voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Labore esse fuga placeat necessitatibus recusandae
          corrupti eligendi illum culpa eveniet autem veritatis ea totam nobis
          dolore iusto ipsum, optio aspernatur vitae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis minus tempore aspernatur
          debitis nobis expedita quam sunt illum? Nisi ratione repellendus
          voluptatum magni non qui atque neque accusamus alias magnam! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur
          soluta fuga illo maxime porro quos beatae necessitatibus, quasi cumque
          amet possimus harum explicabo quo vel cupiditate odio commodi
          voluptate.
        </p>
      </div>
    </div>
  );
};

export default About;
