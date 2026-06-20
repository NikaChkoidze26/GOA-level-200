import { useState } from "react";


function Contact() {


const [form,setForm] = useState({
name:"",
email:"",
message:""
});


function handleSubmit(e){

e.preventDefault();


if(!form.name ||
   !form.email ||
  !form.message){

alert("Fill all fields");
return;

}


alert("Message sent!");


}


return (

<section className="max-w-4xl mx-auto py-12 px-4">


<h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
Contact
</h1>



<form onSubmit={handleSubmit} className="flex flex-col gap-4">


<input

className="border p-3 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"

placeholder="Name"

onChange={(e)=>setForm({...form,name:e.target.value})}

/>



<input

className="border p-3 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"

placeholder="Email"

onChange={(e)=>setForm({...form,email:e.target.value})}

/>



<textarea

className="border p-3 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"

placeholder="Message"

rows="5"

onChange={(e)=>setForm({...form,message:e.target.value})}

/>



<button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">

Send

</button>


</form>


</section>

)

}


export default Contact;