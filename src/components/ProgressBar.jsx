const ProgressBar = ({ currentStep }) => {
    const steps = [
      { id: 1, name: 'User Information', icon: 'user-circle' },
      { id: 2, name: 'User Type', icon: 'users' },
      { id: 3, name: 'Business ID', icon: 'document-text' },
      { id: 4, name: 'Verification', icon: 'check-badge' },
      { id: 5, name: 'Completed', icon: 'check-circle' },
    ];
  
    return (
      <div className="w-full py-4">
        <div className="flex justify-between items-center">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step.id ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {step.icon === 'user-circle' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                  {step.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                  {step.icon === 'document-text' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                  {step.icon === 'check-badge' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />}
                  {step.icon === 'check-circle' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                </svg>
              </div>
              <div className={`mt-2 text-xs ${currentStep >= step.id ? 'text-indigo-600' : 'text-gray-500'}`}>
                {step.name}
              </div>
              {step.id < steps.length && (
                <div className="w-full px-4">
                  <div className="h-1 mx-auto bg-gray-200 rounded-full">
                    <div
                      className={`h-1 rounded-full ${currentStep > step.id ? 'bg-indigo-500' : 'bg-gray-200'}`}
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;