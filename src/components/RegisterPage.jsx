import Header from './Header';
import ProgressBar from './ProgressBar';

const RegisterPage = ({ onPageChange }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <Header />
        
        <ProgressBar currentStep={1} />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-8 text-center">Register</h2>
          
          <div className="mb-6">
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-600" name="id-type" defaultChecked />
                <span className="ml-2 text-gray-700">ID Card</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-600" name="id-type" />
                <span className="ml-2 text-gray-700">Passport</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">ID Card</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter code"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone number</label>
              <div className="flex">
                <div className="relative">
                  <select className="appearance-none h-full px-4 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>+856</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="20000-0000"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter email"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter password"
                />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Upload ID Card Photo</label>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-indigo-600">Upload file (PDF & JPG)</span>
                </div>
              </button>
            </div>
            
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                I agree to <a href="#" className="text-indigo-600 hover:underline">privacy policy</a> & <a href="#" className="text-indigo-600 hover:underline">term</a>
              </label>
            </div>
            
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => onPageChange('login')}
                className="py-2 px-6 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => onPageChange('userType')}
                className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;