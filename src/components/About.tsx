import React from "react";
import { User } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg text-gray-300 text-left">
              <p className="leading-relaxed mb-6">
                Hello! I'm <strong>Armin</strong>, a full-stack developer with
                over three years of professional experience in building and
                scaling web applications. My background spans both backend and
                frontend — from reliable APIs in
                <strong> Python</strong> and <strong>Ruby on Rails</strong> to
                modern interfaces in
                <strong> React</strong> and <strong>TypeScript</strong>.
              </p>

              <p className="leading-relaxed mb-6">
                I’ve worked on SaaS platforms, AI-driven recruitment systems,
                and large-scale design tools used by engineers and business
                teams. My focus is on clean, maintainable code, scalable
                architecture, and delivering features that truly impact users. I
                enjoy combining data-driven logic with intuitive UI design to
                create complete, high-quality products.
              </p>

              <p className="leading-relaxed">
                Outside of coding, I like exploring new technologies,
                contributing to open-source projects, and learning about AI
                automation. I value teamwork, knowledge sharing, and continuous
                improvement — both in code and in life.
              </p>
            </div>

            <div className="mt-8 text-left">
              <h3 className="text-xl font-semibold text-white mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  🎓 Computer Science graduate from UR University of Science and
                  Technology
                </li>
                <li>🌍 Based in Poland, open to remote work worldwide</li>
                <li>
                  💻 Passionate about full-stack development (Python / Ruby /
                  React / TypeScript)
                </li>
                <li>
                  ⚡ Interested in AI tools, automation & clean software design
                </li>
                <li>☕ Coffee-powered problem solver and lifelong learner</li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-linear-to-br from-blue-400 to-cyan-400 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                  <User size={120} className="text-gray-400" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
