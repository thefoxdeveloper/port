import React from "react";
import * as C from "./style";

import MyPhoto from "../../../assets/img/Photo-doug.jpg";
import SkillReact from "../../../assets/img/Progress-Vetores/Skill-React.png";
import Skillhtml from "../../../assets/img/Progress-Vetores/Skill-html.png";
import SkillCss from "../../../assets/img/Progress-Vetores/Skill-css.png";
import SkillJavascript from "../../../assets/img/Progress-Vetores/Skill-javascript.png";

export const Sobre = () => {
  return (
    <C.Sobre id="sobre">
      <C.Container>
        <C.Info>
          <h2>
            <span>Quem</span> eu sou?
          </h2>
          <p className="p1">
            Atualmente estou no 2º período da minha graduação em{" "}
            <strong>Ciencias da Computação</strong> pela universidade FAM, São
            Paulo/SP.
          </p>
          <p className="p2">
            Estou em uma conversão de carreira para a <strong>área tech</strong>
            , preferencialmente no desenvolvimento de sistemas{" "}
            <strong>front-end</strong>, na qual, tenho desejo de atuar
            profissionalmente. Cada dia fico mais entusiasmado por cada
            conhecimento que venho adquirindo nessa nova trajetória
            profissional.
          </p>
        </C.Info>

        <C.Skills>
          <div className="title">
            <h2>
              S<span>k</span>ills
            </h2>
          </div>
          <div className="skills">
            <div className="html">
              <img src={Skillhtml} alt="Progresso de aprendizagem em html" />
              <h3>HTML</h3>
            </div>

            <div className="css">
              <img src={SkillCss} alt="Progresso de aprendizagem em css" />
              <h3>CSS</h3>
            </div>

            <div className="javascript">
              <img
                src={SkillJavascript}
                alt="Progresso de aprendizagem em javascript"
              />
              <h3>JavaScript</h3>
            </div>

            <div className="react">
              <img src={SkillReact} alt="Progresso de aprendizagem em react" />
              <h3>ReactJS</h3>
            </div>
            <div className="react">
              <img src={SkillReact} alt="Progresso de aprendizagem em NodeJS" />
              <h3>NodeJS</h3>
            </div>
            <div className="react">
              <img src={SkillReact} alt="Progresso de aprendizagem em rails" />
              <h3>Rails</h3>
            </div>
          </div>
        </C.Skills>
      </C.Container>
    </C.Sobre>
  );
};
