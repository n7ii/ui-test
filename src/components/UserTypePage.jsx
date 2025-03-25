import Header from './Header';
import ProgressBar from './ProgressBar';

const UserTypePage = ({ onPageChange }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <Header />
        
        <ProgressBar currentStep={2} />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-8 text-center">Choose User Type</h2>
          
          <div className="space-y-4">
            <div className="border border-indigo-200 bg-indigo-50 rounded-lg p-4 flex items-center">
              <input
                type="radio"
                id="mine-owner"
                name="user-type"
                className="h-5 w-5 text-indigo-600 border-gray-300"
                defaultChecked
              />
              <label htmlFor="mine-owner" className="ml-4 flex-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Mine Owner</p>
                    <p className="text-sm text-gray-500">For businesses engaged in mineral mining, hold mining concession and selling directly</p>
                  </div>
                </div>
              </label>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex items-center">
              <input
                type="radio"
                id="mineral-trader"
                name="user-type"
                className="h-5 w-5 text-indigo-600 border-gray-300"
              />
              <label htmlFor="mineral-trader" className="ml-4 flex-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Mineral Trader</p>
                    <p className="text-sm text-gray-500">For businesses that buy and sell minerals without mining, including mineral brokers and wholesalers</p>
                  </div>
                </div>
              </label>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex items-center">
              <input
                type="radio"
                id="logistic-company"
                name="user-type"
                className="h-5 w-5 text-indigo-600 border-gray-300"
              />
              <label htmlFor="logistic-company" className="ml-4 flex-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Logistic Company</p>
                    <p className="text-sm text-gray-500">For business providing logistic services for moving mineral from mines to stockyards, customers' destination</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => onPageChange('register')}
              className="py-2 px-6 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onPageChange('businessId')}
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

export default UserTypePage;