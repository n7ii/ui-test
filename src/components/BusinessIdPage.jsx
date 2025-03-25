import Header from './Header';
import ProgressBar from './ProgressBar';

const BusinessIdPage = ({ onPageChange }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <Header />
        
        <ProgressBar currentStep={3} />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-8 text-center">Enter your Business ID</h2>
          
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Business ID / TIN</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Search Code"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-24">
            <button
              type="button"
              onClick={() => onPageChange('userType')}
              className="py-2 px-6 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onPageChange('verification')}
              className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIdPage;