import React from "react";
import * as C from "./style";

import Projeto1 from "../../../assets/img/thumbProjects/1650604095810.jpg";
import Projeto2 from "../../../assets/img/thumbProjects/Thumb-Site-Academia.PNG";
import Projeto3 from "../../../assets/img/thumbProjects/Thumb-Landing-Page-Cursos.PNG";

export const Projetos = () => {
  return (
    <C.Projetos id="projetos">
      <C.Container>
        <C.Card>
          <div className="image">
            <img src={Projeto1} alt="" />
          </div>
          <h2>Projeto WatchMe</h2>
          <p>Primeiro desafio do curso ignite de React da Rocketseat</p>

          <div className="buttons">
            <a className="live" href="#">
              Live
            </a>
            <a
              className="repo"
              href="https://github.com/thefoxdeveloper/primeiro-desafio-ignite"
            >
              Repo
            </a>
          </div>
        </C.Card>

        <C.Card>
          <div className="image">
            <img src={Projeto2} alt="" />
          </div>
          <h2>Site Academia</h2>
          <p>
            Projeto criado para portfólio.Trata-se de um site para academia
            divulgando os seus serviços
          </p>

          <div className="buttons">
            <a className="live" href="#">
              Live
            </a>
            <a className="repo" href="#">
              Repo
            </a>
          </div>
        </C.Card>

        <C.Card>
          <div className="image">
            <img src={Projeto3} alt="" />
          </div>
          <h2>Landing Page Curso</h2>
          <p>
            Projeto realizado para o meu portfólio. Trata-se de uma landing page
            de divulgação para cursos de programação.
          </p>

          <div className="buttons">
            <a className="live" href="#">
              Live
            </a>
            <a className="repo" href="#">
              Repo
            </a>
          </div>
        </C.Card>
      </C.Container>
    </C.Projetos>
  );
};
