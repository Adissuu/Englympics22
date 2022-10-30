import './App.css';
import CountdownTimer from './CountdownTimer';

function App() {
  const DATE_FEST = new Date('January 26, 2023 00:00:00');
  const DateFest = DATE_FEST.getTime();
  
  return (
    <div className="App">

      <footer>
        <CountdownTimer targetDate={DateFest} />
      </footer>
    </div>
  );
}

export default App;
