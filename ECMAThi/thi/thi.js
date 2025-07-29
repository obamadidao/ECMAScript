const todos = [
    {
        id: 1,
        tennhiemvu: "Hoàn thành báo cáo",
        ngayhethan: "2025-07-25", 
        douutien: "Cao",
        tinhtrang: "Chờ thực hiện" 
    },
    {
        id: 2,
        tennhiemvu: "Học ECMA Script",
        ngayhethan: "2025-07-30",
        douutien: "Trung Bình",
        tinhtrang: "Hoàn thiện"
    },
    {
        id: 3,
        tennhiemvu: "Nộp bài tập",
        ngayhethan: "2025-07-28",
        douutien: "Thấp",
        tinhtrang: "Đang thực hiện"
    }
];

function Table() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    todos.forEach((nhiemvu, index) => {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${nhiemvu.tennhiemvu}</td>
            <td>${nhiemvu.ngayhethan}</td>
            <td>${nhiemvu.douutien}</td>
            <td>${nhiemvu.tinhtrang}</td>
            <td>
                <button onclick="editNhiemvu(${index})">Sửa</button>
                <button onclick="deleteNhiemvu(${index})">Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById("formAdd").addEventListener("submit", (e) =>  {
    e.preventDefault();
    var tennhiemvu = document.getElementById("tennhiemvu").value;
    var ngayhethan = document.getElementById("ngayhethan").value;
    var douutien = document.getElementById("douutien").value;
    var tinhtrang = document.querySelector('input[name="tinhtrang"]:checked').value;

    var newNhiemvu = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        tennhiemvu, ngayhethan, douutien, tinhtrang
    };
    todos.push(newNhiemvu);
    Table();
    e.target.reset();
});

function deleteNhiemvu(index){
    if (confirm("Muốn xóa chứ?")) {
        todos.splice(index, 1);
        Table();
    }
}

let editingIndex = null;

function editNhiemvu(index){
    editingIndex = index;
    var nhiemvu = todos[index];
    document.getElementById("edit-tennhiemvu").value = nhiemvu.tennhiemvu;
    document.getElementById("edit-ngayhethan").value = nhiemvu.ngayhethan;
    document.getElementById("edit-douutien").value = nhiemvu.douutien;
    let radios = document.getElementsByName("edit-tinhtrang");
    radios.forEach(radio => {
        radio.checked = (radio.value === nhiemvu.tinhtrang);
    });
}

document.getElementById("formEdit").addEventListener("submit", (e) =>  {
    e.preventDefault();
    if (editingIndex !== null){
        todos[editingIndex] = {
            ...todos[editingIndex],
            tennhiemvu: document.getElementById("edit-tennhiemvu").value,
            ngayhethan: document.getElementById("edit-ngayhethan").value,
            douutien: document.getElementById("edit-douutien").value,
            tinhtrang: document.querySelector('input[name="edit-tinhtrang"]:checked').value
        };
        editingIndex = -1;
        Table();
        document.getElementById("formEdit").reset();
    }
}
)
Table();
window.onload = Table;