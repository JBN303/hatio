import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import AddProject from './AddProject';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/project-list/:userId" element={<ProjectList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-project" element={<AddProject />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
