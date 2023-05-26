import styled from "styled-components";
import { Button } from "../components/button/Button";
import useAuth from "../store/useAuth";

const Profile = () => {
  const { user, logout } = useAuth((state) => state);

  return (
    <ProfileWrapper>
      <div>
        <img src={user?.avatar} alt="" />
        <p>{user?.username}</p>
        <p>{user?.email}</p>
        <Button
          children={"Logout"}
          size={"md"}
          variant={"filled"}
          rounded={"sm"}
          color={"pry"}
          onClick={logout}
        />
      </div>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #292929;
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;

  div {
    max-width: 400px;
    width: 100%;
    padding: 2rem 1rem;
    background-color: #3d3d3d;
    height: fit-content;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img {
      width: 200px;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    p {
      color: #dadada;
      background-color: #363636;
      width: 100%;
      text-align: center;
      padding: 0.75rem;
      border-radius: 8px;
    }
  }
`;
