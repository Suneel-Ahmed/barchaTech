import CalenderPage from "../calenderCompo/CalenderPage";



export default function BookCall() {
  return (
    <section
      id="book-a-call"
      className="book-call-section w-full my-[100px] lg:min-h-[1080px] h-auto lg:h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] lg:pt-[16vh] relative flex flex-col place-content-center place-items-center z-[50]"
    >
      <p className="mb-4 lg:mb-0 text-transparent text-[clamp(40px,5.5vw,103px)] text-center font-leagueSpartan font-semibold leading-[100%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] from-[30%] to-[#17c8f7]">
      Schedule Call
      </p>

      <div className="block w-full max-sm:mt-[20px] mt-[50px] ">
       <CalenderPage/>
      </div>

    
    </section>
  );
}
