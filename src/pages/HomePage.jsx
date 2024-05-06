import { Link } from "react-router-dom";

const HomePage = () => {



  return (<>

<div className="grid  md:grid-cols-2  h-[800px] md:h-[400px] mx-10">
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <p className="text-4xl">Learn new concepts for each question</p>
        <p className="text-xl text-custom-dark-quiz">
          We help you prepare for exams and quizes{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-5 text-lg">
          <Link to={"/quiz-main"}>
            <button className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              Start Solving
            </button>
          </Link>
        <Link to={'/create-quiz'}>
         <button className="rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700">
           Create Quiz
          </button>
        </Link>
        </div>
      </div>

      <div className="h-full flex justify-center items-center">
        <img src="/src/assets/image/banner.png" alt="" />
      </div>
    </div>

    <div className="-mt-10 ml-6 sm:mt-24">
            <p className="text-base ml-12 text-gray-600 sm:text-xl lg:text-lg xl:text-xl">
              Earn new subscribers with #1 podcasting tool in the market. Create, distribute and monetize your show.
            </p>
            <div className="mt-12 ml-8">
              <div className="grid grid-cols-3  gap-0 sm:gap-6 xl:gap-8">
                <div className="text-center sm:flex sm:items-center sm:justify-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                        Active User
                      </div>
                      <p className="text-4xl font-bold text-gray-900">16K+</p>
                    </div>
                  </div>
                </div>
                <div className="text-center sm:flex sm:items-center sm:justify-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                        Episodes
                      </div>
                      <p className="text-4xl font-bold ml-4 text-gray-900">28K+</p>
                    </div>
                  </div>
                </div>
                <div className="text-center sm:flex sm:items-center sm:justify-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                        Series
                      </div>
                      <p className="text-4xl font-bold ml-4 text-gray-900">18+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-3">
              <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"><img className="aspect-square h-full w-full" alt="User 1" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /></span>
              <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"><img className="aspect-square h-full w-full" alt="User 2" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /></span>
              <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"><img className="aspect-square h-full w-full" alt="User 3" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /></span>
              <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full"><img className="aspect-square h-full w-full" alt="User 4" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" /></span>
              <img className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full" src="https://images.unsplash.com/photo-1527718641255-324f8e2d0421?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="5" />
            </div>
          </div>

  
  </>
    
  );
};

export default HomePage;
