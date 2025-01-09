const activities = [
  { day: "Donnerstag", activity: "Kaffee kochen", department: "IT", duration: 5 },
  { day: "Donnerstag", activity: "Programmieren", department: "IT", duration: 3 }

];

const activityTable = document.getElementById("activity-table");

activities.forEach((activity) => {
  const tr = document.createElement("tr");

  const dayTd = document.createElement("td");
  dayTd.textContent = activity.day;

  const activityTd = document.createElement("td");
  activityTd.textContent = activity.activity;

  const departmentTd = document.createElement("td");
  departmentTd.textContent = activity.department || ""; // Default empty if undefined

  const durationTd = document.createElement("td");
  durationTd.textContent = activity.duration;

  tr.appendChild(dayTd);
  tr.appendChild(activityTd);
  tr.appendChild(departmentTd);
  tr.appendChild(durationTd);

  activityTable.appendChild(tr);
});
