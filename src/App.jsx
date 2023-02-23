import { Footer } from './container/footer'
import { Header } from './container/header'
import { Sidebars } from './container/aside'
import { Main } from './container/main'

function App() {

  return (
    <>
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
   

      <Sidebars />

      <Main />
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
