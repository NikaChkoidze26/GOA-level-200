import Hero from "../components/Hero";


function Home(){


const stats=[

"500+ Students",

"100+ Projects",

"50+ Mentors"

];


return (

<>


<Hero/>


<section className="
max-w-6xl
mx-auto
py-20
grid
md:grid-cols-3
gap-8
px-6
">


{
stats.map((s,index)=>(


<div

key={index}

className="
rounded-3xl
p-10

shadow-xl

bg-white
dark:bg-gray-900

text-gray-900
dark:text-white

border
dark:border-gray-700

hover:-translate-y-3
hover:shadow-2xl

transition
duration-300

animate-fade
"

>


<h2 className="
text-4xl
font-black
text-center
text-green-600
">

{s}

</h2>


</div>


))
}


</section>


</>

)

}


export default Home;