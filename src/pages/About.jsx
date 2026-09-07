
import Carddes from "../components/Carddes";
import Navbar from "../components/Navbar";

function About(){
    return(
        <>
       <h1>IM ALI</h1>
        <main>
            <section>
             <div>
                <h1>About Services</h1>
                <p>Explore Our Services of the react app for your ease</p>
             </div>

               {/* props destruction  */}
             <div className="flex gap-4 m-2">
             <Carddes title='Card 1' desc='hi i am muhammad ali and i am student of bs computer sceince' />
             <Carddes title='Card 2' desc='hi i am web developer and i learn development from last of 3 to 4 years' />
             <Carddes title='Card 3' desc='hi i am Ai automation and i learn ai chatboot from last 4 to 5 months' />
             </div>
             
            </section>
        </main>
        </>
    )
}

export default About;