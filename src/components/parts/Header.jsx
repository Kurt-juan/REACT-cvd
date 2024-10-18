
import { Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

const [isShow, setIshow] = React.useState(false)
const handleShow = () => setIshow (!isShow);

  return (
    <>
    <header className='py-6 '>
        <div className='container'>
            <div className="flex justify-between items-center">
            <Link to="/" className="text-black text-[clamp(20px,_5.5vw,_35px)] font-bold hover:text-white">ma.</Link>
            <nav className={`fixed lg:static top-[80px] h-screen z-50  lg:h-auto w-full lg:w-auto transition-all ease-out duration-500 ${isShow ? "left-0" : "left-full" }` } >
                <ul className='flex flex-col items-center mt-24 lg:mt-0 lg:flex-row gap-10'>
                    <li><Link className="text-black text-3xl lg:text-lg" to="/">Work</Link></li>
                    <li><Link className="text-black text-3xl lg:text-lg" to="/about">About</Link></li>
                    <li><Link className="text-black text-3xl lg:text-lg" to="/updates">Playground</Link></li>
                    <li><Link className="text-black text-3xl lg:text-lg" to="/services">Contact</Link></li>

                </ul>
            </nav>

            <button className='lg:hidden' onClick={handleShow}><Menu  stroke={"#fff"} size={30} /> </button>
            </div>

        </div>


    </header>
    </>
  )
}

export default Header
