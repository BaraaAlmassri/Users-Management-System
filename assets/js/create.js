const createUserForm = document.forms["AddUserForm"];

createUserForm.addEventListener("submit" , async (e) => {
    e.preventDefault();

    const formData = new FormData(createUserForm);


    const response = await axios.post(`https://ums12.runasp.net/api/users` , formData);

    console.log(response);
})