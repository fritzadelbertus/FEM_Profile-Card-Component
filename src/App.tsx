import ProfileCard from './components/ProfileCard'
import './App.scss'
import topSvg from './assets/bg-pattern-top.svg'
import bottomSvg from './assets/bg-pattern-bottom.svg'

function App() {

  return (
    <div className='App'>
      <div className='background'>
        <img className='top-pattern' src={topSvg} alt="Background pattern" />
        <img className='bottom-pattern' src={bottomSvg} alt="Background pattern" />
      </div>
      <ProfileCard />
    </div>
  )
}

export default App
