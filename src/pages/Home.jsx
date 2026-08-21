import Card from "../components/Card";
//import Navbar from "../components/Navbar";

function Home(){

//    let name= <input type="text" placeholder="ussername"></input>
//      if(name=="ali"){
//         content=<Button />
//      }
//      else{
//         content=<Buttonel />
//      }

let btn=[
    {
        id:1,
        title:"login"
    },
    {
        id:2,
        title:"logout"
    },
    {
        id:3,
        title:"Add to cart"
    }
]

    return(
        <>
        <h1 className="text-3xl text-center font-bold">Home Page</h1>

    <div className="grid grid-cols-1 lg:grid-cols-3 p-6 gap-4">
        
         <Card head='BS CYber S' p='Cyber Security' btn='Cyber-Doc' bgcolor='bg-blue-700 p-6 rounded-lg  ' btncolor='px-4 py-1 bg-blue-400 mt-4 rounded-lg' />
        <Card head='BSCS' p='Computer Science' btn='CS-Doc' bgcolor='bg-gray-500 p-6 rounded-lg  ' btncolor='px-4 py-1 bg-slate-500 mt-4 rounded-lg  ' />
         <Card head='BSAI' p='Artificial Intelligence' btn='Ai-Doc' bgcolor='bg-green-400 p-6 rounded-lg  ' btncolor='px-4 py-1 bg-green-300 mt-4 rounded-lg' />
         
     </div>


     <h1 className="ml-5">this is a button</h1>
     
    {btn.map((bt)=>(
        <Button
        key={bt.id}
         {...bt} />
    ))}
        </>

    )
}

export default Home;


function Button(props){
    return(
        <button className="bg-gray-400 px-4 py-1 rounded-2xl m-3">{props.title}</button>
    )
}








// function Buttonel(){
//     return(
//         <button className="bg-gray-400 px-4 py-1 rounded-2xl m-5">Cerror Me</button>
//     )
// }