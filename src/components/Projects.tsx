import React from "react";
import { Github, ArrowRight, Image } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "LifeHub",
      description:
        "A modular daily life manager featuring advanced recipe organization, shopping list and meal planning tools, as well as a dedicated module for managing personal finances.",
      techStack: [
        "Python",
        "Django",
        "PostgreSQL",
        "Swagger",
        "React",
        "TypeScript",
      ],
      githubUrl: "https://github.com/Szaneron/LifeHub",
      moreInfo: "#",
      featured: true,
    },
    {
      title: "Alpha Farm Bot",
      description:
        "A fully automated bot designed to optimize gold generation by taking over repetitive in-game tasks. It combines computer vision and OCR to analyze the game environment and make real-time decisions without human input.",
      techStack: [
        "Python",
        "OpenCV",
        "PyTesseract",
        "NumPy",
        "PyAutoGUI",
        "Pandas",
      ],
      githubUrl: "https://github.com/Szaneron/AlphaFarm",
      moreInfo: "#",
      featured: true,
    },
    {
      title: "Shopdex",
      description:
        "A web application created to support daily warehouse and logistics workflows, helping teams coordinate deliveries, tasks, and inventory management.",
      techStack: [
        "Python",
        "Django",
        "Sqlite",
        "OpenCV",
        "NumPy",
        "PostgreSQL",
        "Bootstrap",
      ],
      githubUrl: "https://github.com/Szaneron/Shopdex",
      moreInfo: "#",
      featured: false,
    },
    {
      title: "Battlewind",
      description:
        "A full-stack web application streamlining the organization and management of esports tournaments with automated brackets and transparent results.",
      techStack: [
        "Python",
        "Django",
        "OpenCV",
        "PyTesseract",
        "PostgreSQL",
        "Bootstrap",
      ],
      githubUrl: "https://github.com/Szaneron/Battlewind",
      moreInfo: "#",
      featured: false,
    },
    {
      title: "CookItUp",
      description:
        "A web application for discovering recipes and planning meals, powered by the Spoonacular API to deliver personalized nutrition and culinary inspiration.",
      techStack: [
        "Python",
        "Django",
        "Requests",
        "ReportLab",
        "Spoonacular API",
      ],
      githubUrl: "https://github.com/Szaneron/CookItUp",
      moreInfo: "#",
      featured: false,
    },
    {
      title: "Internet forum",
      description:
        "An interactive forum platform enabling users to create threads, ask questions, and build community through discussions and project collaboration.",
      techStack: ["Python", "Django", "SQLite", "Bootstrap"],
      githubUrl: "https://github.com/Szaneron/Internet-forum",
      moreInfo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring both personal projects and
            client collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 flex flex-col justify-between min-h-[400px]"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border-b border-gray-700">
                  <Image size={48} className="text-gray-400" />
                </div>

                <div className="p-6 flex flex-col h-full flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-lg border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex  justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.moreInfo}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ArrowRight size={20} />
                        <span>Project details</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700 group flex flex-col justify-between h-full"
              >
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-blue-400 text-xs rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.moreInfo}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
