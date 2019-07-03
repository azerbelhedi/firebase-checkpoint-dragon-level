var firebaseConfig = {
    apiKey: "AIzaSyD1gjhj6aQz9TWbstMsi2EjIEkeBqgZnpE",
    authDomain: "beta1-2018.firebaseapp.com",
    databaseURL: "https://beta1-2018.firebaseio.com",
    projectId: "beta1-2018",
    storageBucket: "beta1-2018.appspot.com",
    messagingSenderId: "749626943516",
    appId: "1:749626943516:web:1c355e265679e735"
  };
firebase.initializeApp(firebaseConfig);

const refs = [
    "web development" ,
    "mobile development" ,
    "game development" ,
    "full stack js"
]

function getDataAndFilter(trackFilter){
    let usersList = []
    // document.querySelector("#students-container").innerHTML = ""
    refs.map((ref) => {
        ref = firebase.database().ref(ref)
        //let ref = firebase.database().ref(refs[0])
        ref.on("value" , gotData , errData)

        function gotData(data){
            data = data.val()
            let keys = Object.keys(data)
            keys.map(key => {
                console.log(data[key])
                if(data[key].course === trackFilter || trackFilter === "all tracks"){
                    usersList.push(Student(
                        [
                            {data : "name" , value : data[key].name} ,
                            {data : "track", value : data[key].course} ,
                            {data : "email" , value : data[key].email} ,
                            {data : "phone" , value : data[key].phone} ,
                            {data : "submission date" , value : data[key].date}    
                        ]
                    ))
                }
            })
            //console.log(data)
            console.log(usersList)
            usersListString = ""
            usersList.map((user) => {
                usersListString += user 
            }) 

            updateScreen(usersListString)

            usersListString = ""
            // usersList = []
            ref.off("value")  

        }

        function errData(err){
            console.log(err)
        }
    })

}
getDataAndFilter("all tracks")

