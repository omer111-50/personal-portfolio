import { Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "@/lib/consts";
import BrandBackdrop from "@/components/BrandBackdrop";

export default function Resume() {
  return (
    <section className="relative overflow-hidden bg-background">
      <BrandBackdrop intensity={0.9} />

      <div className="container max-w-7xl mx-auto px-6 md:px-4 py-16 md:py-24 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading brand-gradient-text">
            Resume
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a quick overview of my education and work experience
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
              Education
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              {EDUCATION_DATA.map((education, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center">
                      <education.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 ml-4 p-6 shadow-sm hover:shadow-md transition-shadow glass-panel hover-raise">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {education.degree}
                      </h4>
                      <p className="text-primary font-medium mb-3">
                        {education.institution}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{education.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{education.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {education.description}
                      </p>

                      <div className="space-y-2">
                        {education.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
              Work Experience
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              {EXPERIENCE_DATA.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative pl-12 pb-8">
                    <div className="absolute left-0 top-2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center">
                      <experience.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 ml-4 p-6 shadow-sm hover:shadow-md transition-shadow glass-panel hover-raise">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {experience.role}
                      </h4>
                      <p className="text-primary font-medium mb-3">
                        {experience.company}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        <h5 className="font-medium text-gray-900">
                          Key Responsibilities:
                        </h5>
                        <ul className="space-y-2">
                          {experience.responsibilities.map(
                            (responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm text-gray-600">
                                  {responsibility}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
