import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Loja | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>gustavobarbosaof@yahoo.com</li>
          <li>(35)99952-5221</li>
          <li><a className={styles.link} href="https://www.linkedin.com/in/gustavo-barbosa-b2668023a/" target="_blank">LinkedIn</a></li>
          <li><a className={styles.link} href="https://github.com/gustavojb1" target="_blank">Github</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;
