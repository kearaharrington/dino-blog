import logo from './logo.svg';
import './App.css';
import Dino from './Dino';

const dinoInfo = {
  title: "I love dinosaurs",
  author: "A Pterodactyl",
  body: "There are a lot of words here!",
  comments: ["Wow I like dinos too.", "I would eat a dinosaur", "oh dear"]
}

function App() {
  return (
    <div className="App">
      <Dino oneDino={dinoInfo}/>
    </div>
  );
}

export default App;
