import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className='flex justify-between items-center pr-10 font-semibold'>
            <section className='' id='logoImage'>
                <img src="/whiteLogo.png" alt="Logo" className='object-cover h-30' />
            </section>
            <section className='flex border p-4 w-2xl justify-evenly rounded-4xl bg-black/90 text-white shadow-2xl backdrop-blur-lg' id='links'>

                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='#'>Extra</Link>

            </section>
            <section className='flex justify-center items-center gap-6' id='silo'>
                <button className='py-2 px-3 border rounded-3xl border-y-indigo-500'>Premium</button>
                <button className='py-2 border-y-indigo-500 px-3 border rounded-3xl'>{(signIn)? "Log Out" :"Sign In"}</button>
            </section>
        </div>
    )
}

export default Navbar
