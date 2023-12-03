import React, { useState, useEffect } from 'react'
const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [dataType, setDataType] = useState('All')
  const [courseIdFilter, setCourseIdFilter] = useState('')
  const [combinedData, setCombinedData] = useState([])

  const facultyData = [
    {
      name: 'Justino',
      email: 'jkembry0@wunderground.com',
      e_no: 1,
      phone_no: '6185264625'
    },
    {
      name: 'Ursola',
      email: 'ustallon1@ebay.com',
      e_no: 2,
      phone_no: '6705150240'
    },
    {
      name: 'Guendolen',
      email: 'gsallowaye2@squidoo.com',
      e_no: 3,
      phone_no: '5287419293'
    },
    {
      name: 'Herta',
      email: 'hduggon3@upenn.edu',
      e_no: 4,
      phone_no: '7273276609'
    },
    { name: 'Lotty', email: 'lonn4@cnbc.com', e_no: 5, phone_no: '6979295700' },
    {
      name: 'Lottie',
      email: 'lguare5@salon.com',
      e_no: 6,
      phone_no: '5082168990'
    },
    {
      name: 'Joshia',
      email: 'jplayhill6@addtoany.com',
      e_no: 7,
      phone_no: '8091337035'
    },
    {
      name: 'Quintina',
      email: 'qmustoe7@ezinearticles.com',
      e_no: 8,
      phone_no: '7971770210'
    },
    {
      name: 'Paulo',
      email: 'pkuhl8@ucoz.com',
      e_no: 9,
      phone_no: '4109612520'
    },
    {
      name: 'Arabella',
      email: 'aprobbin9@ameblo.jp',
      e_no: 10,
      phone_no: '8483638594'
    },
    {
      name: 'Eldredge',
      email: 'emelrossa@simplemachines.org',
      e_no: 11,
      phone_no: '5389825826'
    },
    {
      name: 'Rea',
      email: 'rheppenspallb@cnn.com',
      e_no: 12,
      phone_no: '9739444387'
    },
    {
      name: 'Tawsha',
      email: 'tivankinc@blogtalkradio.com',
      e_no: 13,
      phone_no: '1433291752'
    },
    {
      name: 'Adlai',
      email: 'ayakuntzovd@earthlink.net',
      e_no: 14,
      phone_no: '7951250189'
    },
    {
      name: 'Gabriell',
      email: 'gtemlette@latimes.com',
      e_no: 15,
      phone_no: '1725240731'
    },
    {
      name: 'Teri',
      email: 'tbroseniusf@addthis.com',
      e_no: 16,
      phone_no: '2159345624'
    },
    {
      name: 'Symon',
      email: 'sgarlettg@narod.ru',
      e_no: 17,
      phone_no: '5936765376'
    },
    {
      name: 'Neala',
      email: 'nrazouxh@wikipedia.org',
      e_no: 18,
      phone_no: '9479397714'
    },
    {
      name: 'Berny',
      email: 'bmitskevichi@dyndns.org',
      e_no: 19,
      phone_no: '7905586638'
    },
    {
      name: 'Gabriell',
      email: 'gcrightonj@dropbox.com',
      e_no: 20,
      phone_no: '8981565875'
    },
    {
      name: 'Rhonda',
      email: 'rlyalk@ning.com',
      e_no: 21,
      phone_no: '1367503401'
    },
    {
      name: 'Baillie',
      email: 'bhamml@nsw.gov.au',
      e_no: 22,
      phone_no: '3165933854'
    }
    // Add more faculty data here
  ]

  // const studentData = [
  //   {
  //     name: "Cheston",
  //     email: "cgoldhill0@nba.com",
  //     course: "CS1",
  //     rollNo: 1,
  //     phoneNo: "4469435468",
  //   },
  //   {
  //     name: "Cherianne",
  //     email: "cjeannaud1@comcast.net",
  //     course: "BCA1",
  //     rollNo: 2,
  //     phoneNo: "8562303641",
  //   },
  //   {
  //     name: "Padraic",
  //     email: "paicken2@mysql.com",
  //     rollNo: 3,
  //     course: "BCA1",
  //     phoneNo: "6823944859",
  //   },
  //   {
  //     name: "Clevie",
  //     email: "cwhapham3@technorati.com",
  //     course: "BCA1",
  //     rollNo: 4,
  //     phoneNo: "5963648617",
  //   },
  //   {
  //     name: "Sharona",
  //     email: "spester4@gravatar.com",
  //     course: "BCA1",
  //     rollNo: 5,
  //     phoneNo: "6684436316",
  //   },
  //   {
  //     name: "Sissie",
  //     email: "svanyashkin5@zdnet.com",
  //     course: "BCA1",
  //     rollNo: 6,
  //     phoneNo: "8628671995",
  //   },
  //   {
  //     name: "Gwendolyn",
  //     email: "gshedden6@cafepress.com",
  //     course: "CS1",
  //     rollNo: 7,
  //     phoneNo: "2991007703",
  //   },
  //   {
  //     name: "Cad",
  //     email: "cbichener7@paginegialle.it",
  //     course: "CS1",
  //     rollNo: 8,
  //     phoneNo: "6314476798",
  //   },
  //   {
  //     name: "Noel",
  //     email: "npullman8@wunderground.com",
  //     course: "CS1",
  //     rollNo: 9,
  //     phoneNo: "6988487407",
  //   },
  //   {
  //     name: "Tori",
  //     email: "tsansome9@parallels.com",
  //     course: "CS1",
  //     rollNo: 10,
  //     phoneNo: "7443800994",
  //   },
  //   {
  //     name: "Camey",
  //     email: "cchasmara@seesaa.net",
  //     course: "CS1",
  //     rollNo: 11,
  //     phoneNo: "3727803638",
  //   },
  //   {
  //     name: "Shannah",
  //     email: "sswantonb@last.fm",
  //     course: "BCA1",
  //     rollNo: 12,
  //     phoneNo: "9253073791",
  //   },
  //   {
  //     name: "Guinna",
  //     email: "gellamc@opera.com",
  //     course: "BCA1",
  //     rollNo: 13,
  //     phoneNo: "1365919688",
  //   },
  //   {
  //     name: "Harlin",
  //     email: "hinnesd@whitehouse.gov",
  //     course: "BCA1",
  //     rollNo: 14,
  //     phoneNo: "9712906755",
  //   },
  //   {
  //     name: "Olivier",
  //     email: "olauxe@netvibes.com",
  //     course: "BCA1",
  //     rollNo: 15,
  //     phoneNo: "6344633586",
  //   },
  //   {
  //     name: "Norene",
  //     email: "nsportonf@apache.org",
  //     course: "BCA1",
  //     rollNo: 16,
  //     phoneNo: "5246758973",
  //   },
  //   {
  //     name: "Callean",
  //     email: "cpetrellig@umn.edu",
  //     course: "BCA1",
  //     rollNo: 17,
  //     phoneNo: "2213488134",
  //   },
  //   {
  //     name: "Lizbeth",
  //     email: "lvitteh@diigo.com",
  //     course: "CS1",
  //     rollNo: 18,
  //     phoneNo: "2387199567",
  //   },
  //   {
  //     name: "Cally",
  //     email: "cgathereri@google.com.au",
  //     course: "CS1",
  //     rollNo: 19,
  //     phoneNo: "8554032510",
  //   },
  //   {
  //     name: "Rahel",
  //     email: "rstainbrrollNogej@wired.com",
  //     course: "CS1",
  //     rollNo: 20,
  //     phoneNo: "5556044191",
  //   },
  //   {
  //     name: "Dwain",
  //     email: "dranscombk@arizona.edu",
  //     course: "CS1",
  //     rollNo: 21,
  //     phoneNo: "8888987560",
  //   },
  //   {
  //     name: "Josephine",
  //     email: "jbaumertl@utexas.edu",
  //     course: "CS1",
  //     rollNo: 22,
  //     phoneNo: "9523952222",
  //   },
  //   // Add more student data here
  // ];
  const studentData = []
  useEffect(() => {
    // Combine and sort data based on dataType
    let sortedData = []

    if (dataType === 'All') {
      sortedData = [...facultyData, ...studentData]
    } else if (dataType === 'faculty') {
      sortedData = [...facultyData]
    } else if (dataType === 'student') {
      sortedData = [...studentData]
    }

    sortedData.sort((a, b) => a.name.localeCompare(b.name))
    setCombinedData(sortedData)
  }, [dataType, facultyData, studentData])

  useEffect(() => {
    // Apply filters based on searchInput, course ID filter, and data type
    const lowerCaseSearchInput = searchInput.toLowerCase()
    const filtered = combinedData.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(lowerCaseSearchInput)
      const courseIdMatch =
        !courseIdFilter ||
        (item.course &&
          item.course.toLowerCase().includes(courseIdFilter.toLowerCase()))
      return nameMatch && courseIdMatch
    })
    setFilteredData(filtered)
  }, [searchInput, courseIdFilter, combinedData])

  const clearFilters = () => {
    setSearchInput('')
    setDataType('All')
    setCourseIdFilter('')
    setFilteredData([])
  }

  return (
    <div className="faculty-search-container">
      <h1>Faculty Data</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder={`Search ${
            dataType === 'All' ? 'data' : dataType.toLowerCase()
          }...`}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
          <option value="All">All</option>
          <option value="faculty">Teacher</option>{' '}
          {/* Changed label to "Teacher" */}
          <option value="student">Student</option>
        </select>
        <input
          type="text"
          placeholder="Course ID"
          value={courseIdFilter}
          onChange={(e) => setCourseIdFilter(e.target.value)}
        />
        <button onClick={clearFilters} className="clear-filters-button">
          Clear Filters
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {dataType === 'faculty' && <th>Employee No.</th>}
            {dataType === 'student' && <th>Roll No.</th>}
            <th>Phone No.</th>
            {dataType === 'student' && <th>Course</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id || item.e_no}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              {dataType === 'faculty' && <td>{item.e_no}</td>}
              {dataType === 'student' && <td>{item.rollNo || 'N/A'}</td>}
              <td>{item.phone_no || item.phoneNo}</td>
              {dataType === 'student' && <td>{item.course || 'N/A'}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Search
