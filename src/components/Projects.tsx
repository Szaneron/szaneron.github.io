import React from "react";
import { Github, ArrowRight, Image } from "lucide-react";
import projectsData from "@data/projects.json";
import type { Project } from "@/types/project";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const projects: Project[] = projectsData;

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
            .filter((project) => project.showAsLarge)
            .map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 flex flex-col justify-between min-h-[400px]"
              >
                <div className="aspect-video bg-linear-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden flex items-center justify-center border-b border-gray-700">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image size={48} className="text-gray-400" />
                  )}
                </div>

                <div className="p-6 flex flex-col h-full flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.shortDescription}
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
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ArrowRight size={20} />
                        <span>Project Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {projects
            .filter((project) => !project.showAsLarge)
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
                    {project.shortDescription}
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
                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center text-xs space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ArrowRight size={16} />
                      <span>Details</span>
                    </Link>
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
