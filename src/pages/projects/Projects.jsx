import React from "react";

const ProjectCard = ({ title, description, technologies, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-auto mb-8">
      <img className="w-full h-40 object-cover object-center" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {technologies}
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Developed a full-stack e-commerce website using React for the frontend and Node.js with Express for the backend. Integrated with Stripe for payment processing.",
      technologies: "React, Node.js, Express, MongoDB, Stripe",
      image: "eCommerce-Website-Features-1920-x-1080.jpg",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Developed a social media dashboard application that allows users to manage multiple social media accounts in one place. Implemented features such as scheduling posts, analytics, and user management.",
      technologies: "React, Redux, Node.js, MongoDB",
      image: "social-media-dashboard-6.png", // Replace with the actual URL of your image
    },
    
    
    {
      title: "Portfolio Website",
      description:
        "Designed and built a responsive portfolio website showcasing my projects and skills. Utilized React for the frontend and Tailwind CSS for styling.",
      technologies: "React, Tailwind CSS",
      image: "Best-free-portfolio-webiste-3.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
