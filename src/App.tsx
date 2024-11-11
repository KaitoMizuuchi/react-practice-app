import { useState } from "react";
import Router from "./Router";
import Header from "./layout/Header";
import "./assets/styles/common.scss";

function App() {
  return (
    <div className="app">
      <header className="l-header">
        <Header />
      </header>
      <main className="l-main">
        <Router />
      </main>
    </div>
  );
}

export default App;
