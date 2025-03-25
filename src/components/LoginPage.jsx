import Header from './Header';

const LoginPage = ({ onPageChange }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8">
          <Header />
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-8">Login</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email / Phone number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email or Phone number"
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
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" id="remember-me" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                  Forgot password
                </a>
              </div>
              
              <button
                type="button"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign In
              </button>
              
              <button
                type="button"
                onClick={() => onPageChange('register')}
                className="w-full py-2 px-4 mt-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 bg-indigo-600 p-8 text-white">
          <div className="h-full flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Mineral Tracking System</h2>
              <p className="text-indigo-100">
                Manage documents, request quotes, track shipments and view summary
                reports in one platform.
              </p>
            </div>
            
            <div className="mt-auto">
              <img
                src="/trucks.png"
                alt="Mineral Transport Trucks"
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
