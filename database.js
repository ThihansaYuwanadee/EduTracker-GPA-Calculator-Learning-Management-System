const mongoose = require('mongoose');

async function createCollections() {
      await mongoose.connect("mongodb://localhost:27017/EDUTracker", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const db = mongoose.connection.db;
      await db.createCollection("students", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["first_name", "last_name", "email", "class_id"],
                properties: {
                    first_name: { bsonType: "string" },
                    last_name: { bsonType: "string" },
                    email: { bsonType: "string" },
                    phone: { bsonType: "string" },
                    gender: { bsonType: "string" },
                    date_of_birth: { bsonType: "date" },
                    address: { bsonType: "string" },
                    class_id: { bsonType: "objectId" }
                }
            }
        }
    });
      await db.createCollection("classes", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["classname", "classteacher"],
                properties: {
                    classname: { bsonType: "string" },
                    classteacher: { bsonType: "objectId" }
                }
            }
        }
    });
      await db.createCollection("semesters", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["semester_name"],
                properties: {
                    semester_name: { bsonType: "string" }
                }
            }
        }
    });
      await db.createCollection("exams", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["exam_name", "exam_date", "semester_id", "class_id"],
                properties: {
                    exam_name: { bsonType: "string" },
                    exam_date: { bsonType: "date" },
                    semester_id: { bsonType: "objectId" },
                    class_id: { bsonType: "objectId" }
                }
            }
        }
    });
      await db.createCollection("subjects", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["subject_name", "class_id", "credits"],
                properties: {
                    subject_name: { bsonType: "string" },
                    class_id: { bsonType: "objectId" },
                    credits: { bsonType: "int" }
                }
            }
        }
    });
      await db.createCollection("teachers", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["first_name", "last_name", "email", "subject_id", "class_id"],
                properties: {
                    first_name: { bsonType: "string" },
                    last_name: { bsonType: "string" },
                    email: { bsonType: "string" },
                    phone: { bsonType: "string" },
                    address: { bsonType: "string" },
                    subject_id: { bsonType: "objectId" },
                    class_id: { bsonType: "objectId" }
                }
            }
        }
    });
      await db.createCollection("results", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["student_id", "exam_id", "subject_id", "marks_obtained", "grade"],
                properties: {
                    student_id: { bsonType: "objectId" },
                    exam_id: { bsonType: "objectId" },
                    subject_id: { bsonType: "objectId" },
                    marks_obtained: { bsonType: "int" },
                    grade: { bsonType: "string" },
                    remarks: { bsonType: "string" }
                }
            }
        }
    });
      await db.createCollection("users", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["username", "password_hash", "role"],
                properties: {
                    username: { bsonType: "string" },
                    password_hash: { bsonType: "string" },
                    role: { bsonType: "string" },
                    student_id: { bsonType: "objectId" },
                    teacher_id: { bsonType: "objectId" }
                }
            }
        }
    });
      await db.createCollection("roles", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["role_name", "permissions"],
                properties: {
                    role_name: { bsonType: "string" },
                    permissions: { bsonType: "array", items: { bsonType: "string" } }
                }
            }
        }
    });
      await db.createCollection("gpa", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["grade", "points"],
                properties: {
                    grade: { bsonType: "string" },
                    points: { bsonType: "double" }
                }
            }
        }
    });

    console.log("Collections created successfully.");
    await mongoose.connection.close();
}

createCollections().catch(console.error);
