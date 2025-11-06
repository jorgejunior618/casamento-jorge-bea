"use client";
import ItemPresente from "@/components/views/ItemPresente";
import listaPresentes from "@/mocks/lista-presentes";

export default function ListaPresentes() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#ffcbbd",
        }}
      >
        <div style={{ width: "1080px" }}>
          <h1>Lista de presentes</h1>
          <h2>Contagem regressiva: 2 meses e 13 dias</h2>
          <div
            style={{
              width: "90px",
              height: "120px",
              border: "10px solid white",
              borderBottom: "35px solid white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Foto</span>
            <span>Bonita</span>
          </div>
        </div>
      </header>
      <main>
        <ul
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {listaPresentes.map((presente, idx) => (
            <ItemPresente key={idx} presente={presente} />
          ))}
        </ul>
      </main>
    </div>
  );
}
