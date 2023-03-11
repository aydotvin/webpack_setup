import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Profile.module.scss";
import { actions } from "./profileSlice";

const Profile = () => {
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profileData);

  const getDetails = () => {
    dispatch(actions.getProfileDetails(profileData.userId)).then((res) => {
      console.log("res", res);
    });
  };

  const displayProfileData = () => {
    if (profileData.profile) {
      return (
        <div className="">
          <h3>Hello {profileData.profile.name}</h3>
        </div>
      );
    } else if (profileData.status === "pending") {
      return <div className="">Loading...</div>;
    } else if (profileData.status === "error") {
      return <div className="">{profileData.error}</div>;
    }
    return null;
  };

  return (
    <div className={`${styles.profile}`}>
      <h2 className="page-heading">Profile Details</h2>
      <div className={`${styles.inputRow}`}>
        <input
          type="number"
          value={profileData.userId}
          onChange={(ev) => {
            const tempUserId = Number(ev.target.value) || 0;
            dispatch(actions.setUserId({ userId: tempUserId }));
          }}
          placeholder="Enter User ID (1 - 10)"
        />
        <button onClick={getDetails}>Get Details</button>
      </div>
      {displayProfileData()}
    </div>
  );
};

export default Profile;
