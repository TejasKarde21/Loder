import React,{useState,useEffect} from "react";
 
 export default function Loder(){
        
    const [progress, setProgress ] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(progress < 100){
                setProgress(prevProgrees => prevProgrees + 10);
            }
            else{
                clearInterval(timer)
            }
        },1000)
      return ()=>clearInterval(timer);
    },[progress]);

    function display(){
        return{ 
             width : `${progress}%`
        }
    }


    function margin() {
        return {
            marginLeft: `${progress}%`,
            
        };
    }

    function displayOne(){
        if(progress === 100){
          return{  display : "none"}
          
        }
    }

    function displaytwo(){
        if(progress === 100){
          return{  display : "flex"}
          
        }
    }



    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="w-full flex justify-center ">
                    <div className="w-[80%] self-center md:w-[60%] h-8 bg-slate-200 shadow-xl shadow-zinc-900 border-2 rounded-full" style={displayOne()}>
                     
                        <div className="h-full bg-blue-500 rounded-full" style={display()}></div>
                         <div className="h-full  text-xl font-semibold text-orange-400" style={margin()} >{progress}% </div>
                    </div>
                    <img src='https://media.tenor.com/KGVSrb-aYiAAAAAM/snoopy-yay.gif' alt='gif' className='hidden w-[90%] h-[80%] p-12 md:w-[70%] md:h-[80%]' style={displaytwo()}/>
                </div>
            </div>
        </>
    )
}
