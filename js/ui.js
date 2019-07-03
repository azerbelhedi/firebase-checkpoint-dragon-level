function DataBlock(name , value){
    return(
        `
        <div class="user-data-block">
            <div class="data-title">
                ${name}
            </div>
            <div class="data-content">
                ${value}
            </div>
        </div>
        `
    )
}

function Student(data){
    let blocks = "" 
    data.map((block) => {
        blocks += DataBlock(block.data , block.value)
    })

    return(
        `
        <div class="student">
        ${blocks}
        </div>
        `
    )
}


let studentDataTest = [
    {data : "name" , value : "amine"} ,
    {data : "track", value : "Web"} ,
    {data : "email" , value : "amine@gmail.com"} ,
    {data : "phone" , value : "78 312 645"} ,
    {data : "submission date" , value : "25 feb 2016"}    
]


// for(let i = 0 ; i < 50 ; i++){
//     document.querySelector("#students-container").innerHTML += Student(studentDataTest) ;   
// }

function updateScreen(usersListString){
    document.querySelector("#students-container").innerHTML = ""
    document.querySelector("#students-container").innerHTML += usersListString ;
    if(usersListString === ""){
        let emptyBlockObject = { data : "There is no subscribed Students on this Track " , value : "choose an other track"}
        document.querySelector("#students-container").innerHTML = Student([emptyBlockObject])
    }
}


