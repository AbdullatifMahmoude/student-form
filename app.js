let form = document.querySelector("form");
let id = document.querySelector("#id");
let name = document.querySelector("#name");
let course = document.querySelector("#course");
let phone = document.querySelector("#phone");
let tbody = document.querySelector("tbody");
let input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  tbody.innerHTML += `

 <tr>
     <td>${id.value}</td>
                <td>${name.value}</td>
                <td>${course.value}</td>
                <td>${phone.value}</td>
                <td><button onclick="deleteRow(this)">Delete</button></td>
            </tr>
`;
  form.reset();
});
function deleteRow(button) {
  let row = button.parentElement.parentElement;
  row.remove();
}
