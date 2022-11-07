import Header from "./Header";
import "./App.css";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="home">
        <header className="App-header">
          <Header />
          <div className="Sub-container">
            <Main />
            <Footer />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
