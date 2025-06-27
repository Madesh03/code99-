function choose(data) {
    // console.log(data)
    // alert("welcome")
    let user = document.getElementsByClassName("hii");
    let user1 = document.getElementsByClassName("box")
    // console.log(user)
    for (let i = 0; i < user.length; i++) {
        let data1 = user[i];
        let data2 = user1[i];
        if (data1.id == data) {
            data2.classList.add("para");
        } else {
            data2.classList.remove("para");
        };
    };
};