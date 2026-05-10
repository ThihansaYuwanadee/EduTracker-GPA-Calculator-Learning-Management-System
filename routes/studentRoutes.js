// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get students by class ID
router.get('/class/:classId', async (req, res) => {
    try {
        const students = await Student.find({ class_id: req.params.classId });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students', error });
    }
});

// Add a new student
router.post('/', async (req, res) => {
    const studentData = req.body; // Expecting student data in the request body
    try {
        const newStudent = new Student(studentData); // Create a new student instance
        await newStudent.save(); // Save it to the database
        res.status(201).json({ message: 'Student added successfully', student: newStudent });
    } catch (error) {
        res.status(400).json({ message: 'Error adding student', error });
    }
});

// Delete a student by ID
router.delete('/:studentId', async (req, res) => {
    try {
        const result = await Student.deleteOne({ _id: req.params.studentId }); // Use _id if that's your model's identifier
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
});

module.exports = router;
