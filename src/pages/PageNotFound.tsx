import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skull } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
      <div className="text-center">
        <h1 className="flex items-center justify-center text-4xl font-bold mb-4">
          4<Skull size={36}></Skull>4
        </h1>
        <p className="text-xl text-gray-200 mb-4">Oops! Page not found</p>
        <Button size="xl">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
