var arrSv = [
  { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", major: "Công nghệ thông tin" },
  { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", major: "Kế toán" }
];

let editingIndex = -1;

function Table() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    arrSv.forEach((sv, index) => {
        var tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${sv.id}</td>
        <td>${sv.name}</td>
        <td>${sv.age}</td>
        <td>${sv.gender}</td>
        <td>${sv.major}</td>
        <td>${sv.major}</td>
        
        <td>
        <button onclick="editStudent(${index})">Sửa</button>
        <button onclick="deleteStudent(${index})">Xóa</button>
        </td>
        `;
        tbody.appendChild(tr);
        
    });
}

document.getElementById("formAdd").addEventListener("submit", (e) => {
    e.preventFefault();
    var name = document.getElementById("name").value.trim();
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var major = document.getElementById("age").value.trim();

    var newStudent = {
        id: arrSv.length > 0 ? arrSv[arrSv.length - 1].id + 1 : 1,
        name, age, gender, major
    };

arrSv.push(newStudent);
Table();
e.target.reset();

});

function deleteStudent(index){
    if (confirm("xóa nhá?")){
        arrSv.splice(index, 1);
        renderTable();
    }
}
// Cập nhật sinh viên


document.getElementById("formEdit").addEventListener("submit", (e) => {
  e.preventDefault();
  if (editingIndex !== -1) {
    arrSv[editingIndex] = {
      ...arrSv[editingIndex],
      name: document.getElementById("edit-name").value.trim(),
      age: parseInt(document.getElementById("edit-age").value),
      gender: document.getElementById("edit-gender").value,
      major: document.getElementById("edit-major").value.trim()
    };
    editingIndex = -1;
    Table();
    document.getElementById("formEdit").reset();
  }
});

function editStudent(index) {
  editingIndex = index;
  var sv = arrSv[index];
  document.getElementById("edit-name").value = sv.name;
  document.getElementById("edit-age").value = sv.age;
  document.getElementById("edit-gender").value = sv.gender;
  document.getElementById("edit-major").value = sv.major;
}

Table();