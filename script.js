  
document.addEventListener('DOMContentLoaded', function () {
      const menuItems = document.querySelectorAll('.sidebar ul li');
      const sections = {
          'dashboard': `
    <div class="dashboard-title">
        <h2>DASHBOARD OVERVIEW</h2>
    </div>

    <div class="containerdash">
        <!-- Left Column -->
        <div class="left-column">
            <div class="dashclock">
                <span id="hrs">00</span>
                <span>:</span>
                <span id="min">00</span>
                <span>:</span>
                <span id="sec">00</span>

            </div>
            <a href="https://chatgpt.com/" class="linkdash">
            <div class="box small">
                <img src="ChatGPT-Logo.png" alt="chatgptlogo" class="linklogo3">
                <p class="linkp1">WANT SOME HELP ?</p>
            </div>
            </a>
            <a href="about.html" class="linkdash">
            <div class="box small">
                <img src="favicon.png" alt="unilogohere" class="linklogo2">
                <p class="linkp2">WHATS NEW ?</p>
            </div>
            </a>
            <a href="https://kdu.ac.lk/" class="linkdash">
            <div class="box small">
                <img src="kdulogo.png" alt="unilogohere" class="linklogo">
                <p class="linkp3">YOUR UNIVERSITY</p>
            </div>
            </a>
        </div>
        
        <!-- Center Column -->
        <div class="center-box">
            <img src="logomain.png" class="dashmainlogo">
        </div>
        
        <!-- Right Column -->
        <div class="right-column">
            <div class="box">
                Welcome back 👋 <br>
                Stay on course , achieve more !
            </div>
            <div class="dashcalendar">
                <div class="left">
                    <p id="date">01</p>
                    <p id="day">Sunday</p>
                </div>
                <div class="right">
                    <p id="month">January</p>
                    <p id="year">2024</p>
                </div>
            </div>
            
`,
          'classes': `
        <div class="newgpacontainer">
            <div class="newgpacontentleft">
                <div class="gparating">
                    <h2>
                        <span class="gpacounter" data-target="4">4.00</span><br>
                        <sup>GPA</sup>
                    </h2>
                </div>
            </div>
            <div class="newgpacontentright">
                <h2 class="gpah2right">SGPA : <span id="sgpa">00.00</span></h2>
                <h2 class="gpah2right">YGPA : <span id="ygpa">00.00</span></h2>
                <h2 class="gpah2right">CGPA : <span id="cgpa">00.00</span></h2>
            </div>
            
        </div>
        
`,
          'groups': `
            <h2>Your Classes</h2>
            <div class="containercls" id="containercls">
                <div class="intake" id="class1" onclick="replaceUI('Intake 39', 'Information about Intake 39','Intake39')">
                    <img src="stud.png" alt="Intake 39">
                    <div class="intake-text">Intake 39</div>
                </div>
                <div class="intake" id="class2" onclick="replaceUI('Intake 40', 'Information about Intake 40','Intake40')">
                    <img src="stud.png" alt="Intake 40">
                    <div class="intake-text">Intake 40</div>
                </div>
                <div class="intake" id="class3" onclick="replaceUI('Intake 41', 'Information about Intake 41','Intake41')">
                    <img src="stud.png" alt="Intake 41">
                    <div class="intake-text">Intake 41</div>
                </div>
                <div class="intake" id="class4" onclick="replaceUI('Intake 42', 'Information about Intake 42','Intake42')">
                    <img src="stud.png" alt="Intake 42">
                    <div class="intake-text">Intake 42</div>
                </div>
            </div>
        `,
          'grades': `
    <div class="markscontainer">
        <h2 class="h2m">Select Year and Semester to View Results</h2>
        <div class="selector">
            <label for="year">Year:</label>
            <select id="year">
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
            </select>

            <label for="semester">Semester:</label>
            <select id="semester">
                <option value="1st Semester">1st Semester</option>
                <option value="2nd Semester">2nd Semester</option>
            </select>

            <button onclick="fetchResults()">Show Results</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Module</th>
                    <th>Marks</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody id="resultsTable">
                
            </tbody>
        </table>
    </div>
`,
          'settings': `
            <h2>Account Settings</h2>
            <div class="settings-container">
                <div class="profile-picture-section">
                    <div class="profile-picture-wrapper">
                        <img src="https://via.placeholder.com/150" alt="Profile Picture" id="profile-picture">
                        <label for="upload-profile-picture" class="upload-label">Change Picture</label>
                        <input type="file" id="upload-profile-picture" accept="image/*" style="display: none;">
                    </div>
                </div>
                <div class="settings-section">
                    <h3>Profile</h3>
                    <form id="profile-form">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" value="Aster Seawalker">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value="aster@example.com">
                        <button type="submit">Save Changes</button>
                    </form>
                </div>
                <div class="settings-section">
                    <h3>Security</h3>
                    <form id="security-form">
                        <label for="password">New Password:</label>
                        <input type="password" id="password" name="password">
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password">
                        <button type="submit">Update Password</button>
                    </form>
                </div>
                <div class="settings-section">
                    <h3>Notification Preferences</h3>
                    <form id="notifications-form">
                        <label for="email-notifications">
                            <input type="checkbox" id="email-notifications" name="email-notifications" checked>
                            Email Notifications
                        </label>
                        <label for="sms-notifications">
                            <input type="checkbox" id="sms-notifications" name="sms-notifications">
                            SMS Notifications
                        </label>
                        <button type="submit">Save Preferences</button>
                    </form>
                </div>
            </div>
        `,
        'logout': 'You have been logged out. Redirecting to the login page...'
    };
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
              if (item.id === 'logout') {
                  window.location.href = 'logout.php';
                return;
            }
              menuItems.forEach(el => el.classList.remove('active'));
              item.classList.add('active');
              const content = document.querySelector('.content');
            content.innerHTML = sections[item.id];
              if (item.id === 'dashboard') {
                initializeDashboardClockAndCalendar();
            } else if (item.id === 'classes') {
                initializeGPASection();
            }
        });
    });
      function initializeGPASection() {
        const rating = document.querySelector('.gparating');
          for (let i = 0; i < 100; i++) {
            const block = document.createElement('div');
            block.className = 'blockgpa';
            block.style.transform = `rotate(${3.6 * i}deg)`;
            block.style.animationDelay = `${i / 40}s`;
            rating.appendChild(block);
        }
          function updateGPA(sgpa, ygpa, cgpa) {
            document.getElementById("sgpa").textContent = sgpa.toFixed(2);
            document.getElementById("ygpa").textContent = ygpa.toFixed(2);
            document.getElementById("cgpa").textContent = cgpa.toFixed(2);
        }
          const sgpa = 4.00;
        const ygpa = 4.00;
        const cgpa = 4.00;
        updateGPA(sgpa, ygpa, cgpa);
    }
  function initializeDashboardClockAndCalendar() {
    const date = document.getElementById("date");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    const today = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date.innerHTML = today.getDate();
    day.innerHTML = weekDays[today.getDay()];
    month.innerHTML = allMonths[today.getMonth()];
    year.innerHTML = today.getFullYear();

    const hrs = document.getElementById("hrs");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    setInterval(() => {
        const currentTime = new Date();

        hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
        min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
        sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    }, 1000);
}
      const defaultMenuItem = document.getElementById('dashboard');
    if (defaultMenuItem) {
        defaultMenuItem.classList.add('active');
        document.querySelector('.content').innerHTML = sections['dashboard'];
    }
});
  const sidebar = document.getElementById("mySidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const createMessageBtn = document.getElementById("createMessage");
const notificationList = document.getElementById("notificationList");
const noMessagesDiv = document.getElementById("noMessages");
  let messages = []; 
  openBtn.onclick = function() {
    sidebar.classList.add("active");
    displayNotifications();
}
  closeBtn.onclick = function() {
    sidebar.classList.remove("active");
}
  function displayNotifications() {
    notificationList.innerHTML = ''; 

    if (messages.length === 0) {
        noMessagesDiv.style.display = 'block'; 
    } else {
        noMessagesDiv.style.display = 'none'; 
          messages.forEach((msg, index) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('notification');
            messageElement.innerHTML = `<p>Message ${index + 1}: ${msg}</p>`;
            notificationList.appendChild(messageElement);
        });
    }
}
  createMessageBtn.onclick = function() {
    const newMessage = prompt("Enter your message:");
    if (newMessage) {
        messages.push(newMessage); 
        displayNotifications(); 
    }
}
  
