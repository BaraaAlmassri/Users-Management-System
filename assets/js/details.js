const getuser= async () => {

    const params = new URLSearchParams(location.search);
    const userId = params.get('userId');
    const response = await axios.get(`https://ums12.runasp.net/api/users/${userId}`);

    if (response.status == 200) {
        return response.data;
    }

    
}


const displayUserData = async () => {
    const response = await getuser();
    document.querySelector(".userName").textContent=response.data.name;
}

displayUserData();