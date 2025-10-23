import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-gray-900 via-blue-900/20 to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Armin Boleń
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="text-blue-400">Fullstack </span>Developer
            passionate about building exceptional web experiences that combine
            beautiful design with powerful functionality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={scrollToAbout} size="xl">
              Explore My Work
            </Button>

            <div className="flex space-x-4">
              <Link
                to="https://github.com/Szaneron"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/armin-bolen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </Link>
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <Button
          onClick={scrollToAbout}
          variant="ghost"
          size="icon"
          className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        >
          <ArrowDown className="size-8" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
