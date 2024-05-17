import React, { useState } from "react";

export function Contador() {
  // Declara uma nova variavel de state, na qual chamarei de "cont"
  const [cont, setCont] = useState(0);

  return (
    <div>
      <h1>Contador: {cont}</h1>
      <button onClick={() => setCont(cont + 1)}>Aumentar 1</button>
      <button onClick={() => setCont(cont - 1)}>Diminuir 1</button>
    </div>
  );
}
