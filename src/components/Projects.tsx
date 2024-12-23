import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ExternalLink size={20} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'abc',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      github: '',
      demo: '',
    },
    {
      title: 'Project 2',
      description: 'xyz',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
      github: '',
      demo: '',
    },
    {
      title: 'Project 3',
      description: 'xyz',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
      github: '',
      demo: '',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;