

const CircularProgress = ({ percentage }) => {
  
  return (
    <div>
         <div className="relative w-36 h-36">
      <svg className="w-full h-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
        {/* Progress Circle inside a group with rotation */}
        <g className="origin-center -rotate-90 transform">
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="2" strokeDasharray="100" strokeDashoffset={100 - percentage}></circle>
        </g>
      </svg>
      {/* Percentage Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-2xl font-bold text-gray-800 dark:text-white">{percentage}%</span>
      </div>
    </div>
    </div>
  )
}

export default CircularProgress