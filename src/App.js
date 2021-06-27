import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
  
    <footer className="footer">
       <br/>
       Open-source code by {""}
        <a href = "https://github.com/LauraMassam/weather-react" rel = "noreferrer" target="_blank">
           Laura Massam          
        </a>
    </footer>
      </div>
  );
}
