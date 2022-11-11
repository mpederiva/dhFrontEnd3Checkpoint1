import { useState } from "react";
import { Card } from "./Card";

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  const [errorForm, setErrorForm] = useState(false);
  const [cardName, setCardName] = useState("");
  const [colorName, setColorName] = useState("");
  const [allCards, setAllCards] = useState([
    {
      name: "Azul Royal Exemplo",
      color: "#1d44b8",
    },
  ]);

  function addColor(event) {
    event.preventDefault();

    const newCard = {
      name: cardName,
      color: colorName,
    };

    console.log(newCard);

    if (cardName === "" || colorName === "") {
      setErrorForm(true);
      return;
    } else {
      setErrorForm(false);
      setAllCards([...allCards, newCard]);
      setCardName("");
      setColorName("");
    }
  }

  return (
  <>
  <section className="primeiro-checkpoint-component">
    <div className="container">
      <h1>Adicionar nova cor</h1>
    </div>
    
    <form onSubmit={(event) => addColor(event)}>
      <div>
        <input
          id="cardName"
          type="text"
          placeholder="Nome da cor"
          onChange={(event) => setCardName(event.target.value)}
        />
      </div>
      
      <div>
        <input
          id="colorName"
          type="color"
          onChange={(event) => setColorName(event.target.value)}
        />
      </div>
      
      <div>
        <button type="submit"> Adicionar </button>
      </div>
    </form>
    
    {errorForm ? <span>Existe algum erro no seu formulário. Já conferiu se preencheu tudo?</span> : null}
  </section>
  
  <section className="primeiro-checkpoint-card-component">
    <div>
      {allCards.map((card) => {return <Card cardData={card} />;})}
    </div>
  </section>
  </>
  );
}

export default App;