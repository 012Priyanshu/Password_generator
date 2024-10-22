

const btn=document.querySelector(".btn1");
const input2=document.querySelector(".input2");


const Generate_password=(iterate)=>
{
    let digit="abcdefghijklmnopqrstuvwxyzABCDEFGHIHKLMNOPQRSTUVWXYZ1234567890"
    let newPass=""

    for(let i=1;i<=iterate;i++)
            {
              const index=Math.floor(Math.random()*digit.length)
              newPass+=digit[index];
              console.log(newPass)
            }
            return newPass;
}



btn.addEventListener("click",(e)=>
{
    e.preventDefault();

    const input1=Number(document.querySelector(".input1").value)

    input2.innerText=Generate_password(input1)
    
    
})

//   const [lenght,setlenght]=useState("");
//   const [password,setpassword]=useState("");

// input1=onChange=(e)=>{setlenght(e.target.value)}

// btn.addEventListener(onClick={handleClick})

// input2=value={password}

//   const Generate_password=()=>
//   {
//     let digit="abcdefghijklmnopqrstuvwxyzABCDEFGHIHKLMNOPQRSTUVWXYZ1234567890"
//     let newPass=""

//     for(let i=1;i<=Number(lenght);i++)
//     {
//       const index=Math.floor(Math.random()*digit.length)
//       newPass+=digit[index];
//       console.log(newPass)
//     }
//     return newPass;
//   }


//   const handleClick=(e)=>
//   {
//     e.preventDefault();
//     return setpassword(Generate_password);
//   }




