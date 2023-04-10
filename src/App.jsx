import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [contactDate, setContactDate] = useState(
    new Date().toLocaleDateString()
  );

  const addTask = (evt) => {
    evt.preventDefault();
    const newTask = {
      id: Date.now(),
      name: name,
      email: email,
      number: number,
    };
    if (newTask.name.length === 0) {
      alert("Please fill the title and deadline fields");
    } else {
      setTask([...task, newTask]);
      setContactDate(new Date().toLocaleDateString());
    }
    setDeadline("");
    setName("");
  };

  

  return (
    <main>
      <div
        className="p-5 w-75  m-5  mx-auto"
        style={{
          boxShadow: " rgba(0, 0, 0, 0.4) 0px 30px 90px",
          borderRadius: "35px",
        }}
      >
        <h1 className="text-success text-center">TODO app on REACT.JS</h1>
        <hr />
        <form class="form" onSubmit={(evt) => addTask(evt)}>
          <div className="w-100 d-flex gap-2">
            <label htmlFor="task_name" className="w-50 d-block mx-auto">
              <p className="text-info fw-bold text-uppercase">
                Enter contact name
              </p>
              <input
                value={name}
                onChange={(evt) => setName(evt.target.value)}
                type="text"
                id="task_name"
                className="form-control p-2 w-100"
                style={{
                  borderRadius: "35px",
                }}
              />
            </label>
            <label htmlFor="task_email" className="w-50 d-block mx-auto">
              <p className="text-info fw-bold text-uppercase">
                Enter contact email
              </p>
              <input
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                type="email"
                id="task_email"
                className="form-control p-2 w-100"
                style={{
                  borderRadius: "35px",
                }}
              />
            </label>
          </div>

          <label htmlFor="task_number" className="w-50 d-block mx-auto my-5">
            <p className="text-info fw-bold text-uppercase">
              Enter contact phone number
            </p>
            <input
              value={number}
              onChange={(evt) => setNumber(evt.target.value)}
              type="number"
              id="task_number"
              className="form-control p-2 w-100"
              style={{
                borderRadius: "35px",
              }}
            />
          </label>

          <button
            type="submit"
            className="btn btn-success p-3 w-25 d-block mx-auto"
            style={{
              borderRadius: "35px",
            }}
          >
            ADD NEW CONTACT
          </button>
        </form>
      </div>
      <div
        className=" p-5 w-75 mx-auto"
        style={{
          boxShadow: " rgba(0, 0, 0, 0.4) 0px 30px 90px",
          borderRadius: "35px",
        }}
      >
        <table className="table text-center">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>NUMBER</th>
              <th>DEADLINE</th>
              <th>EDIT</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {task?.map((item, index) => {
              return (
                <tr>
                  <td>
                    <img
                      width="50px"
                      height="50px"
                      style={{
                        borderRadius: "50px",
                      }}
                      src="https://e7.pngegg.com/pngimages/447/446/png-clipart-elon-musk-tesla-motors-tesla-model-3-spacex-tesla-company-car.png"
                      alt="Img"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{contactDate}</td>
                  <td>
                    <i className="fa-solid fa-user-pen"></i>
                  </td>
                  <td>
                    {" "}
                    <i className="fa-solid fa-trash"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
