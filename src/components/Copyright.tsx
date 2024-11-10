export default function Copyright() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-4">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Your Tour Website. All rights reserved.
          </p>

      
          <div className="flex flex-col mt-4 md:mt-0 text-sm text-center md:text-right leading-6">
            <p>Contact Us:</p>
            <p>Email: <a href="mailto:info@yourtourwebsite.com" className="text-blue-400 hover:underline">info@yourtourwebsite.com</a></p>
            <p>Phone: +1 (234) 567-8901</p>
            <p>Address: 123 Travel Ave, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

