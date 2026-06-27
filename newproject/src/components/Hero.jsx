import { Link } from "react-router-dom";


function Hero(){


return (

<section className="
min-h-[80vh]
flex items-center
bg-linear-to-br
from-green-500
to-emerald-900
text-white
">


<div className="
max-w-6xl
mx-auto
px-6
animate-fade
">


<h1 className="
text-6xl
font-black
">

Goal-Oriented Academy

</h1>


<p className="
text-xl
mt-6
max-w-xl
">

Become a developer.
Learn modern technologies and build real projects.

</p>



<Link to="/about">
  <button className="mt-10 px-8 py-4 rounded-full bg-white text-green-700 font-bold hover:scale-110 transition">
    Start Learning
  </button>
</Link>


</div>


</section>


)


}


export default Hero;