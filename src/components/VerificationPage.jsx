import Header from './Header';
import ProgressBar from './ProgressBar';

const VerificationPage = ({ onPageChange }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <Header />
        
        <ProgressBar currentStep={4} />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-600 text-center">Verification Complete</h2>
          <p className="text-center text-gray-600 mt-2">
            The business registration code you have entered has been found in our database.<br />
            Our system has completed the following preliminary checks:
          </p>
          
          <div className="max-w-md mx-auto mt-6 space-y-2">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="ml-2 text-gray-700">ID Card matches an existing record in our registration database</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="ml-2 text-gray-700">Phone number matches business registration database</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="ml-2 text-gray-700">Business registration status is Active</p>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-4">
            You may now proceed to the next step.
          </p>
          
          <div className="mt-8 border border-gray-200 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-4">Business License Details:</h3>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Enterprise Number</div>
                <div className="font-medium">01-00325061</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Lao Enterprise and Name</div>
                <div className="font-medium">ບໍລິສັດ ພິນ ບໍ່ມາຍນິ່ງ ຈຳກັດ</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Name of Enterprise (English)</div>
                <div className="font-medium">Phu Bo Mining Co., Ltd</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Registered By</div>
                <div className="font-medium">Mr Dalong Zhang</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Capital Registration</div>
                <div className="font-medium">10,000,000,000 Kip</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Investment Type</div>
                <div className="font-medium">Domestic + Foreigner</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Registration Date</div>
                <div className="font-medium">23-08-2023</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Province</div>
                <div className="font-medium">Vientiane Capital</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">District</div>
                <div className="font-medium">Xaythani</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Village</div>
                <div className="font-medium">Nongbon</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Tax Information Number</div>
                <div className="font-medium">232873588-0-00</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Tax Registration Date</div>
                <div className="font-medium">26/02/2011</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-600">Status</div>
                <div className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="font-medium">Active</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded-md">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => onPageChange('businessId')}
              className="py-2 px-6 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onPageChange('success')}
              className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;