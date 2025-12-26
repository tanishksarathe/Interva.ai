import CardOne from '../Repeaters/CardOne';
import CardThree from '../Repeaters/CardThree';
import CardTwo from '../Repeaters/CardTwo';
import Navbar from './Navbar'
import { CirclePlay, Star } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className='flex justify-center items-center flex-col h-lvh'>
        <div className='mt-5 leading-normal text-5xl w-[60%] text-center font-bold'>Ace Your Next Interview with <br /> AI-Powered Practice</div>
        <div className='w-[65%] text-center'>Practice realistic interviews with AI, get instance feedback on your answers and boost your chances of landing your dream job.</div>

        <div className='flex mt-10'>
          <div className='w-[25%] flex flex-col p-4 justify-start'>

            <div className='flex justify-around'>
              <div className='flex relative'>
                <img src="blackLogo.png" alt="audience" className='h-10 w-10 rounded-4xl border-white border-2' />
                <img src="blackLogo.png" alt="audience" className='h-10 w-10 absolute left-7 border-white border-2 rounded-4xl' />
                <img src="blackLogo.png" alt="audience" className='h-10 w-10 absolute left-13 border-white border-2 rounded-4xl' />
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-evenly'><Star size={15} fill='#FFBF00' /><Star size={15} fill='#FFBF00' /><Star size={15} fill='#FFBF00' /><Star size={15} fill='#FFBF00' /><Star size={15} fill='#FFBF00' /></div>
                <div className='font-bold text-sm'>18,000 (reviews)</div>
              </div>
            </div>
            <div className='pl-10 p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis tenetur laudantium similique!</div>
            <div className='pl-10 mt-2'>
              <button className='border rounded-xl px-3 py-2'>Start Mock Interview</button>
            </div>
          </div>

          <div className='w-[50%] flex justify-center'>
            <img src="undraw_video-call_i5de.svg" alt="screenicon" className='h-80 w-fit' />
          </div>

          <div className='w-[25%] flex flex-col justify-end gap-5'>
            <div className="font-bold text-xl">Let's turn your <br /> preperation into success</div>
            <div className="">Our top specialists help you create the project of your dreams</div>
            <div className="flex">
              <button className='flex ml-2 px-3 py-2 rounded-xl gap-2 border'><CirclePlay /> Watch Demo</button></div>
          </div>
        </div>

      </section>

      <section className='flex justify-between px-15 items-center mt-20' id='companies'>

        <div className='flex relative items-center'>
          <img src="blackLogo.png" alt="audience" className='h-10 w-10 rounded-4xl border-white border-2' />
          <img src="blackLogo.png" alt="audience" className='h-10 w-10 absolute left-7 border-white border-2 rounded-4xl' />
          <img src="blackLogo.png" alt="audience" className='h-10 w-10 absolute left-13 border-white border-2 rounded-4xl' />
          <img src="blackLogo.png" alt="audience" className='h-10 w-10 absolute left-19 border-white border-2 rounded-4xl' />
          <span className='h-10 w-10 flex text-sm justify-center items-center bg-white absolute left-25 border-black font-semibold border-2 rounded-4xl' >20k</span>
          <span className='font-semibold w-40 text-md absolute left-37'>Students Enrolled</span>
        </div>



        <div className='flex gap-10'>
          <img src="src\assets\image copy 4.png" alt="meta" className='h-15 w-30' />
          <img src="src/assets/image.png" alt="amazon" className='h-15 w-30' />
          <img src="src/assets/image copy 2.png" alt="apple" className='h-15 w-30' />
          <img src="src/assets/image copy 5.png" alt="netflix" className='h-15 w-30' />
          <img src="src/assets/image copy.png" alt="google" className='h-15 w-30' />
        </div>

      </section>


      <section className='flex mt-25 mx-20'>

        <div className="flex flex-col w-[50%]">
          <div className="pr-10">

            <div className="text-xl">How It Works</div>
            <div className="text-4xl my-3 w-80 font-bold">Simple Process, Powerful Results.</div>
            <div className="text-xl">Get job-ready in just 4 easy steps - from choosing your role to mastering real inetrview scenarios. Crack that job, makes your preperation Simple, Smart and Effective</div>

          </div>
          <div className="mt-24">
            <img src="src/assets/image copy 6.png" alt="professional" className='' />
          </div>
        </div>
        <div className="flex px-10 gap-5" id='cards'>
          <div className='flex flex-col gap-5'>
            <CardOne
              logo="src/assets/image copy 2.png"
              title="Add Resume"
              step="Step 1"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam veritatis cumque magni pariatur! Reprehenderit."
            />
            <CardOne
              logo="src/assets/image copy 2.png"
              title="Add Resume"
              step="Step 2"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam veritatis cumque magni pariatur! Reprehenderit."
            /></div>
          <div className='flex flex-col gap-5 pt-20'>
            <CardOne
              logo="src/assets/image copy 2.png"
              title="Add Resume"
              step="Step 3"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam veritatis cumque magni pariatur! Reprehenderit."
            />
            <CardOne
              logo="src/assets/image copy 2.png"
              title="Add Resume"
              step="Step 4"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam veritatis cumque magni pariatur! Reprehenderit."
            />
          </div>
        </div>


      </section>

      <section className='flex flex-col m-20 justify-center items-center'>

        <div>KEY FEATURES</div>

        <div className='font-bold text-4xl mt-5'>Smart Tools for AI-Powered Interview Practice</div>

        <div className='text-xl text-center mt-5'>Practice smarter, not harder - our AI-Powered tools simulate real interview scenarios, give instance feedback, and help you improve with every session.</div>

        <div className='flex flex-col gap-5 mt-10'>

          <div className='flex gap-5'>

            <CardTwo
              image="blackLogo.png"
              title="Career Vault"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores molestiae consectetur consequuntur"

            />

            <CardTwo
              image="blackLogo.png"
              title="The Prep Engine"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores molestiae consectetur consequuntur"
            />

          </div>

          <div className='flex gap-5'>

            <CardThree
              image="blackLogo.png"
              title="The Prep Engine"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores molestiae consectetur consequuntur"
            />
            <CardThree
              image="blackLogo.png"
              title="The Prep Engine"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores molestiae consectetur consequuntur"
            />
            <CardThree
              image="blackLogo.png"
              title="The Prep Engine"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores molestiae consectetur consequuntur"
            />


          </div>

        </div>

      </section>

      <section></section>

      <section></section>

      <section></section>

    </div>
  )
}

export default Home
