import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Courses() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLevel =
      level === "All" || course.level === level;

    return matchesSearch && matchesLevel;
  });

  return (
    <section className="max-w-6xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">
        Courses
      </h1>

      <input
        type="text"
        placeholder="Search course..."
        className="border p-3 w-full mb-4"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        className="border p-3 mb-8"
        value={level}
        onChange={(e) =>
          setLevel(e.target.value)
        }
      >
        <option>All</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}

export default Courses;