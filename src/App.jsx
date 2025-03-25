import { useState } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserTypePage from './components/UserTypePage';
import BusinessIdPage from './components/BusinessIdPage';
import VerificationPage from './components/VerificationPage';
import SuccessPage from './components/SuccessPage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      {currentPage === 'login' && <LoginPage onPageChange={handlePageChange} />}
      {currentPage === 'register' && <RegisterPage onPageChange={handlePageChange} />}
      {currentPage === 'userType' && <UserTypePage onPageChange={handlePageChange} />}
      {currentPage === 'businessId' && <BusinessIdPage onPageChange={handlePageChange} />}
      {currentPage === 'verification' && <VerificationPage onPageChange={handlePageChange} />}
      {currentPage === 'success' && <SuccessPage onPageChange={handlePageChange} />}
    </div>
  );
}

export default App;