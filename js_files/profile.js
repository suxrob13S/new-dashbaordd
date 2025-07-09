
const wrap = document.getElementById('wrapper')


    fetch('http://localhost:3000/Information').then(res => res.json()).then(data => {
        for (let i = 0; i < data.length; i++) {

            const profileNav = document.createElement('div')
            wrap.append(profileNav)
            profileNav.className = 'profile_nav'

            const profileUser = document.createElement('div')
            profileNav.append(profileUser)
            profileUser.className = 'profile_user'

            

            const profileName = document.createElement('h2')
            profileName.innerHTML = data[i].name
            profileName.className = 'profile_name'
            profileUser.append(profileName)

            const profileEmail = document.createElement('h2')
            profileEmail.innerHTML = data[i].bios
            profileEmail.className = 'profile_email'
            profileUser.append(profileEmail)

            const profilePhoto = document.createElement('img')
            profilePhoto.src = data[i].bio
            profilePhoto.className = 'profile_photo'
            profileNav.append(profilePhoto)

        }
    })



