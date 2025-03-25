import Header from './Header';
import ProgressBar from './ProgressBar';

const SuccessPage = ({ onPageChange }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <Header />
        
        <ProgressBar currentStep={5} />
        
        <div className="mt-16 text-center">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Your registration has been submitted</h2>
          <p className="mt-2 text-gray-600">
            Thank you for registering with us! Your information has been received and is now
            being processed. We'll send you a confirmation email shortly with further details.
          </p>
          
          <div className="mt-10">
            <img
              src="/confirmation.png"
              alt="Registration Confirmation"
              className="w-48 h-48 mx-auto object-cover"
            />
          </div>
          
          <button
            type="button"
            onClick={() => onPageChange('login')}
            className="mt-10 py-3 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;