import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="border p-3"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <textarea
          placeholder="Message"
          className="border p-3"
          rows="5"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value
            })
          }
        />

        <button
          className="bg-green-600 text-white py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;