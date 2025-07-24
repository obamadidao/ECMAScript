const arrSv = [
  { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", major: "Công nghệ thông tin" },
  { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", major: "Kế toán" },
  { id: 3, name: "Lê Văn C", age: 19, gender: "Nam", major: "Quản trị kinh doanh" },
  { id: 4, name: "Phạm Thị D", age: 22, gender: "Nữ", major: "Marketing" }
];

let editingIndex = -1;

function renderTable() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  arrSv.forEach((sv, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${sv.id}</td>
      <td>${sv.name}</td>
      <td>${sv.age}</td>
      <td>${sv.gender}</td>
      <td>${sv.major}</td>
      <td>
        <button onclick="editStudent(${index})">Sửa</button>
        <button onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteStudent(index) {
  arrSv.splice(index, 1);
  renderTable();
}

function editStudent(index) {
  const sv = arrSv[index];
  editingIndex = index;

  document.getElementById("formEditStudent").style.display = "block";
  document.getElementById("editTitle").style.display = "block";
  document.getElementById("edit-name").value = sv.name;
  document.getElementById("edit-age").value = sv.age;
  document.getElementById("edit-gender").value = sv.gender;
  document.getElementById("edit-major").value = sv.major;
}

function cancelEdit() {
  editingIndex = -1;
  document.getElementById("formEditStudent").reset();
  document.getElementById("formEditStudent").style.display = "none";
  document.getElementById("editTitle").style.display = "none";
}

document.getElementById("formAddStudent").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const major = document.getElementById("major").value.trim();

  if (!name || !age || !major) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  const newStudent = {
    id: arrSv.length > 0 ? arrSv[arrSv.length - 1].id + 1 : 1,
    name, age, gender, major
  };
  arrSv.push(newStudent);
  renderTable();
  event.target.reset();
});

document.getElementById("formEditStudent").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("edit-name").value.trim();
  const age = parseInt(document.getElementById("edit-age").value);
  const gender = document.getElementById("edit-gender").value;
  const major = document.getElementById("edit-major").value.trim();

  if (editingIndex !== -1) {
    arrSv[editingIndex] = {
      ...arrSv[editingIndex],
      name, age, gender, major
    };
    editingIndex = -1;
    renderTable();
    event.target.reset();
    document.getElementById("formEditStudent").style.display = "none";
    document.getElementById("editTitle").style.display = "none";
  }
});

renderTable();
