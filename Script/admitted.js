
let admittedArr = JSON.parse(localStorage.getItem("admitted"))

// function to dissplay admitted students on the page 
displayAdmittedStudent(admittedArr)

function displayAdmittedStudent(admittedArr){
    
    // this steps prevents the data to be displayed multiple times on the page
    document.querySelector("#body").innerHTML = null  

    admittedArr.map(function (elem, index){

        let row = document.createElement("tr")    

        let nameColumn = document.createElement("td")
            nameColumn.innerText = elem.name

        let ageColumn = document.createElement("td")
            ageColumn.innerText = elem.age

        let genderColumn = document.createElement("td")
            genderColumn.innerText = elem.gender

        let emailColumn = document.createElement("td")
            emailColumn.innerText = elem.email

        let numberColumn = document.createElement("td")
            numberColumn.innerText = elem.phone

        row.append(nameColumn, ageColumn, genderColumn, emailColumn, numberColumn,)    

        document.querySelector("#body").append(row)    

    })

}

