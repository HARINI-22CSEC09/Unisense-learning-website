import React from "react";
import LessonCard from "../components/LessonCard";

const Lessons = () => {
  const lessons = [
    {
      title: "Lesson 1: Learning Alphabets",
      video: "https://youtu.be/yw7fKXPlrrU?feature=shared",
    },
    {
      title: "Lesson 2: Learning Numbers",
      video: "https://youtu.be/NryKkehHooo?feature=shared",
    },
    {
        title: "Lesson 3: Learning Basic Signs",
        video: "https://youtu.be/rkQZQhloXuE?si=mijYoWmi3sYUgg9K",
    },
    {
        title: "Lesson 4: Learning Relationships",
        video: "https://youtu.be/rkQZQhloXuE?si=mijYoWmi3sYUgg9K",
    },
  ];

  return (
    <div className="row">
      {lessons.map((lesson, index) => (
        <div className="col-md-6" key={index}>
          <LessonCard {...lesson} />
        </div>
      ))}
    </div>
  );
};

export default Lessons;
