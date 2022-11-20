import React from "react";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import Head from "./Head";

function Produtos() {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto("https://ranekapi.origamid.dev/json/api/produto");

    // fetch("https://ranekapi.origamid.dev/json/api/produto")
    //   .then((r) => r.json())
    //   .then((json) => setProdutos(json));
  }, []);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produtos === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title={`Loja`} description={`Descrição do site Loja`} />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}></img>
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
}

export default Produtos;
