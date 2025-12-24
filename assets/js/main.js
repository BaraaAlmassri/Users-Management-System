const getUsers = async () => {
    const response = await axios.get(`https://ums12.runasp.net/api/users`);
    return response.data;
}

const displayUsers = async () => {
    const result = await getUsers();
    console.log(result);

    const users  = result.users.map ( (user) => {
        return `

          <tr> 
          
          <td>  <h2> ${user.name} </h2></td>
          <td>  <img src ="${user.imageUrl}" /></td>
          <td> <button class="btn btn-outline-danger mt-2" onclick=deleteUser(${user.id})> Delete </button> </td>
          </tr>
                 
        `
    }).join(' ');

    document.querySelector(".users .users-data").innerHTML = users;

}

displayUsers();


const deleteUser = async (id) => {

    const response = await axios.delete(`https://ums12.runasp.net/api/users/${id}`)
   displayUsers();
   
}

 
  