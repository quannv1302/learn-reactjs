import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
import Header from './components/Header';
import TodoFeature from './features/Todo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoFeature />
      <Footer />
    </div>
  );
}

export default App;