function replaceUI(title, content,classId) {
      var container = document.getElementById('containercls');
      container.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div id="studentList"></div>
        

        <div id="forclassAddStudentModal" class="forclass-modal">
            <div class="forclass-modal-content">
                <span class="forclass-close" onclick="forclassCloseAddStudentModal()">&times;</span>
                <h2 class="forclsh2">Add Student</h2>
                
                <form id="forclassAddStudentForm">
                    <input type="hidden" id="forclassClassId">
                    
                    <label for="forclassFirstName">First Name:</label>
                    <input type="text" id="forclassFirstName" required>
                    
                    <label for="forclassLastName">Last Name:</label>
                    <input type="text" id="forclassLastName" required>
                    
                    <label for="forclassReg">Registration Number:</label>
                    <input type="text" id="forclassReg">

                    <label for="forclassEmail">Email:</label>
                    <input type="email" id="forclassEmail" required>

                    <label for="forclassPhone">Phone:</label>
                    <input type="text" id="forclassPhone">
                    
                    
                    <label for="forclassGender">Gender:</label>
                    <select id="forclassGender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    
                    <label for="forclassDob">Date of Birth:</label>
                    <input type="date" id="forclassDob">
                    
                    <label for="forclassAddress">Address:</label>
                    <input type="text" id="forclassAddress">
                    
                    <button type="button" onclick="forclassAddStudent()">Add Student</button>
                    <button type="button" onclick="forclassCloseAddStudentModal()">Back</button>
                </form>
            </div>
        </div>

        <button onclick="forclassShowAddStudentModal()">Add New Student</button>
        <button onclick="goBack()">Back to Class List</button>
    `
    forclassShowClassDetails(classId);
}
  function forclassShowAddStudentModal() {
    document.getElementById("forclassAddStudentModal").style.display = "block";
}
  function forclassCloseAddStudentModal() {
    document.getElementById("forclassAddStudentModal").style.display = "none";
}
  function forclassValidateForm() {
    const firstName = document.getElementById("forclassFirstName").value;
    const lastName = document.getElementById("forclassLastName").value;
    const email = document.getElementById("forclassEmail").value;
      if (!firstName || !lastName || !email) {
        alert("All fields are required!");
        return false;
    }
    return true;
}


async function forclassAddStudent() {
    const isValid = forclassValidateForm();
    if (!isValid) return;

    const studentData = {
        class_id: document.getElementById("forclassClassId").value,
        first_name: document.getElementById("forclassFirstName").value,
        last_name: document.getElementById("forclassLastName").value,
        email: document.getElementById("forclassEmail").value,
        phone: document.getElementById("forclassPhone").value,
        gender: document.getElementById("forclassGender").value,
        dob: document.getElementById("forclassDob").value,
        address: document.getElementById("forclassAddress").value,
        registrationno: document.getElementById("forclassReg").value
    };

    try {
        const response = await fetch("http://localhost:3000/EDUTracker/students", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });

        if (!response.ok) {
              const error = await response.text();
            console.error('Error response:', error);  
            alert(`Error: ${error}`);
            return;
        }

        const result = await response.json();
        alert("Student added successfully!");
        forclassCloseAddStudentModal();
        forclassShowClassDetails(studentData.class_id); 

    } catch (error) {
        console.error("Failed to add student", error);
        alert("Something went wrong. Please try again later.");
    }
}
  async function forclassDeleteStudent(studentId) {
    if (confirm("Are you sure you want to delete this student?")) {
        try {
            const response = await fetch(`http://localhost:3000/EDUTracker/students/${studentId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const error = await response.json();
                alert(`Error: ${error.message}`);
                return;
            }

            alert("Student deleted successfully!");
            forclassShowClassDetails(document.getElementById("forclassClassId").value); // Refresh the student list

        } catch (error) {
            console.error("Failed to delete student", error);
        }
    }
}
  async function forclassShowClassDetails(classId) {
    document.getElementById("forclassClassId").value = classId;

    try {
        const response = await fetch(`http://localhost:3000/EDUTracker/classes/${classId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch students');
        }

        const students = await response.json();
        const studentList = document.getElementById("studentList");
        studentList.innerHTML = "<h3>Students in Class " + classId + "</h3>";

        students.forEach(student => {
            studentList.innerHTML += `
                <p>${student.first_name} ${student.last_name} - ${student.email} - ${student.phone}</p>
                <button onclick="forclassDeleteStudent('${student._id}')">Delete</button>
            `;
        });
    } catch (error) {
        console.error("Failed to fetch students", error);
    }
}
  function goBack() {
    const container = document.getElementById('containercls');
    container.innerHTML = `
        
    <h2>Your Classes</h2>
        <div class="containercls" id="containercls">
            <div class="intake" id="class1" onclick="replaceUI('Intake 39', 'Information about Intake 39')">
                <img src="stud.png" alt="Intake 39">
                <div class="intake-text">Intake 39</div>
            </div>
            <div class="intake" id="class2" onclick="replaceUI('Intake 40', 'Information about Intake 40')">
                <img src="stud.png" alt="Intake 40">
                <div class="intake-text">Intake 40</div>
            </div>
            <div class="intake" id="class3" onclick="replaceUI('Intake 41', 'Information about Intake 41')">
                <img src="stud.png" alt="Intake 41">
                <div class="intake-text">Intake 41</div>
            </div>
            <div class="intake" id="class4" onclick="replaceUI('Intake 42', 'Information about Intake 42')">
                <img src="stud.png" alt="Intake 42">
                <div class="intake-text">Intake 42</div>
            </div>
        </div>
    `;
}

function updateTime() {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
  function generateCalendar() {
    const calendarElement = document.getElementById('calendar');
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const monthName = new Intl.DateTimeFormat('en', { month: 'long' }).format(now);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    calendarElement.innerHTML = `<div class="header" colspan="7">${monthName} ${year}</div>
                                 <div class="header">Sun</div>
                                 <div class="header">Mon</div>
                                 <div class="header">Tue</div>
                                 <div class="header">Wed</div>
                                 <div class="header">Thu</div>
                                 <div class="header">Fri</div>
                                 <div class="header">Sat</div>`;
      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarElement.innerHTML += `<div class="day"></div>`;
    }
      for (let day = 1; day <= daysInMonth; day++) {
        if (day === today) {
            calendarElement.innerHTML += `<div class="day current-day">${day}</div>`;
        } else {
            calendarElement.innerHTML += `<div class="day">${day}</div>`;
        }
    }
}
generateCalendar();


const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;
  app.use(cors());
  const url = 'mongodb://localhost:27017';
const dbName = 'your_database_name';
const client = new MongoClient(url);
  app.get('/results', async (req, res) => {
    const year = req.query.year;
    const semester = req.query.semester;

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('results');
          const results = await collection.find({ year: year, semester: semester }).toArray();
        res.json(results);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving data', error: err });
    } finally {
        await client.close();
    }
});

