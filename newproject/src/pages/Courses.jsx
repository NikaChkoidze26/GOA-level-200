import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";


function Courses() {


const [search,setSearch] = useState("");
const [level,setLevel] = useState("All");


const filteredCourses = courses.filter(course => {

const searchMatch =
course.title.toLowerCase().includes(search.toLowerCase());


const levelMatch =
level === "All" || course.level === level;


return searchMatch && levelMatch;

});


return (

<section className="max-w-6xl mx-auto py-12 px-4">


<h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
Courses
</h1>


<input

className="border p-3 rounded-lg w-full mb-4 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"

placeholder="Search course..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>



<select

className="border p-3 rounded-lg mb-8 bg-white dark:bg-gray-900 text-black dark:text-white"

value={level}

onChange={(e)=>setLevel(e.target.value)}

>


<option>All</option>
<option>Beginner</option>
<option>Intermediate</option>
<option>Advanced</option>


</select>



<div className="grid grid-cols-1 md:grid-cols-2 gap-6">


{
filteredCourses.map(course => (

<CourseCard 
key={course.id}
course={course}
/>

))
}


</div>


</section>

)

}


export default Courses;