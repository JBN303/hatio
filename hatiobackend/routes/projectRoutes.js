const express = require('express');
const Project = require('../models/projectModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const project = new Project({ title: req.body.title });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).send('Error creating project');
  }
});
router.post('/projects', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Project title is required' });
    }

    const project = new Project({ title });
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save project' });
  }
});

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('todos');
    res.json(projects);
  } catch (error) {
    res.status(500).send('Error fetching projects');
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.params.userId });
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

router.post('/', async (req, res) => {
  try {
    const project = new Project({ title: req.body.title });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).send('Error creating project');
  }
});

module.exports = router;
