import React, { useState } from "react";
import "./styles.css";

const elemento = <h1>Talita</h1>;

function MostrarI(props) {
  return <p>{props.i}</p>;
}

export default function App(props) {
  //Incrementando usando Hook SetState... Guarda valor em Sessao
  const [i, setI] = useState(0);
  const increment = () => {
    setI(i + 1);
  };
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [estado, setEstado] = useState("ENTRADA");

  const iniciarJogo = () => {
    setEstado("RODANDO");

    if (estado === "ENTRADA") {
      return <buton onClick={iniciarJogo}>Começar a Jogar</buton>;
    }
  };

  return (
    <div className="App">
      <h1>
        Hello {elemento} e {props.name}
      </h1>
      <h2>
        {props.text} = {i}
      </h2>
      <button onClick={increment}>Increment</button>
      <MostrarI i={i} />
      <div>O Numero do seu Palite é {palpite}?</div>

      <button>Menor</button>
      <button>Acertou</button>
      <button>Maior</button>
    </div>
  );
}
