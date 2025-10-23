import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "MindPal",
      period: "05.2024 - Present",
      projects: [
        {
          name: "Solar Design Platform",
          description:
            "A large-scale SaaS used by engineers and installers to design photovoltaic layouts, select mounting hardware, and generate engineering deliverables. The platform supports all roof types, advanced layout editing and complete documentation and data exports.",
          achievements: [
            "Developed backend logic in Ruby on Rails to configure complex solar panel layouts, factoring in roof geometry, weather conditions, and location constraints",
            "Led end-to-end integration with a partner platform, covering secure authentication, token-based APIs, encrypted data exchange, schema versioning, and robust error handling to enable seamless cross-system workflows",
            "Contributed to the mixed-orientation layout capability (combining portrait and landscape modules) to maximize roof coverage and design flexibility",
            "Built and extended CSV reporting pipelines for project exports, supporting consistent generation from a dataset of 150k+ projects",
            "Optimized analytics queries by eliminating N+1 patterns and pre-aggregating metrics, reducing worst-case request time from ~15 minutes to ~300 ms",
            "Offloaded long-running computations and document generation to background jobs with Sidekiq and sidekiq-cron, keeping request latency low and the UI responsive",
            "Managed object storage and large export assets via AWS S3",
          ],
        },
        {
          name: "AI Recruitment Chatbot & TikTok Agent",
          description:
            "AI-powered conversational systems designed to automate candidate engagement and pre-screening. Implemented both as a website chatbot integrated into the recruitment platform and as a TikTok agent operating independently as a high-volume acquisition channel.",
          achievements: [
            "Delivered a virtual recruiter that cut response times from 2 days to 30 seconds, increasing candidate engagement and conversion into applications",
            "Automated collection and validation of candidate data, reducing incomplete submissions and enabling smoother recruitment workflows",
            "Built recruiter-facing tools: candidate list management, job board, and job offer creation panel, streamlining the posting and tracking of offers",
            "Launched an AI-driven TikTok bot that engaged job seekers directly with conversational Q&A",
            "Handled 100+ candidate interactions daily and directed applicants into the recruitment platform for further processing",
            "Automated candidate engagement on a TikTok account with 55k+ followers and 200k+ likes, operating up to 20 hours daily as a scalable top-of-funnel acquisition channel.",
          ],
        },
        {
          name: "Recruitment Platform — AI-powered hiring tools",
          description:
            "A global SaaS platform for recruiters and candidates, offering CV parsing, job matching, ATS integrations, resume optimization, automated communication, and AI-assisted recruiting workflows. Delivered as separate recruiter- and candidate-facing products with deeply integrated AI capabilities.",
          achievements: [
            "Engineered scalable backend services in Python + Django, delivering reliable APIs consumed daily by recruiter and candidate apps",
            "Implemented AI-driven CV parsing and job matching (rule-based scoring, keyword extraction), reducing recruiter screening workload by up to 60%",
            "Delivered Resume Checker, an AI-powered feature performing in-depth CV analysis to identify missing information, highlight weaknesses, and provide personalized improvement tips to hundreds of candidates each month",
            "Enabled the marketing team to run large-scale email campaigns using SendGrid, managing scheduling, batching and compliance to deliver thousands of messages weekly",
            "Built asynchronous pipelines with Celery + Redis, processing documents 5x faster during peak load without blocking user workflows",
            "Managed Azure infrastructure: Blob Storage, secrets, AI model hosting, backups with versioning, and scalability for high availability",
            "Collaborated across frontend, product, and design teams to deliver end-to-end flows",
          ],
        },
      ],
    },
    {
      title: "Software Developer & IT Specialist",
      company: "LukeStore",
      period: "01.2023 - 05.2024",
      projects: [
        {
          name: "",
          description:
            "E-commerce company specializing in multichannel retail across online marketplaces. Responsible for workflow automation, data pipelines, and IT infrastructure support.",
          achievements: [
            "Automated data collection by building Python scrapers (Requests, BeautifulSoup) for 10+ marketplaces, reducing manual research time by ~4 hours per day",
            "Delivered a Django + SQLite web application for warehouse task and delivery tracking, improving daily coordination and visibility of logistics operations",
            "Streamlined back office processes by automating reporting, label generation, and stock updates with scheduled jobs, cutting routine administrative workload by ~50%",
          ],
        },
      ],
    },
    {
      title: "IT & Web Administrator",
      company: "Aquaquímica",
      period: "06.2019 - 07.2019",
      projects: [
        {
          name: "",
          description:
            "Industrial company specializing in water treatment, filtration, and purification solutions.",
          achievements: [
            "Improved company’s WordPress website by updating product and service content, ensuring customers always had accurate information",
            "Enhanced brand visibility through the design of marketing banners and promotional graphics used in online campaigns",
            "Supported day-to-day IT operations, helping maintain reliable communication and system uptime for staff",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise
            and delivering results
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-linear-to-b from-blue-400 to-cyan-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[17px] top-1/2 -translate-x-1/2 -translate-y-1/2 transform md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-gray-900"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-violet-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                    {exp.projects.map((project, projIdx) => (
                      <div key={projIdx}>
                        {project.name && (
                          <p className="text-blue-400 font-semibold mb-2">
                            Project: {project.name}
                          </p>
                        )}
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">
                            Impact & Results:
                          </h4>
                          <ul className="space-y-1">
                            {project.achievements.map(
                              (achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-gray-300 text-sm flex items-start"
                                >
                                  <span className="text-blue-400 mr-2">•</span>
                                  {achievement}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        {projIdx < exp.projects.length - 1 && (
                          <hr className="my-6 border-t border-gray-700" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
