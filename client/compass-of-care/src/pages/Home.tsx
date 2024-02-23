import { logoWithWords, abstractShape } from '../assets'; 

const Home = () => {
  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden bg-tertiary inset-0 w-full h-full min-h-screen">
      <div className="flex flex-col items-center justify-center mx-auto text-center w-[90%] lg:w-[70%]">
        <img src={logoWithWords} alt="Compass of Care Logo" className="mt-10 -mb-4 w-[40%] h-auto" />
        <h1 className="text-5xl font-bold font-title text-primary -mt-4">Compass of Care</h1>
        <p className="text-primary font-subtitle text-xl mt-5 w-[30%]">Your ultimate oranisational friend to help you manage your staff, clients, events and documets.</p>
      </div>      
    </div>
  )
}

export default Home
