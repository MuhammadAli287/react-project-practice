

function Carddes({title, desc}){
    return(

        //  props destruction 
       <div className="p-4  bg-blue-300 rounded-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="font-semibold">{desc}</p>
       </div>
    )
}

export default Carddes;