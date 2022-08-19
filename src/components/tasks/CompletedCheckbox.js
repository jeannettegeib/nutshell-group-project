export const CompletedCheckbox = ({ taskProp }) => {
  const handleCheckbox = (e) => {
    //Perform PATCH for the object
    fetch(`http://localhost:8088/tasks/${taskProp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: false }),
    }).then((response) => response.json());
  };

  return (
    <>
      <input
        className="checkTask"
        type="checkbox"
        defaultChecked={true}
        value={taskProp.completed}
        onClick={(clickEvent) => handleCheckbox()}
      />
    </>
  );
};
