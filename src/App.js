import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Create from './components/Create/create';
import Read from './components/Read/read';
import Update from './components/Update/update';

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <div>
            <h3>React Crud Operations</h3>
          </div>

          <div>
            <Route exact path="/create" component={Create} />
          </div>

          <div style={{ marginTop: 20 }}>
            <Route exact path="/" component={Read} />
          </div>

          <Route exact path="/update" component={Update} />

        </div>
      </Router>
    </>
  );
}

export default App;
