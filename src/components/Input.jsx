// import React from "react";
// import "../Styles/Input.css";
// import Banner from "./Banner";

// const Input = () => {
//   return (
//     <>
//       <div className="contain">
//         <Banner />
//         <div className="input">
//           <input type="text" placeholder="Enter Your Name..." />
//           <input type="text" placeholder="Additional Name..." />
//           <input type="text" placeholder="Location" />
//           {/* <input type="text" placeholder="State & City" /> */}
//           <select name="" id="" className="state">
//             <option value="">--Select State--</option>
//             <option value="bihar">Bihar</option>
//             <option value="uttarpradesh">Uttar Pradesh</option>
//             <option value="madhyapradesh">Madhya Pradesh</option>
//           </select>
//           <select name="" id="" className="district">
//             <option value="">--Select District--</option>
//             <option value="siwan">Siwan</option>
//             <option value="saran">Saran</option>
//             <option value="patna">Patna</option>
//           </select>
//           <input type="text" placeholder="Website" />
//           <textarea name="" id="" placeholder="Bio..."></textarea>
//           <div className="category">
//             <p>Category</p>
//             <button>+</button>
//           </div>
//           <div className="save_btn">
//             <button>Save</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Input;

// ---------------------------------
import React, { useState } from "react";
import "../Styles/Input.css";
import Banner from "./Banner";

const Input = () => {
  const [formData, setFormData] = useState({
    name: "",
    additionalName: "",
    location: "",
    state: "",
    district: "",
    website: "",
    bio: "",
    categories: [],
  });

  const [categoryInput, setCategoryInput] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCategory = () => {
    if (categoryInput.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        categories: [...prevData.categories, categoryInput],
      }));
      setCategoryInput("");
    }
  };

  const handleSubmit = () => {
    // Add your form submission logic here (e.g., send data to API, save locally, etc.)
    console.log("Form Data: ", formData);
  };

  return (
    <div className="contain">
      <Banner />
      <div className="input">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name..."
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="additionalName"
          placeholder="Additional Name..."
          value={formData.additionalName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <select
          name="state"
          className="state"
          value={formData.state}
          onChange={handleInputChange}
        >
          <option value="">--Select State--</option>
          <option value="bihar">Bihar</option>
          <option value="uttarpradesh">Uttar Pradesh</option>
          <option value="madhyapradesh">Madhya Pradesh</option>
        </select>
        <select
          name="district"
          className="district"
          value={formData.district}
          onChange={handleInputChange}
        >
          <option value="">--Select District--</option>
          <option value="siwan">Siwan</option>
          <option value="saran">Saran</option>
          <option value="patna">Patna</option>
        </select>
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleInputChange}
        />
        <textarea
          name="bio"
          placeholder="Bio..."
          value={formData.bio}
          onChange={handleInputChange}
        ></textarea>
        <div className="category">
          <p>Category</p>
          <input
            type="text"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            placeholder="Add Category"
          />
          <button onClick={handleAddCategory}>+</button>
        </div>
        <div className="category_list">
          {formData.categories.map((category, index) => (
            <p key={index}>{category}</p>
          ))}
        </div>
        <div className="save_btn">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
