import React from 'react';
import JobCard from '../components/JobCard';


const Jobs = () => {
  const jobList = [
    { title: 'Frontend Developer', location: 'Remote', description: 'Build amazing UIs with React.' },
    { title: 'Backend Developer', location: 'New York', description: 'Develop robust APIs with Node.js.' },
    { title: 'UX Designer', location: 'San Francisco', description: 'Design intuitive user experiences.' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Explore Our Job Opportunities
        </h1>
        <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
          {jobList.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              location={job.location}
              description={job.description}
            />
          ))}        
        </div>
      </div>
    </div>
  );
};

export default Jobs;

