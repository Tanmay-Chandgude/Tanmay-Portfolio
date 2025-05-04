import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const AchievementCard = ({ achievement }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 rounded-lg">
        <Award className="text-blue-600" size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar size={16} />
          <span>{achievement.date}</span>
        </div>
        <p className="text-gray-600 mb-4">{achievement.description}</p>
        {achievement.link && (
          <a 
            href={achievement.link}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <span>View Certificate</span>
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Achievements = () => {
  const achievements = [
    {
      title: ' The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert ',
      date: 'November 2024',
      description: 'Well versed with MySQL',
      link: 'https://www.udemy.com/certificate/UC-fb22630d-28c4-4b8d-90d1-301f9dce0a54/',
    },
    {
      title: ' MongoDB - The Complete MongoDB Developers Course',
      date: 'October 2024',
      description: 'Well versed with MongoDB',
      link: 'https://www.udemy.com/certificate/UC-c9ddb604-daae-4257-bc45-6f87aac8256d/',
    },
    {
      title: ' The Complete Full-Stack Web Development Bootcamp',
      date: 'February 2025',
      description: 'Well versed with Frontend & Backend',
      link: 'https://www.udemy.com/certificate/UC-d32df6c6-314a-4a10-9288-67dc097ba81d/',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;