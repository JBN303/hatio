import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5007/api/projects');
      setProjects(response.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      <button onClick={() => navigate('/add-project')} style={{ marginBottom: '20px' }}>
        Add New Project
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <strong>ID:</strong> {project._id} | <strong>Title:</strong> {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
