let key = "Kv4DDMUg9mtiFDMdC2g5eqMqhMX0ciGE"
document.addEventListener("DOMContentLoaded",()=>{
    let input = document.querySelector("#userInput");
    let submit = document.querySelector("#submit");
    let form = document.querySelector("form");
    let content = document.querySelector(".content");
    let select = document.querySelector("select");
    
    let h1 = document.createElement("h1");
    
    select.addEventListener("change",(el)=>{
        select.value = el.target.value;
        // debugger
    })             

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        giphySearch(input.value, select.value);
        console.log(input.value, select.value)
    })
    
    const showGif = (arr)=>{
        arr.forEach(gif =>{
            let img = document.createElement("img");
            img.src = gif.images.downsized.url;
            content.appendChild(img)
            debugger;

        })
    }
        
    const giphySearch = async (userInput, userLimit) =>{
        try{
            content.innerHTML = ""
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`);
            let data = res.data.data
            debugger
            showGif(data);

                debugger
            }catch(error){
            console.log(error)
        }
    }

    const populateSelect = (search, limit) =>{
        // let i = 0;
        // while(i < 25){
        //     let option = document.createElement("option");
        //     option.innerText = i
        //     select.appendChild(option);
        //     i++
        // }
        for(let i = 0; i <= 25; i++){
            let option = document.createElement("option");
            option.innerText = i
            option.value = i
            select.appendChild(option);
        }
    }
    populateSelect()

})