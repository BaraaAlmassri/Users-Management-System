const createUserForm = document.forms["AddUserForm"];


createUserForm.image.addEventListener("change" , () => {
    const file = createUserForm.image.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function(e) {
      document.querySelector(".preview").setAttribute("src", e.target.result);
    }
})

createUserForm.addEventListener("submit" , async (e) => {
    e.preventDefault();

    const formData = new FormData(createUserForm);


    const response = await axios.post(`https://ums12.runasp.net/api/users` , formData);

    if (response.status == 200) {
        
        location.href="./index.html";
    }

    console.log(response);
})