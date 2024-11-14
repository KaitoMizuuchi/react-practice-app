import "./assets/styles/common.scss";
import Header from "./layout/Header";
import Router from "./Router";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="l-main">
        <Router />
      </main>
    </div>
  );
}

export default App;
