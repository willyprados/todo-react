import { useState } from "react";
import Form from "../src/components/Form";

function Padre() {
  const [apellido, setApellido] = useState("Skywalker");
  const caracteristica = ["asmatico", "malgeniado"];
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
      {console.log("renderizo papa")}
      <h1>
        Soy tu Padre, en el lado oscuro tenemos 🍪 {apellido}{" "}
        {caracteristica[0]}
      </h1>
      <Hijo1
        apellido={apellido}
        lado={"oscuro"}
        caracteristica={caracteristica}
        log={e => console.log(e)}
        setApellido={setApellido}
      />
      <Hijo2 lado={"oscuro"} />
      <button onClick={() => setApellido("Skywalker")}>Skywalker</button>
      <button onClick={() => setApellido("Solo")}>Solo</button>
    </div>
  );
}

function Hijo1({ apellido, caracteristica, setApellido }) {
  const [mentiroso, setMentiroso] = useState(true);

  return (
    <div style={{ backgroundColor: "#f00", color: "#fff", padding: "20px" }}>
      {console.log("renderizo hijo1")}
      <h2>
        Soy el hijo oficial {apellido} {caracteristica[0]}
      </h2>
      <NietoDel1
        mentiroso={mentiroso}
        apellido={apellido}
        setApellido={setApellido}
      />
      <button onClick={() => setMentiroso(!mentiroso)}>Cambiar</button>
    </div>
  );
}

function Hijo2({}) {
  return (
    <>
      {console.log("renderizo hijo2")}
      <h2 style={{ backgroundColor: "#00f", color: "#fff", padding: "20px" }}>
        Soy un bastardo hijo de la mosa
      </h2>
    </>
  );
}

function NietoDel1({ mentiroso, apellido, setApellido }) {
  return (
    <>
      {console.log("renderizo NietoDel1")}
      <h3 style={{ backgroundColor: "#0f0", color: "#fff", padding: "20px" }}>
        Soy una gonorreita {apellido} malcriado{" "}
        {mentiroso ? "y mentiroso" : " pero honesto"}
        <button onClick={() => setApellido("Skywalker")}>Skywalker</button>
        <button onClick={() => setApellido("Solo")}>Solo</button>
      </h3>
    </>
  );
}

function App() {
  return <Padre />;
}

export default App;
