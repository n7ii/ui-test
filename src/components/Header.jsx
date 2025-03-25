const Header = () => {
    return (
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src="/ministry-logo.png" alt="Ministry of Finance Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-lg font-medium">Ministry of Finance</h1>
      </div>
    );
  };
  
  export default Header;