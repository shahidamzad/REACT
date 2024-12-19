import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [favorite, setFavorite] = useState(false);

  const [allUser, setAllUser] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newContact = { name, company, phone, favorite };
    const newArr = [...allUser, newContact];
    setAllUser(newArr);

    
    setName("");
    setCompany("");
    setPhone("");
    setFavorite(false);
  };

  const deleteHandler = (index) => {
    const copyUser = [...allUser];
    copyUser.splice(index, 1);
    setAllUser(copyUser);
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Form Section */}
      <form
        onSubmit={submitHandler}
        className="bg-gray-300 p-4 w-[50%] rounded-md"
      >
        <h1 className="text-lg font-bold mb-4">Add Contact</h1>

        <label className="block mb-2 font-medium">Name</label>
        <input
          className="w-full mb-4 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />

        <label className="block mb-2 font-medium">Company</label>
        <input
          className="w-full mb-4 p-2 border rounded"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          placeholder="Enter company"
        />

        <label className="block mb-2 font-medium">Phone Number</label>
        <input
          className="w-full mb-4 p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Enter phone number"
        />

        <label className=" block mb-2 font-medium flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={favorite}
            onChange={(e) => setFavorite(e.target.checked)}
          />
          Mark as Favorite
        </label>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md"
        >
          Add Contact
        </button>
      </form>

      {/* Contact List Section */}
      <div className="mt-6 bg-emerald-50 p-6 w-[50%] rounded-md">
        <h1 className="text-2xl font-bold mb-4">Contact Details</h1>

        {allUser.map((elem, i) => (
          <div
            key={i}
            className="bg-white p-4 mb-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h1 className="text-xl font-semibold">{elem.name}</h1>
              <h2 className="text-md">{elem.company}</h2>
              <p className="text-sm text-gray-600">{elem.phone}</p>
              {elem.favorite && (
                <p className="text-sm text-yellow-500 font-medium">★ Favorite</p>
              )}
            </div>
            <button
              className="bg-red-600 text-white p-2 rounded"
              onClick={() => deleteHandler(i)}
            >
              Delete
            </button>
          </div>
        ))}

        {allUser.length === 0 && (
          <p className="text-center text-gray-500">No contacts added yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
