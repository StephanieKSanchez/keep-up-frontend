import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddDestination() {
  let navigate = useNavigate();

  const [name, setName] = useState();
  const [beginDate, setBeginDate] = useState();
  const [endDate, setEndDate] = useState();
  const [image, setImage] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDestination = { name, beginDate, endDate, image };
    fetch("https://keep-up-sks.web.app/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
      .then(() => navigate("/"))
      .catch(setError);
  };
  return (
    <section style={{ margin: "2em 1em" }}>
      <h1>Add Destination</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label for="name">
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label for="begin date">
          Begin Date:
          <input
            name="begin date"
            type="date"
            value={beginDate}
            onChange={(e) => setBeginDate(e.target.value)}
          />
        </label>
        <br />
        <label for="end date">
          End Date:
          <input
            name="end date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <label for="status">
          Status:
          <input
            name="status"
            type="text"
            value={status}
            onSelect={(e) => setStatus(e.target.value)}
          />
        </label>
        <br />
        <label for="image">
          Photo:
          <input
            name="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />
      </form>
    </section>
  );
}
