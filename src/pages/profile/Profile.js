import React from "react";
import { MainLayout } from "../../layout/mainlayout/MainLayout";
import { Container } from "react-bootstrap";
import person from "../../assets/person.png";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <MainLayout>
      <Container className="p-4">
        <div className="text-center">
          <h2 className=" p-5 fw-bold"> Profile</h2>
          <div className="">
            <img src={person} alt="person" height="200px" width="200px" />
          </div>
          <div>
            <h2 className="  ">
              Name: {userInfo?.fName + " " + userInfo?.lName}
            </h2>
            <h2 className="">Email: {userInfo?.email}</h2>
            <h2 className="">Role: {userInfo?.role}</h2>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Profile;
