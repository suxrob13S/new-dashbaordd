const sidebarItem1 = document.getElementById('sidebarone')
const sidebarItem2 = document.getElementById('sidebartwo')
const sidebarItem3 = document.getElementById('sidebarthree')

sidebarItem1.addEventListener('click', () => {
    window.location.href = "sidebarone.html"
})
sidebarItem2.addEventListener('click', () => {
    window.location.href = "sidebartwo.html"
})
sidebarItem3.addEventListener('click', () => {
    window.location.href = "sidebarthree.html"
})



const name1 = document.getElementById('name')
const surname = document.getElementById('surname')
const age = document.getElementById('age')
const bio = document.getElementById('bio')
const bios = document.getElementById('bios')
const addBtn = document.getElementById('addBtn')
const humansDiv = document.getElementById('humansDiv')
const div_btns = document.getElementById('div_btns')
const addInfo = document.getElementById('addInfo')



function DeleteUser(e, id) {
    e.preventDefault()
    fetch('http://localhost:3000/Information/' + id, {
        method: "DELETE"
    })
}

function UpdateInfo(e,id) {
    e.preventDefault()

    let Information = {
        name: name1.value,
        surname: surname.value,
        age: age.value,
        bio: bio.value,
        bios: bios.value
    }

    fetch("http://localhost:3000/Information/" + id, {
        method: 'PUT',
        body:JSON.stringify(Information)
    })
}
function UpdateUser(user) {
    name1.value = user.name
    surname.value = user.surname
    age.value = user.age
    bio.value = user.bio
    bios.value = user.bios



    const NewUpdateBtn = document.createElement('button')
    NewUpdateBtn.innerHTML = "Update"
    NewUpdateBtn.className = "newUpdatebtn"
    addInfo.append(NewUpdateBtn)

    NewUpdateBtn.addEventListener('click', (e) => UpdateInfo(e,user.id))

}



function render() {
    fetch('http://localhost:3000/Information').then(res => res.json()).then(data => {
        for (let i = 0; i < data.length; i++) {

            const trE = document.createElement("td")
            trE.className = "td"
            humansDiv.append(trE)


            const tdbio = document.createElement("img")
            tdbio.className = "tdbio"
            tdbio.src = data[i].bio
            tdbio.alt = "Hers is a photo"
            trE.append(tdbio)

            const tdname = document.createElement("h4")
            tdname.className = "tdname"
            tdname.innerHTML = "Name: " + data[i].name
            trE.append(tdname)

            const tdprice = document.createElement("h4")
            tdprice.className = "tdsurname"
            tdprice.innerHTML = "Surname: " + data[i].surname
            trE.append(tdprice)


            const tdage = document.createElement("h4")
            tdage.className = "tdage"
            tdage.innerHTML = 'Age:' + data[i].age
            trE.append(tdage)



            const readMorebtn = document.createElement('button')
            readMorebtn.innerHTML = "ViewMore"
            readMorebtn.className = "readMorebtn"
            trE.append(readMorebtn)


            readMorebtn.addEventListener('click', () => {
                window.location.href = "id.html?id=" + data[i].id
            })


            const UpdateBtn = document.createElement('button')
            UpdateBtn.innerHTML = "Update"
            UpdateBtn.className = "Updatebtn"
            trE.append(UpdateBtn)
            UpdateBtn.addEventListener('click', () => UpdateUser(data[i]))


            const Delatebtn = document.createElement('button')
            Delatebtn.innerHTML = "Delete"
            Delatebtn.className = "Deletebtn"
            trE.append(Delatebtn)


            Delatebtn.addEventListener('click', (e) => DeleteUser(e, data[i].id))




        }



    })


}

render()

function adder() {
    let Information = {
        name: name1.value,
        surname: surname.value,
        age: age.value,
        bio: bio.value,
        bios: bios.value
    }

    fetch("http://localhost:3000/Information", {
        method: 'POST',
        body: JSON.stringify(Information)
    })

    render()

}

addBtn.addEventListener('click', adder)








