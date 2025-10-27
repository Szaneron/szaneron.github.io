import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import projectsData from "@data/projects.json";
import { techIcons } from "@constants/techIcons";
import PageNotFound from "@pages/PageNotFound";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

function TechIcon({ tech }: { tech: string }) {
  const iconData = techIcons[tech];
  const Icon = iconData?.Icon;
  const colorClass = iconData?.color ?? "text-blue-400";
  return Icon ? <Icon className={`${colorClass} w-5 h-5`} /> : null;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Navigation useRouterLinks forceTitle="Armin Boleń" disableTypewriter />
      <div className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-linear-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Project Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <p className="text-gray-400 text-sm mb-1">Scope</p>
              <div className="inline-flex items-center px-3 py-1 rounded-lg border border-gray-500/60 bg-gray-500/10">
                <span className="text-gray-200 text-sm font-medium">
                  {project.scope}
                </span>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">Status</p>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-lg border text-sm font-medium
                    ${
                      project.status === "In Progress"
                        ? "border-yellow-500/60 bg-yellow-500/10 text-yellow-400"
                        : project.status === "Finished"
                        ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-400"
                        : "border-gray-500/60 bg-gray-500/10 text-gray-300"
                    }`}
              >
                {project.status}
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">Project Type</p>
              <div className="inline-flex items-center px-3 py-1 rounded-lg border border-blue-500/60 bg-blue-500/10">
                <span className="text-blue-400 text-sm font-medium">
                  {project.project_type}
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button size="xl">
              <a
                className="inline-flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
                href={project.githubUrl}
              >
                <Github />
                <span>View Code</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.fullDescription}
              </p>
            </div>

            {/* Tech Stack - Horizontal */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-4">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl px-6 py-4 border border-gray-700 hover:border-blue-500 transition-colors group flex items-center space-x-3"
                  >
                    <TechIcon tech={tech} />
                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            {project.github_languages && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Languages
                </h2>
                <div>
                  {/* Language Bar */}
                  <div className="flex h-2 rounded-full overflow-hidden mb-6">
                    {project.github_languages.map((lang, index) => (
                      <div
                        key={index}
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                        className={`transition-all hover:opacity-80 border border-gray-900 ${
                          index === 0 ? "rounded-l-full" : ""
                        } ${
                          index === project.github_languages.length - 1
                            ? "rounded-r-full"
                            : ""
                        }`}
                        title={`${lang.name} ${lang.percentage}%`}
                      />
                    ))}
                  </div>

                  {/* Language List */}
                  <div className="flex flex-wrap gap-4">
                    {project.github_languages.map((lang, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-gray-300 font-medium">
                          {lang.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {lang.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Images Gallery */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Project Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-xl overflow-hidden border border-gray-700"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></span>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Challenge</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
