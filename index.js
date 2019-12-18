let key = "Kv4DDMUg9mtiFDMdC2g5eqMqhMX0ciGE"
document.addEventListener("DOMContentLoaded",()=>{
    let input = document.querySelector("#userInput");
    let submit = document.querySelector("#submit");
    let form = document.querySelector("form");
    let content = document.querySelector(".content");
    let select = document.querySelector("select");
    let limit = 10;
    let search = "coffee"
    
    let h1 = document.createElement("h1");
    form.addEventListener("submit",()=>{

    })

    const giphySearch = async (userInput, userLimit) =>{
        try{
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}&limit=${userLimit}`);
            console.log(res)
            debugger
        }catch(error){
            console.log(error)
        }
    }

    giphySearch(search,limit)
    const populateSelect = (search, limit) =>{
        // let i = 0;
        // while(i < 25){
        //     let option = document.createElement("option");
        //     option.innerText = i
        //     select.appendChild(option);
        //     i++
        // }
        for(let i = 1; i <= 25; i++){
            let option = document.createElement("option");
            option.innerText = i
            option.value = i
            select.appendChild(option);
        }
    }
    populateSelect()

})