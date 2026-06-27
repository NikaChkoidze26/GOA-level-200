import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar({dark,setDark}) {

const [open,setOpen] = useState(false);


return (

<nav className="
sticky top-0 z-50
backdrop-blur-lg
bg-white/80
dark:bg-gray-900/80
shadow-md
">


<div className="
max-w-7xl mx-auto
p-4
flex
justify-between
items-center
">


<h1 className="
text-3xl
font-black
text-green-600
">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6No2_k7LngO4POXhYvsUstfS4WUtguqyrBQ&s" alt="GOA" className="w-30 h-20 mx-auto" />
</h1>



<div className="
hidden md:flex
items-center
gap-8
">


<Link 
to="/"
className="hover:text-green-500 transition"
>
Home
</Link>


<Link 
to="/about"
className="hover:text-green-500 transition"
>
About
</Link>


<Link 
to="/courses"
className="hover:text-green-500 transition"
>
Courses
</Link>


<Link 
to="/contact"
className="hover:text-green-500 transition"
>
Contact
</Link>



<button

onClick={()=>setDark(!dark)}

className="
bg-green-600
text-white
px-4
py-2
rounded-full
hover:scale-110
transition
"

>

{dark ? "☀️" : "🌙"}

</button>


</div>





<button

className="
md:hidden
text-3xl
"

onClick={()=>setOpen(!open)}

>

☰

</button>


</div>





{
open &&

<div className="
md:hidden
flex
flex-col
gap-4
p-5
animate-fade
bg-white
dark:bg-gray-900
">


<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/courses">Courses</Link>

<Link to="/contact">Contact</Link>


<button

onClick={()=>setDark(!dark)}

className="
bg-green-600
text-white
p-2
rounded
"

>

Toggle Theme

</button>


</div>

}



</nav>


)

}


export default Navbar;