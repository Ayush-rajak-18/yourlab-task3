
const Submitted = () => {
  return (
      <form className="flex items-center justify-center flex-col h-[60vh] font-bold gap-[2rem]">
        <div>
            <h1 className="text-[1.3rem] text-center">Your Appointment Has successfully <br /> Booked</h1>
        </div>
        <div>
            <button type="submit" className="text-[1.2rem] font-bold py-[0.4rem] px-[5rem] bg-[lightblue] font-sans tracking-tighter">Back To Home</button>
          </div>
      </form>
  )
}

export default Submitted
