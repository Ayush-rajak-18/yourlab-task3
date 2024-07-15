// import SelectButton from "./components/SelectButton";
import DocForm from "./pages/AppointmentForm";
import Submitted from "./pages/BookingFeedback";

export default function Home() {
  return (
   <main>
   <div className="flex items-center justify-center h-[100vh]">
    <div className="w-[100%] h-[100%] font-serif bg-[rgb(131_255_235)] flex items-center justify-center">
      <DocForm />
      {/* <SelectButton /> */}
    </div>
   </div>
   </main>
  );
}
