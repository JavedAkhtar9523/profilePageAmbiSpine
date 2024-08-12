// import React from "react";
// import "../Styles/Banner.css";
// import banner from "../Images/8.jpg";
// import avtar from "../Images/admin.png";

// const Banner = () => {
//   return (
//     <div>
//       <div className="banner_img">
//         <img src={banner} alt="" />
//         <div className="banner_profile">
//           <img src={avtar} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
// --------------------------------------

import React, { useState } from "react";
import "../Styles/Banner.css";
import defaultBanner from "../Images/8.jpg"; // Default banner image
import defaultAvatar from "../Images/admin.png"; // Default profile avatar

const Banner = () => {
  const [avatar, setAvatar] = useState(defaultAvatar);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="banner_img">
      <img src={defaultBanner} alt="Banner" />
      <div className="banner_profile">
        <img
          src={avatar}
          alt="Profile"
          onClick={() => document.getElementById("avatar-upload").click()}
          style={{ cursor: "pointer" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          style={{ display: "none" }}
          id="avatar-upload"
        />
      </div>
    </div>
  );
};

export default Banner;
