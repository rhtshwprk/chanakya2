import React, { useEffect, useState } from "react";
// import axios from "axios";

const FacultyCRUD = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    ENo: "",
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
        ENo: "",
        phoneNo: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        ENo: "",
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
      ENo: tempData.ENo,
      phoneNo: tempData.phoneNo,
    });
    setEditClick(true);
    setEditIndex(index);
  };

  const data = [
    {
      name: "Justino",
      email: "jkembry0@wunderground.com",
      e_no: 1,
      phone_no: "6185264625",
    },
    {
      name: "Ursola",
      email: "ustallon1@ebay.com",
      e_no: 2,
      phone_no: "6705150240",
    },
    {
      name: "Guendolen",
      email: "gsallowaye2@squidoo.com",
      e_no: 3,
      phone_no: "5287419293",
    },
    {
      name: "Herta",
      email: "hduggon3@upenn.edu",
      e_no: 4,
      phone_no: "7273276609",
    },
    { name: "Lotty", email: "lonn4@cnbc.com", e_no: 5, phone_no: "6979295700" },
    {
      name: "Lottie",
      email: "lguare5@salon.com",
      e_no: 6,
      phone_no: "5082168990",
    },
    {
      name: "Joshia",
      email: "jplayhill6@addtoany.com",
      e_no: 7,
      phone_no: "8091337035",
    },
    {
      name: "Quintina",
      email: "qmustoe7@ezinearticles.com",
      e_no: 8,
      phone_no: "7971770210",
    },
    {
      name: "Paulo",
      email: "pkuhl8@ucoz.com",
      e_no: 9,
      phone_no: "4109612520",
    },
    {
      name: "Arabella",
      email: "aprobbin9@ameblo.jp",
      e_no: 10,
      phone_no: "8483638594",
    },
    {
      name: "Eldredge",
      email: "emelrossa@simplemachines.org",
      e_no: 11,
      phone_no: "5389825826",
    },
    {
      name: "Rea",
      email: "rheppenspallb@cnn.com",
      e_no: 12,
      phone_no: "9739444387",
    },
    {
      name: "Tawsha",
      email: "tivankinc@blogtalkradio.com",
      e_no: 13,
      phone_no: "1433291752",
    },
    {
      name: "Adlai",
      email: "ayakuntzovd@earthlink.net",
      e_no: 14,
      phone_no: "7951250189",
    },
    {
      name: "Gabriell",
      email: "gtemlette@latimes.com",
      e_no: 15,
      phone_no: "1725240731",
    },
    {
      name: "Teri",
      email: "tbroseniusf@addthis.com",
      e_no: 16,
      phone_no: "2159345624",
    },
    {
      name: "Symon",
      email: "sgarlettg@narod.ru",
      e_no: 17,
      phone_no: "5936765376",
    },
    {
      name: "Neala",
      email: "nrazouxh@wikipedia.org",
      e_no: 18,
      phone_no: "9479397714",
    },
    {
      name: "Berny",
      email: "bmitskevichi@dyndns.org",
      e_no: 19,
      phone_no: "7905586638",
    },
    {
      name: "Gabriell",
      email: "gcrightonj@dropbox.com",
      e_no: 20,
      phone_no: "8981565875",
    },
    {
      name: "Rhonda",
      email: "rlyalk@ning.com",
      e_no: 21,
      phone_no: "1367503401",
    },
    {
      name: "Baillie",
      email: "bhamml@nsw.gov.au",
      e_no: 22,
      phone_no: "3165933854",
    },
    {
      name: "Sophey",
      email: "sbartholomewm@ebay.com",
      e_no: 23,
      phone_no: "3773396104",
    },
    {
      name: "Emera",
      email: "ehallgalleyn@dailymotion.com",
      e_no: 24,
      phone_no: "1688816316",
    },
    {
      name: "Averil",
      email: "apenticooto@opera.com",
      e_no: 25,
      phone_no: "7973330068",
    },
    {
      name: "Staffard",
      email: "sellamanp@bigcartel.com",
      e_no: 26,
      phone_no: "6909705143",
    },
    {
      name: "Mallorie",
      email: "marbuckelq@archive.org",
      e_no: 27,
      phone_no: "6856097647",
    },
    {
      name: "Burty",
      email: "blidgeyr@sphinn.com",
      e_no: 28,
      phone_no: "7076618180",
    },
    {
      name: "Scotty",
      email: "stamss@bandcamp.com",
      e_no: 29,
      phone_no: "2122995107",
    },
    {
      name: "Viola",
      email: "vmcalpint@slate.com",
      e_no: 30,
      phone_no: "6757004196",
    },
    {
      name: "Reube",
      email: "rtrembleyu@google.com",
      e_no: 31,
      phone_no: "3445266758",
    },
    {
      name: "Jilleen",
      email: "jglasonv@opensource.org",
      e_no: 32,
      phone_no: "1231868578",
    },
    {
      name: "Byrann",
      email: "bhunnicotw@discovery.com",
      e_no: 33,
      phone_no: "4606469509",
    },
    {
      name: "Devy",
      email: "dsinkinsx@newyorker.com",
      e_no: 34,
      phone_no: "5814635465",
    },
    {
      name: "Nesta",
      email: "nbackshelly@angelfire.com",
      e_no: 35,
      phone_no: "9565166090",
    },
    {
      name: "Giacomo",
      email: "ghawkz@aboutads.info",
      e_no: 36,
      phone_no: "5886566882",
    },
    {
      name: "Carlyle",
      email: "ckruschov10@harvard.edu",
      e_no: 37,
      phone_no: "9618520384",
    },
    {
      name: "Editha",
      email: "ematteini11@ucsd.edu",
      e_no: 38,
      phone_no: "3498156593",
    },
    {
      name: "Antone",
      email: "aflemming12@wunderground.com",
      e_no: 39,
      phone_no: "7126512939",
    },
    {
      name: "Patricia",
      email: "pdyke13@guardian.co.uk",
      e_no: 40,
      phone_no: "8699286058",
    },
    {
      name: "Fitz",
      email: "ffoottit14@wired.com",
      e_no: 41,
      phone_no: "5886466532",
    },
    {
      name: "Monroe",
      email: "mtovey15@domainmarket.com",
      e_no: 42,
      phone_no: "2662705756",
    },
    {
      name: "Cull",
      email: "ccaught16@unblog.fr",
      e_no: 43,
      phone_no: "5991560486",
    },
    {
      name: "Dyann",
      email: "dleggatt17@nifty.com",
      e_no: 44,
      phone_no: "1206986035",
    },
    {
      name: "Ingemar",
      email: "ikennett18@nifty.com",
      e_no: 45,
      phone_no: "4698527295",
    },
    {
      name: "Nevil",
      email: "nshelf19@skyrock.com",
      e_no: 46,
      phone_no: "1644315662",
    },
    {
      name: "Barb",
      email: "bcove1a@yellowbook.com",
      e_no: 47,
      phone_no: "1283294265",
    },
    {
      name: "Marybelle",
      email: "msuthren1b@hatena.ne.jp",
      e_no: 48,
      phone_no: "6047949845",
    },
    {
      name: "Robina",
      email: "rdechelle1c@virginia.edu",
      e_no: 49,
      phone_no: "7909516235",
    },
    {
      name: "Nady",
      email: "nburgoin1d@nifty.com",
      e_no: 50,
      phone_no: "1356704196",
    },
  ];

  return (
    <div className="faculty-crud">
      <h1 className="pageHeading">Faculty Records</h1>

      <center>
        <div className="container">
          <div className="formClass">
            <form onSubmit={handleSubmit}>
              <br></br>
              <br></br>
              <br></br>

              <div className="flex flex-col">
                <label className="NameHead">Name</label>
                <input
                  name="name"
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
                  className="emailBlank"
                />
                <br></br>
                <br></br>
              </div>
              <div className="flex flex-col">
                <label className="EmployeeHead">Employee No.</label>
                <input name="ENo" value={inputs.ENo} onChange={handleChange} />
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
                <br></br>
                <br></br>
                <br></br>
              </div>
              <button type="submit" className="addBtn">
                {editClick ? "update" : "Add"}
              </button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
      </center>

      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Employee No.</th>
              <th>Phone No.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.ENo}</td>
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
                <td>{entry.e_no}</td>
                <td>{entry.phone_no}</td>
                <td>- </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyCRUD;
