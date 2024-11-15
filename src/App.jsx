import "./assets/styles/common.scss";
import Header from "./layout/Header";
import Router from "./Router";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="l-main">
        <div className="l-main__container">
          <Router />
        </div>
      </main>
    </div>
  );
}

export default App;
