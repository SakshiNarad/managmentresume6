import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './App.css';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const profilePicRef = useRef(null);
  const fileInputRef = useRef(null);
  const resumeRef = useRef(null);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      profilePicRef.current.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const downloadPDF = () => {
    const element = resumeRef.current;
    html2pdf().from(element).save('resume.pdf');
  };

  return (
    <div className="App">
      <div className="buttons">
        <button className="edit-button" onClick={toggleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="download-button" onClick={downloadPDF}>
          Download as PDF
        </button>
      </div>
      <div className="resume" ref={resumeRef}>
        <div className="header">
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <img
            id="profilePic"
            src="/image/men.jpg"
            alt="Profile Picture"
            ref={profilePicRef}
            onClick={handleProfilePicClick}
            style={{ cursor: 'pointer' }}
          />
          <div className="name editable" contentEditable={isEditing}>Sam Sung
            <div className="role editable" contentEditable={isEditing}>Tutor</div>
          </div>
          <div className="contact-info">
            <div className="Contact">Contact</div>
            <div className="mobile editable" contentEditable={isEditing}>
              📞 +1234567890
            </div>
            <div className="email editable" contentEditable={isEditing}>
              ✉️ email@example.com
            </div>
            <div className="linkedin editable" contentEditable={isEditing}>
              🔗 linkedin.com/in/yourprofile
            </div>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <div className="address editable-container">
              📍 Lane 2 , Square Colony , Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur, USA
              <p className="editable" contentEditable={isEditing}></p>
            </div>
            <hr />
            <div className="education editable-container">
              <h2 className="editable" contentEditable={isEditing}> Education</h2>
              <h3 className="editable" contentEditable={isEditing}>Nov 1997- May 2000</h3>
              <p className="editable" contentEditable={isEditing}>MA History</p>
              <h3 className="editable" contentEditable={isEditing}>2000-2002</h3>
              <p className="editable" contentEditable={isEditing}>PHD in History</p>
            </div>
            <div className="key-skills editable-container">
              <h2 className="editable" contentEditable={isEditing}>Key Skills</h2>
              <ul className="editable" contentEditable={isEditing}>
                <li>Public speaking</li>
                <li>History Gk</li>
                <li>Communication skill</li>
                <li>Essay Delivery</li>
                <li>Crowd Handling</li>
              </ul>
            </div>
            <div className="languages editable-container">
              <h2 className="editable" contentEditable={isEditing}>Languages</h2>
              <p className="editable" contentEditable={isEditing}>English (Excellent)</p>
              <p className="editable" contentEditable={isEditing}>Hindi (Native)</p>
              <p className="editable" contentEditable={isEditing}>Marathi (Understanding)</p>
            </div>
          </div>
          <div className="right">
            <div className="career-objective editable-container">
              <h2 className="editable" contentEditable={isEditing}>Career Objective</h2>
              <p className="editable" contentEditable={isEditing}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut veritatis minus, eveniet animi quisquam enim tenetur quibusdam magnam pariatur, eaque molestias voluptatibus ad repellat similique! Iusto quidem veritatis non in.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dignissimos neque temporibus voluptatem quia? Saepe dolores eius velit magnam commodi?
              </p>
            </div>
            <hr />
            <div className="experience editable-container">
              <h2 className="editable" contentEditable={isEditing}>Experience</h2>
              <h3 className="editable" contentEditable={isEditing}>2004-2007</h3>
              <h3 className="editable" contentEditable={isEditing}>Highschool History Teacher</h3>
              <p className="editable" contentEditable={isEditing}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum aliquid unde dolores veritatis? Saepe, provident explicabo? Ullam doloremque voluptates modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum natus nesciunt enim illo facere quo mollitia omnis repudiandae ea.
              </p>
              <h3 className="editable" contentEditable={isEditing}>2008-2012</h3>
              <h3 className="editable" contentEditable={isEditing}>Lorem, ipsum dolor.</h3>
              <p className="editable" contentEditable={isEditing}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt dolorum inventore maxime esse facere modi maiores neque magni, dolorem officia, velit nemo eos totam, sunt quae est odio assumenda?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
