import Mount from '../assets/Mount.png'
import Button from '@mui/material/Button';
function Banner() {
  return (
    <>
      <div className="bg-slate-700 h-[700px] w-full relative">
        <div className="h-full w-1/2 absolute left-0">
        <div className="mt-20 ml-10  h-28 w-96 absolute top-0">
          <h1 className=" text-white text-center text-7xl font-bold font-sans ">AgriSolln</h1>
        </div>
            <div className="ml-16">
              
              <div className=" mt-[199px]  w-[600px] h-[500px] relative ">
                <p className=" w-55 h-72 border-b-2 border-white text-white text-md font-bold font-sans text-justify">
                    ___________ Leading agricultural product manufacturer dedicated to innovation and sustainability.
                    With a commitment to enhancing farming practices, we produce high-quality fertilizers, pesticides, 
                    and seeds designed to optimize crop yields and promote environmental health. 
                    Our products are trusted by farmers worldwide to deliver consistent, reliable results season after season.
                </p>
                <div className="w-1/3 h-24 absolute left-0 bottom-0">
                  <button className="w-full h-1/2 absolute inset-x top-0" >
                    <Button className="h-full w-full"variant="contained" color="success"  sx={{fontSize:20}} >Click</Button>
                  </button>
                </div>
                <div className="w-1/3 h-24 absolute right-0 bottom-0">
                  <button className="w-full h-1/2 absolute inset-x-30 top-0">
                    <Button className="h-full w-full"variant="contained" color="success"  sx={{fontSize:20}}>Click</Button>
                  </button>
                </div>

                </div>  
            </div>
        </div>
        <div className="bg-gradient-to-l from-black  h-full w-1/2 absolute right-0">
          <div className="ml-12">
            <div className="w-[800px] h-96 mt-36">
                <img className="display-block w-[690px] h-50   absolute top-0"src={Mount} alt="" />
              </div>
              
            </div>
          </div>
        </div>
      <div>
        
      </div>
    </>
  )
}

export default Banner
