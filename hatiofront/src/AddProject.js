import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProject = ({ fetchProjects }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5007/api/projects', { title });
      setTitle('');
      fetchProjects(); // Reload project list
      navigate('/'); // Navigate to Project List
    } catch (err) {
      setError('Error creating project');
    }
  };

  return (
    <div>
      <h2>Create New Project</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
