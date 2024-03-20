import React from "react";

interface ProfileProps {
  profile: {
    name: String;
    email: String;
    membership: String;
  };
}

const ProfileMenu = ({ profile }: ProfileProps) => {
  return (
    <div className="flex flex-col">
      <h1>Profile</h1>
    </div>
  );
};

export default ProfileMenu;
