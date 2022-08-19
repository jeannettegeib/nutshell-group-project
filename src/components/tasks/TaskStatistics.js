import { useEffect, useState } from "react";

export const TaskStatistics = () => {
  const [statistic, setStatistic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/tasks")
      .then((response) => response.json())
      .then((taskArray) => {
        setStatistic(taskArray);
      });
  }, [statistic]);

  const newArray = statistic.filter((item) => item.completed === true);

  const percentageComplete = (array1, array2) => {
    const total = Math.round((array1.length / array2.length) * 100);
    return total;
  };

  const total = percentageComplete(newArray, statistic);

  return (
    <>
      <div className="statistics">{total}% of Tasks Completed</div>
    </>
  );
};
