import './index.css'

//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className="primeiro-checkpoint-card-component"
      style={{
        backgroundColor: props.cardData.color,
      }}
    >
      <div className="card-body">
        <h3
          className="card-title"
          style={{ 
            color: "#333333",
            mixBlendMode: "difference",
            filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
          }}
        >
          {props.cardData.color}
        </h3>
        <p
          className="card-text small"
          style={{ 
            color: "#333333",
            mixBlendMode: "difference",
            filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
          }}
        >
          {props.cardData.name}
        </p>
      </div>
    </div>
  );
}