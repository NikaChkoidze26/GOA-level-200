import Hero from "../components/Hero";


function Home() {


const stats = [
"500+ Students",
"100+ Projects",
"20 Mentors"
];


return (

<>


<Hero />

<acronym title=""></acronym>
<section className="max-w-6xl mx-auto py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">


{
stats.map((item,index)=>(


<div 
key={index}
className="rounded-3xl p-10 shadow-xl bg-white dark:bg-gray-900 text-black dark:text-white border dark:border-gray-700 hover:-translate-y-3 hover:shadow-2xl transition"
>


<h2 className="text-4xl font-black text-center text-green-600">

{item}

</h2>


</div>


))
}


</section>


</>

)

}


export default Home;