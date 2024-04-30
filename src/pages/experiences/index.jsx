import React from "react";

const ExperienceCard = ({ title, company, duration, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-auto mb-8">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-600 text-sm">{company}</div>
        <div className="text-gray-600 text-sm">{duration}</div>
        <p className="text-gray-700 text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

const Experiences = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tech Company XYZ",
      duration: "June 2022 - August 2022",
      description:
        "Worked on developing new features for the company's flagship product. Collaborated with a team of engineers to implement scalable solutions.",
    },
    {
      title: "Web Developer",
      company: "Freelance",
      duration: "2019 - Present",
      description:
        "Developed and maintained websites for various clients using modern web technologies such as React, Node.js, and MongoDB.",
    },   {
      title: "Web Developer",
      company: "Freelance",
      duration: "2019 - Present",
      description:
        "Developed and maintained websites for various clients using modern web technologies such as React, Node.js, and MongoDB.",
    },   {
      title: "Web Developer",
      company: "Freelance",
      duration: "2019 - Present",
      description:
        "Developed and maintained websites for various clients using modern web technologies such as React, Node.js, and MongoDB.",
    },
    // Add more experiences as needed
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">My Experiences</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
