
const params = new URLSearchParams(window.location.search);
const id = params.get('id')
const main = document.getElementById('main')
const Aboutdiv = document.getElementById('Aboutdiv')
fetch('http://localhost:3000/Information/' + id).then(res => res.json()).then(data => {
    const trE = document.createElement("div")
    trE.className = "td"
    main.append(trE)
    trE.append(Aboutdiv)

    const tdbio = document.createElement("img")
    tdbio.className = "tdbio"
    tdbio.src = data.bio
    trE.append(tdbio)

    const tdname = document.createElement("h4")
    tdname.className = "tdname"
    tdname.innerHTML = "Name: " + data.name
    Aboutdiv.append(tdname)

    const tdprice = document.createElement("h4")
    tdprice.className = "tdsurname"
    tdprice.innerHTML = "Surname: " + data.surname
    Aboutdiv.append(tdprice)


    const tdage = document.createElement("h4")
    tdage.className = "tdage"
    tdage.innerHTML = 'Age:' + data.age
    Aboutdiv.append(tdage)


    const tdbios = document.createElement("h4")
    tdbios.className = "tdbios"
    tdbios.innerHTML = 'About:' + data.bios
    Aboutdiv.append(tdbios)




})