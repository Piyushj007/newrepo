import React from "react";
import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [userType, setUserType] = useState("student");
  const [Userdata, setUserData] = useState({
    name: "",
    department: "",
    course: "",
    semester: "",
    resTopic: "",
    insID: "",
    institute: "",
    discription: "",
    resSubTopic: [""],
    resSubTopicFile: [],
  });
  // console.log(userType);
  // console.log(Userdata);
  console.log(Userdata.resSubTopic);

  function handelChange(e) {
    e.preventDefault();
    setUserData({
      ...Userdata,
      [e.target.name]: e.target.value,
    });
  }

  function addField(e) {
    e.preventDefault();
    setUserData((prevData) => ({
      ...prevData,
      resSubTopic: [...prevData.resSubTopic, ""],
    }));
  }

  function removeField(e, index) {
    e.preventDefault();
    const updatedResSubTopic = [...Userdata.resSubTopic];
    updatedResSubTopic.splice(index, 1);
    setUserData((prevData) => ({
      ...prevData,
      resSubTopic: updatedResSubTopic,
    }));
  }

  function handleDynChange(index, e) {
    const { value } = e.target;
    setUserData((prevData) => {
      const updatedResSubTopic = [...prevData.resSubTopic];
      updatedResSubTopic[index] = value;
      return { ...prevData, resSubTopic: updatedResSubTopic };
    });
  }

  function handleFileChange() {}

  return (
    <form action="">
      <div className="signup-container">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={Userdata.name}
            id="name"
            onChange={handelChange}
          />
        </label>
        <br />
        <label htmlFor="department">
          Department:
          <input
            type="text"
            name="department"
            value={Userdata.department}
            id="department"
            onChange={handelChange}
          />
        </label>
        <br />
        <label>are you faculty or a student</label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="userType"
            value="faculty"
            checked={userType === "faculty"}
            onChange={() => setUserType("faculty")}
          />
          Faculty
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="student"
            checked={userType === "student"}
            onChange={() => setUserType("student")}
          />
          Student
        </label>
        <br />
        <br />
        <br />

        {userType == "student" ? (
          <>
            <label htmlFor="course">
              course:
              <input
                type="text"
                name="course"
                value={Userdata.course}
                onChange={handelChange}
              />
            </label>
            <br />
            <label htmlFor="semester">
              semeter:
              <input
                type="text"
                name="semester"
                value={Userdata.semester}
                onChange={handelChange}
              />
            </label>
            <br />
            <label htmlFor="instituteid">
              Institute Id:
              <input
                type="text"
                name="insID"
                id="instituteid"
                value={Userdata.insID}
                onChange={handelChange}
              />
            </label>
            <br />
            <label htmlFor="researchTopic">
              Research Topic:
              <input
                type="text"
                name="resTopic"
                id="researchTopic"
                value={Userdata.resTopic}
                onChange={handelChange}
              />
            </label>
            <br />
            <label htmlFor="discription">
              Discription:
              <textarea
                type="textarea"
                name="discription"
                rows={6}
                cols={50}
                id="discription"
                value={Userdata.discription}
                onChange={handelChange}
              />
            </label>
            <br />
            {Userdata.resSubTopic.map((input, index) => (
              <div key={index}>
                <label htmlFor="researchSubTopic">
                {'Research Sub Topic ' + (index + 1) }
                  <input
                    type="text"
                    name="resSubTopic"
                    id="researchSubTopic"
                    required
                    value={Userdata.resSubTopic[index]}
                    onChange={(e) => handleDynChange(index, e)}
                  />

                  <input
                    type="file"
                    accept=".pdf"
                    required
                    value={Userdata.resSubTopicFile}
                    onChange={(e) => handleFileChange(e, index)}
                  />
                  <button onClick={(e) => removeField(e, index)}>remove</button>

                  <br />
                </label>

                <br />
              </div>
            ))}
            <button onClick={addField}>add</button>
          </>
        ) : (
          <>
            <br />
            <label htmlFor="institute">
              Institute:
              <input
                type="text"
                id="institute"
                value={Userdata.institute}
                onChange={handelChange}
              />
            </label>
            <br />
            <label htmlFor="instituteid">
              Institute Id:
              <input
                type="text"
                name="insID"
                id="instituteid"
                value={Userdata.insID}
                onChange={handelChange}
              />
            </label>
            <br />
            <label htmlFor="researchTopic">
              Research Topic:
              <input
                type="text"
                name="resTopic"
                id="researchTopic"
                value={Userdata.resTopic}
                onChange={handelChange}
              />
            </label>
            <br />
            <label htmlFor="discription">
              Discription:
              <textarea
                type="textarea"
                name="discription"
                rows={6}
                cols={50}
                id="discription"
                value={Userdata.discription}
                onChange={handelChange}
              />
            </label>
            <br />
            {Userdata.resSubTopic.map((input, index) => (
              <div key={index}>
                <label htmlFor="researchSubTopic">
                  {'Research Sub Topic ' + (index + 1) }
                  <input
                    type="text"
                    name="resSubTopic"
                    id="researchSubTopic"
                    required
                    value={Userdata.resSubTopic[index]}
                    onChange={(e) => handleDynChange(index, e)}
                  />

                  <input
                    type="file"
                    accept=".pdf"
                    required
                    value={Userdata.resSubTopicFile}
                    onChange={(e) => handleFileChange(e, index)}
                  />
                  <button onClick={(e) => removeField(e, index)}>remove</button>

                  <br />
                </label>

                <br />
              </div>
            ))}
            <button onClick={addField}>add</button>
          </>
        )}
      </div>
    </form>
  );
};

export default Signup;
