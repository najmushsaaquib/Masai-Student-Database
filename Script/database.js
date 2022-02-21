
let detailsArr = JSON.parse(localStorage.getItem("studentDataBase"))


// Stores the data of admitted students in an array of objects form
let admittedArr = JSON.parse(localStorage.getItem("admitted")) || []


// Stores the data of rejected students in an array of objects form
let rejectedArr = JSON.parse(localStorage.getItem("rejected")) || []


// function to dissplay admitted students on the page 
displayStudent(detailsArr)

function displayStudent(detailsArr){
    
    // this steps prevents the data to be displayed multiple times on the page
    document.querySelector("#body").innerHTML = null  

    detailsArr.map(function (elem, index){

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

        let acceptColumn = document.createElement("td")
            acceptColumn.setAttribute("id", "acpt")    
        
        let rejectColumn = document.createElement("td")
            rejectColumn.setAttribute("id", "rejct")    

        let acceptTag = document.createElement("a")
            acceptTag.innerText = "Admit"
            acceptTag.addEventListener("click", function(){
                    acceptFun(elem)
            })

        let rejectTag = document.createElement("a")
            rejectTag.innerHTML = "Reject"
            rejectTag.addEventListener("click", function(){
                    rejectFun(elem)
            })

        acceptColumn.append(acceptTag)   
        rejectColumn.append(rejectTag) 

        row.append(nameColumn, ageColumn, genderColumn, emailColumn, numberColumn, acceptColumn, rejectColumn)    

        document.querySelector("#body").append(row)    


    })

}




// function that collects the data of accepted student 
function acceptFun(elem){

    // console.log(detailsArr)

    let admittedObj = {
        name : elem.name,
        age : elem.age,
        gender : elem.gender,
        email : elem.email,
        phone : elem.phone,

    }

    admittedArr.push(admittedObj)

    localStorage.setItem("admitted", JSON.stringify(admittedArr));
    console.log(admittedArr)
    

}

// function that collects the data of rejected student 
function rejectFun(elem){

    console.log(detailsArr)

    let rejectedObj = {
        name : elem.name,
        age : elem.age,
        gender : elem.gender,
        email : elem.email,
        phone : elem.phone,

    }

    rejectedArr.push(rejectedObj)
    localStorage.setItem("rejected", JSON.stringify(rejectedArr));


}
