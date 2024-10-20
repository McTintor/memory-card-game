import './App.css'
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GameProvider from './components/Context';


function App() {


  return (
    <>
      <GameProvider>
      <Header />
      <GameBoard />
      </GameProvider>
    </>
  )
}

export default App
