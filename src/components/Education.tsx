import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Savitribai Phule Pune University',
      year: '2022-2026',
      courses: ['Data Structures', 'Database Systems', 'Web Development', 'Machine Learning'],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Fergusson College',
      year: '2020-2022',
      courses: ['Physics', 'Chemistry', 'Maths'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="flex flex-wrap justify-between gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3" // This ensures it adapts on smaller screens
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="text-blue-700" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-700 mb-4">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Calendar size={18} />
                    <span>{edu.year}</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Relevant Coursework:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {edu.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
