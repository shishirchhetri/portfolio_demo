import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'

function App() {

  return (
    <>
      <section className='bg-white px-10'>
        <div className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>spark</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill/>
            </li>
            <li><a href="#">Resume</a></li>
          </ul>
        </nav>
        </div>
      </section>
    </>
  )
}

export default App
