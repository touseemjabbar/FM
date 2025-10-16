export default function ProjectsVideo() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Case Study */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            {/* Video Section */}
            <div className="relative bg-black aspect-video">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/skipoffice.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Content Section */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
             Skip Office: Streamlining Skip Hire & Waste Management Operations
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow">
          Skip Office is a cloud-based skip management platform designed to simplify and modernize operations in the skip hire and waste management industry.From depot to delivery and collection, it delivers tools that reduce paperwork, improve visibility, and increase efficiency.
              </p>
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base inline-flex items-center"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right Card - General Info */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            {/* Video Section */}
            <div className="relative bg-gray-700 aspect-video">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/path-to-your-video-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Content Section */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Simplify your accounts payable with automation
              </h3>
              <p className="text-gray-600 text-sm sm:text-base flex-grow">
                AP automation replaces manual invoice handling with streamlined digital workflows — saving time, reducing errors, and improving visibility across your accounts payable process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}