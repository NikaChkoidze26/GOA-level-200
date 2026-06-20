function CourseCard({ course }) {

return (

<div className="p-6 md:p-8 rounded-3xl shadow-xl bg-white dark:bg-gray-900 text-black dark:text-white hover:-translate-y-3 transition duration-300">


<h2 className="text-2xl md:text-3xl font-bold">
{course.title}
</h2>


<span className="text-green-500">
{course.level}
</span>


<p className="mt-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
{course.description}
</p>


<button className="mt-6 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">

Learn

</button>


</div>

)

}

export default CourseCard;