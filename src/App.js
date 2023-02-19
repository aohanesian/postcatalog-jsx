import logo from './logo.svg';
import './App.css';
import PostCatalog from "./components/PostCatalog/PostCatalog";

function App() {
    return (
        <div className="App">
            <PostCatalog url={'https://jsonplaceholder.typicode.com/posts'}/>
        </div>
    );
}

export default App;
