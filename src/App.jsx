import React, { useEffect, useState } from "react";

const App = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeValues = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <div>
      <div className="text-center">Hello User</div>

      <div className="mt-10 mb-10 flex justify-center items-center">
        <div>
          <p>{formValue.username}</p>
          <p>{formValue.email}</p>
          <p>{formValue.password}</p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[60%] h-[60%] flex justify-center items-center">
          <form onSubmit={handleSubmit} className="mt-10">
            Username: <br />
            <input
              type="text"
              name="username"
              className="p-2 border rounded-sm shadow-sm"
              onChange={changeValues}
            />{" "}
            <br />
            Email: <br />
            <input
              type="email"
              name="email"
              className="p-2 border rounded-sm shadow-sm"
              onChange={changeValues}
            />{" "}
            <br />
            Password: <br />
            <input
              type="password"
              name="password"
              className="p-2 border rounded-sm"
              onChange={changeValues}
            />{" "}
            <br />
            <button
              type="submit
            "
              className="p-2 border rounded-md hover:bg-black hover:text-white hover:border-none mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
