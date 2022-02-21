
document.querySelector('#form').addEventListener("submit", formSubmit)


let detailsArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];

function formSubmit(event) {
        event.preventDefault()
        let name = document.querySelector('#name').value
        let age = document.querySelector('#age').value
        let gender = document.querySelector('#gender').value
        let email = document.querySelector('#email').value
        let phone = document.querySelector('#phone').value

        let detailsObj = {
            name: name,
            age: age,
            gender: gender,
            email: email,
            phone: phone
        }

        detailsArr.push(detailsObj)

        console.log(detailsArr)

        localStorage.setItem("studentDataBase", JSON.stringify(detailsArr))

        // this steps resets the values of the form input after submiting the form
        document.querySelector('#name').value = null
        document.querySelector('#age').value = null
        document.querySelector('#gender').value = null
        document.querySelector('#email').value = null
        document.querySelector('#phone').value = null
}   

