import React from "react";
import mypic from "../../me.jpg";
const ProfilePhoto = () => {
  return (
    <div>
      <img
        style={{ borderRadius: "50%", width: 500, height: 500, marginTop: 100 }}
        src={mypic}
        alt="This is me !"
      />
    </div>
  );
};
export default ProfilePhoto;
