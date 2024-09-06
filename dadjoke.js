const getjoke=document.querySelector("#getJoke")
const refresh=document.querySelector("#refresh")
const check=document.querySelector('#check')
const config={headers:{
    Accept: 'text/plain'
}}
const joke=document.querySelector('#joke')

getjoke.addEventListener('click',async ()=>{
    const res=await axios.get('https://icanhazdadjoke.com/',config)
    const text=document.createElement("li")
    text.innerText=res.data
    joke.append(text)
})
refresh.addEventListener('click',()=>{
    joke.innerHTML=''
    const temp=document.createElement("li")
    temp.innerText='list reset. try again for more jokes!'
    check.append(temp);
    setTimeout(()=>{
        check.innerHTML=''
    },3000)

})