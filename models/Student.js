// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    gender: { type: String },
    date_of_birth: { type: Date },
    address: { type: String },
    class_id: { type: String, required: true }
    // other fields as needed
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
