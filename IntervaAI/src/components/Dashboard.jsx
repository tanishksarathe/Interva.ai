import { CalendarClock, FileBracesCorner, GraduationCap, LayoutDashboard, MessagesSquare, Sparkles, SquareCode } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='flex justify-between mt-2'>
        <img src="whiteLogo.png" alt="logo" className='w-30 h-20' />

        <div className='text-4xl font-bold flex items-center'>Welcome, Tanishk Sarathe User</div>

        <div className='bg-black px-5 gap-5 rounded-l-full text-white flex items-center'>
          <ul className='flex gap-3'>
            <li>Activity</li>
            <li>Premium</li>
          </ul>

          <img src="blackLogo.png" alt="profile" className='h-10 w-10 rounded-full border-white border' />

        </div>
      </div>

      <div className='w-70 absolute bg-white right-35 top-22 border rounded-2xl p-4'>
        
                <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'text-indigo-700 flex font-semibold gap-2 p-3 hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 hover:bg-indigo-300'}><LayoutDashboard />Dashboard</NavLink>

                <NavLink to={'/resumea'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 hover:bg-indigo-300'}><FileBracesCorner />Resume Analysis</NavLink>

                <NavLink to={'/practice'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 hover:bg-indigo-300'}><CalendarClock />Practice</NavLink>

                <NavLink to={'/mockint'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3  hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 hover:bg-indigo-300'}><MessagesSquare />Mock Interviews</NavLink>

                <NavLink to={'/resources'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3  hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 hover:bg-indigo-300'}><SquareCode />Resources</NavLink>

                <NavLink to={'/jobsintern'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3  hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 hover:bg-indigo-300'}><GraduationCap />Jobs & Internships</NavLink>

                <NavLink to={'/prepay'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 hover:bg-indigo-300'}><Sparkles />Go for Premium</NavLink>
      
      </div>

      <div className='bg-red-500 h-screen w-screen'>
      
      </div>
    </>

  )
}

export default Dashboard


/*

                <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300'}><LayoutDashboard />Dashboard</NavLink>

                <NavLink to={'/resumea'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300'}><FileBracesCorner />Resume Analysis</NavLink>

                <NavLink to={'/practice'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300'}><CalendarClock />Practice</NavLink>

                <NavLink to={'/mockint'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300'}><MessagesSquare />Mock Interviews</NavLink>

                <NavLink to={'/resources'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300'}><SquareCode />Resources</NavLink>

                <NavLink to={'/jobsintern'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300'}><GraduationCap />Jobs & Internships</NavLink>

                <NavLink to={'/prepay'} className={({ isActive }) => isActive ? 'text-white bg-indigo-700 flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300' : 'flex font-semibold gap-2 p-3 border rounded-lg hover:bg-indigo-300'}><Sparkles />Go for Premium</NavLink>

*/