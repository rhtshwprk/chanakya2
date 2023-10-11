import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import axios from "axios";
// import MockData from "src/MOCK_DATA_STUDENT.json"

const StudentCRUD = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    course: "",
    rollNo: "",
    phoneNo: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        course: "",
        rollNo: "",
        phoneNo: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        course: "",
        rollNo: "",
        phoneNo: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({
      name: tempData.name,
      email: tempData.email,
      course: tempData.course,
      rollNo: tempData.rollNo,
      phoneNo: tempData.phoneNo,
    });
    setEditClick(true);
    setEditIndex(index);
  };

  const data = [
    {
      name: "Cheston",
      email: "cgoldhill0@nba.com",
      course: "CSE",
      rollNo: 1,
      phoneNo: "4469435468",
    },
    {
      name: "Cherianne",
      email: "cjeannaud1@comcast.net",
      course: "BCA",
      rollNo: 2,
      phoneNo: "8562303641",
    },
    {
      name: "Padraic",
      email: "paicken2@mysql.com",
      rollNo: 3,
      course: "BCA",
      phoneNo: "6823944859",
    },
    {
      name: "Clevie",
      email: "cwhapham3@technorati.com",
      course: "BCA",
      rollNo: 4,
      phoneNo: "5963648617",
    },
    {
      name: "Sharona",
      email: "spester4@gravatar.com",
      course: "BCA",
      rollNo: 5,
      phoneNo: "6684436316",
    },
    {
      name: "Sissie",
      email: "svanyashkin5@zdnet.com",
      course: "BCA",
      rollNo: 6,
      phoneNo: "8628671995",
    },
    {
      name: "Gwendolyn",
      email: "gshedden6@cafepress.com",
      course: "CSE",
      rollNo: 7,
      phoneNo: "2991007703",
    },
    {
      name: "Cad",
      email: "cbichener7@paginegialle.it",
      course: "CSE",
      rollNo: 8,
      phoneNo: "6314476798",
    },
    {
      name: "Noel",
      email: "npullman8@wunderground.com",
      course: "CSE",
      rollNo: 9,
      phoneNo: "6988487407",
    },
    {
      name: "Tori",
      email: "tsansome9@parallels.com",
      course: "CSE",
      rollNo: 10,
      phoneNo: "7443800994",
    },
    {
      name: "Camey",
      email: "cchasmara@seesaa.net",
      course: "CSE",
      rollNo: 11,
      phoneNo: "3727803638",
    },
    {
      name: "Shannah",
      email: "sswantonb@last.fm",
      course: "BCA",
      rollNo: 12,
      phoneNo: "9253073791",
    },
    {
      name: "Guinna",
      email: "gellamc@opera.com",
      course: "BCA",
      rollNo: 13,
      phoneNo: "1365919688",
    },
    {
      name: "Harlin",
      email: "hinnesd@whitehouse.gov",
      course: "BCA",
      rollNo: 14,
      phoneNo: "9712906755",
    },
    {
      name: "Olivier",
      email: "olauxe@netvibes.com",
      course: "BCA",
      rollNo: 15,
      phoneNo: "6344633586",
    },
    {
      name: "Norene",
      email: "nsportonf@apache.org",
      course: "BCA",
      rollNo: 16,
      phoneNo: "5246758973",
    },
    {
      name: "Callean",
      email: "cpetrellig@umn.edu",
      course: "BCA",
      rollNo: 17,
      phoneNo: "2213488134",
    },
    {
      name: "Lizbeth",
      email: "lvitteh@diigo.com",
      course: "CSE",
      rollNo: 18,
      phoneNo: "2387199567",
    },
    {
      name: "Cally",
      email: "cgathereri@google.com.au",
      course: "CSE",
      rollNo: 19,
      phoneNo: "8554032510",
    },
    {
      name: "Rahel",
      email: "rstainbrrollNogej@wired.com",
      course: "CSE",
      rollNo: 20,
      phoneNo: "5556044191",
    },
    {
      name: "Dwain",
      email: "dranscombk@arizona.edu",
      course: "CSE",
      rollNo: 21,
      phoneNo: "8888987560",
    },
    {
      name: "Josephine",
      email: "jbaumertl@utexas.edu",
      course: "CSE",
      rollNo: 22,
      phoneNo: "9523952222",
    },
    {
      name: "Geralda",
      email: "gjuraszm@unc.edu",
      course: "CSE",
      rollNo: 23,
      phoneNo: "6156621879",
    },
    {
      name: "Gillan",
      email: "gpricen@rediff.com",
      course: "CSE",
      rollNo: 24,
      phoneNo: "9155382445",
    },
    {
      name: "Cordie",
      email: "cclilverdo@archive.org",
      course: "CSE",
      rollNo: 25,
      phoneNo: "8242792141",
    },
    {
      name: "Alameda",
      email: "ashavep@ning.com",
      course: "BCA",
      rollNo: 26,
      phoneNo: "9723167393",
    },
    {
      name: "Wynny",
      email: "wferenczq@cbc.ca",
      course: "BCA",
      rollNo: 27,
      phoneNo: "3012605886",
    },
    {
      name: "Lutero",
      email: "lallattr@utexas.edu",
      course: "BCA",
      rollNo: 28,
      phoneNo: "1995049190",
    },
    {
      name: "Christi",
      email: "cgollings@biblegateway.com",
      course: "BCA",
      rollNo: 29,
      phoneNo: "4383048724",
    },
    {
      name: "Clair",
      email: "ccussonst@devhub.com",
      course: "BCA",
      rollNo: 30,
      phoneNo: "8184619567",
    },
    {
      name: "Cati",
      email: "cdongateu@mtv.com",
      course: "BCA",
      rollNo: 31,
      phoneNo: "8054189313",
    },
    {
      name: "Ricky",
      email: "rcrocroftv@people.com.cn",
      course: "BCA",
      rollNo: 32,
      phoneNo: "9139291100",
    },
    {
      name: "Carole",
      email: "cboylanw@cisco.com",
      course: "CSE",
      rollNo: 33,
      phoneNo: "3659028004",
    },
    {
      name: "Inez",
      email: "ipllux@sina.com.cn",
      course: "CSE",
      rollNo: 34,
      phoneNo: "9498960148",
    },
    {
      name: "JarrollNo",
      email: "jscanterburyy@msn.com",
      course: "CSE",
      rollNo: 35,
      phoneNo: "9939528239",
    },
    {
      name: "Bryana",
      email: "bkittleyz@wordpress.com",
      course: "CSE",
      rollNo: 36,
      phoneNo: "6845288871",
    },
    {
      name: "Karlis",
      email: "kskerrett10@psu.edu",
      course: "CSE",
      rollNo: 37,
      phoneNo: "4833515033",
    },
    {
      name: "Denni",
      email: "dlack11@go.com",
      course: "CSE",
      rollNo: 38,
      phoneNo: "9524917775",
    },
    {
      name: "Ivett",
      email: "icostello12@e-recht24.de",
      course: "CSE",
      rollNo: 39,
      phoneNo: "4865315667",
    },
    {
      name: "Lalo",
      email: "lfriberg13@jugem.jp",
      course: "CSE",
      rollNo: 40,
      phoneNo: "4228893789",
    },
    {
      name: "Abie",
      email: "afandrich14@shinystat.com",
      course: "CSE",
      rollNo: 41,
      phoneNo: "6084337341",
    },
    {
      name: "Ulla",
      email: "uealam15@blog.com",
      course: "CSE",
      rollNo: 42,
      phoneNo: "9208785265",
    },
    {
      name: "Siusan",
      email: "sdavrollNoovitch16@comcast.net",
      course: "CSE",
      rollNo: 43,
      phoneNo: "6222043426",
    },
    {
      name: "Caddric",
      email: "cschule17@techcrunch.com",
      course: "BCA",
      rollNo: 44,
      phoneNo: "7856384076",
    },
    {
      name: "Petr",
      email: "pjoyner18@webeden.co.uk",
      course: "BCA",
      rollNo: 45,
      phoneNo: "7446446702",
    },
    {
      name: "Shell",
      email: "sgerling19@vk.com",
      course: "BCA",
      rollNo: 46,
      phoneNo: "1996489902",
    },
    {
      name: "Drusi",
      email: "dtomsett1a@tripadvisor.com",
      course: "BCA",
      rollNo: 47,
      phoneNo: "2101655556",
    },
    {
      name: "Angelico",
      email: "arustan1b@scribd.com",
      course: "BCA",
      rollNo: 48,
      phoneNo: "1436592977",
    },
    {
      name: "Dorena",
      email: "dmassimo1c@disqus.com",
      course: "BCA",
      rollNo: 49,
      phoneNo: "6559117321",
    },
    {
      name: "Kippar",
      email: "kmatissoff1d@chron.com",
      course: "BCA",
      rollNo: 50,
      phoneNo: "3159408322",
    },
  ];

  return (
    <div className="student-crud bg-[#004b43]">
      <h1 className="pageHeading">Student Records</h1>
      {/* <div className = "formBox">

        <center>

        <div className="formClass">
        <form onSubmit={handleSubmit}>
          {/* <div className="flex flex-col" rollNo="space">
            <label className="NameHead">Name</label>
            <input name="name" className="NameBlank" value={inputs.name} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="EmailHead">Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="CourseHead">Course</label>
            <input name="email" value={inputs.course} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="RollHead">Roll No.</label>
            <input name="rollNo" value={inputs.rollNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="MobileHead">Mobile No.</label>
            <input name="phoneNo" value={inputs.phoneNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <button type="submit" className="addBtn">
            {editClick ? "Update" : "Add"}
          </button> 
          <div className="flex flex-col" id="space">
            <label className="NameHead">Name</label>
            <input name="name" className="NameBlank" value={inputs.name} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="EmailHead">Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="RollHead">Roll No.</label>
            <input name="rollNo" value={inputs.rollNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <div className="flex flex-col">
            <label className="MobileHead">Mobile No.</label>
            <input name="phoneNo" value={inputs.phoneNo} onChange={handleChange} />
            <br></br>
            <br></br>
          </div>
          <button type="submit" className="addBtn">
            {editClick ? "update" : "Add"}
          </button>
        </form>
        </div> */}

      <div className="container">
        <center>
          <div className="formClass">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col" id="space">
                <label className="NameHead">Name</label>
                <input
                  name="name"
                  className="NameBlank"
                  value={inputs.name}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="EmailHead">Email</label>
                <input
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="CourseHead">Course</label>
                <input
                  name="course"
                  value={inputs.course}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="RollHead">Roll No.</label>
                <input
                  name="rollNo"
                  value={inputs.rollNo}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="MobileHead">Mobile No.</label>
                <input
                  name="phoneNo"
                  value={inputs.phoneNo}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
              </div>
              <button type="submit" className="addBtn">
                {editClick ? "update" : "Add"}
              </button>
            </form>
          </div>
        </center>
      </div>

      <div className="table-wrapper">
        <Table responsive className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Roll No.</th>
              <th>Phone No.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.course}</td>
                <td>{item.rollNo}</td>
                <td>{item.phoneNo}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-yellow-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.course}</td>
                <td>{entry.rollNo}</td>
                <td>{entry.phoneNo}</td>
                <td> - </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentCRUD;
