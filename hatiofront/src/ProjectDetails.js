// frontend/ProjectDetails.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo) {
      setError('Todo cannot be empty');
      return;
    }

    try {
      // Here we can use a static projectId or fetch it from the user session
      const projectId = 'static_project_id'; // Or get this dynamically if necessary

      // Send the todo to the backend
      const response = await axios.post(`http://localhost:5007/api/projects/${projectId}/todos`, { todo });
      console.log(response.data);

      // Navigate back to the Project List
      navigate(`/project-list/${response.data.userId}`); // Assuming the response contains the userId
    } catch (err) {
      setError('Error adding todo');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add New Todo to Project</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default ProjectDetails;
