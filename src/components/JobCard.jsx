const JobCard = ({ title, location, description }) => (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-700 mt-4">{description}</p>
      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
        Apply Now
      </button>
    </div>
  );

export default JobCard

