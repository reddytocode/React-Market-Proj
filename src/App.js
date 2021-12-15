import {Link} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hola react routing</h1>
        <nav>
            <Link to="/users">Users</Link>
            <Link to="/profiles">Profiles</Link>
        </nav>
    </div>
  );
}

export default App;
