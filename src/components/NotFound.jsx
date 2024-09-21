import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FileQuestion, ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return ( 
    <div className="display-flex h-screen bg-gray ">

      {/* Main content */}
      <main className="flex-1 flex items-center justify-content-center p-6">
        <div className="text-center space-y-6 max-w-md">
          <FileQuestion className="w-100  text-green mx-auto" style={{
            width:"150px",
            height:"200px",
            margin:"20px"

          }}/>
          <h1 className="text-4xl font-bold tracking-tight text-green-900">404 - Page Not Found</h1>
          <p className="text-xl text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="display-flex justify-content-between item-center">
            {/* Material UI Button with React Router Link */}
            <Button
              component={Link}
              to="/"
              className=" "
              sx={{backgroundColor:"#264c00 ",color:"white",marginRight:"20px"}}
            >
              Go to Dashboard
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
