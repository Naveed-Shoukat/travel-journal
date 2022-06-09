import './App.css';
import TravelJournalData from './TravelJournalData.js';
import TravelJournalItem from './components/TravelJournalItem';
import Nav from './components/Nav';

function App() {
  const TravelJournalItems = TravelJournalData.map((item) => (
    <TravelJournalItem key={item.id} {...item} />
  ));

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <section>{TravelJournalItems}</section>
      <footer>Developed by Navi's Development @ 2022</footer>
    </div>
  );
}

export default App;
