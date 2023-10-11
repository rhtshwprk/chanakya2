import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const Templatee = () => {
  const data = [-
    { name: "Subject1", Attendance: 94 },
    { name: "Subject2", Attendance: 37 },
    { name: "Subject3", Attendance: 30 },
    { name: "Subject4", Attendance: 77},
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="heading_size">Charts and Reports</h1>
      <div className="App">
        <PieChart width={400} height={400} className="Pie">
          <Pie
            stroke ="#05445E"
            dataKey="Attendance"
            isAnimationActive={false}
            data={data}
            cx={PieChart.width/2} 
            cy={200}
            outerRadius={150}
            fill="#4FC3A1"
            label
          />
          <Tooltip />
        </PieChart>
</div>
      <div className="table-wrapper">
        <table className="fl-table">
            <thead><tr><th>First Name</th>
            <th>Roll No</th>
            <th>Subject1</th>
            <th>Subject2</th>
            <th>Subject3</th>
            <th>Subject4</th></tr>
          </thead>
          <tbody>
          <tr>
            <td>Leanna</td>
            <td>1</td>
            <td>94</td>
            <td>37</td>
            <td>30</td>
            <td>77</td>
          </tr>
        </tbody>
        </table>
        </div>
        </div>
    
  );
};

export default Templatee;