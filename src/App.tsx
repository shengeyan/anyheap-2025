import { CollaborativeWhiteboard } from './components/CollaborativeWhiteboard'
import { Header } from './components/Header'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CollaborativeWhiteboard />
      </main>
    </div>
  )
}

export default App