import React from "react";
import { Code, User, Database } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Code className="w-8 h-8" />,
      skills: [
        "Python",
        "Django",
        "Ruby on Rails",
        "RESTful APIs",
        "Celery",
        "Redis",
        "OpenAI API",
        "OpenCV",
        "Microservices",
        "Sidekiq",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Git",
        "Sendgrid",
        "Sentry",
        "Playwright",
        "CI/CD",
        "Heroku",
        "AWS",
      ],
      color: "from-fuchsia-500 to-violet-500",
    },
    {
      title: "Frontend",
      icon: <User className="w-8 h-8" />,
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Vite",
        "Zod",
        "ESLint",
        "Axios",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="group">
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-r ${category.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-1 lg:grid-cols-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors duration-200"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
