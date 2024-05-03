import { Link } from "react-router-dom";


const HomePage = () => {

const handleBtn = ()=>{
  console.log("object")

}



  return (
    <div className="grid grid-cols-2 h-[800px] mx-10">
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <p className="text-4xl">Learn new concepts for each question</p>
        <p className="text-xl text-custom-dark-quiz">We help you prepare for exams and quizes </p>
        <div className="flex gap-5 text-lg">
           <Link to={"/quiz-main"}> <button className="px-6 py-1 border-[2px]  border-custom-Yellow-Quiz text-custom-Yellow-Quiz">Start Solving</button></Link>
            <button onClick={handleBtn} className="border hover:border-[2px] px-4 py-1">know more</button>
        </div>
      </div>

      <div className="h-full flex justify-center items-center">
        <img src="/src/assets/image/banner.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
