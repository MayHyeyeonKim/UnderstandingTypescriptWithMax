import { useEffect, useState } from "react";

import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals.tsx";
import NewGoal from "./components/NewGoal.tsx";

type Goal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState(() => {
    const stored = localStorage.getItem("goals");
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: 1,
            title: "Learn TS",
            description: "Learn TS from the ground up",
          },
          {
            id: 2,
            title: "Practice TS",
            description: "Practice working with TypeScript!",
          },
        ];
  });

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals: Goal[]) => prevGoals.filter((g) => g.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    const isDuplicate = goals.some(
      (goal: Goal) => goal.title === text && goal.description === summary
    );

    if (isDuplicate) {
      alert("Goal already exists!");
      return;
    }

    setGoals((prevGoals: Goal[]) =>
      prevGoals.concat({ id: Math.random(), title: text, description: summary })
    );
  }

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>May's Course Goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
