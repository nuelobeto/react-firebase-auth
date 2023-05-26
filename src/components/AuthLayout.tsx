import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import useAuth from "../store/useAuth";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  const { user, error, message, resetAuth } = useAuth((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return;
    }
    navigate("/profile");
  }, [user]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetAuth();
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      resetAuth();
    }
  }, [error]);

  return (
    <AuthWrapper>
      <AuthMain>
        <FormWrapper>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {children}
        </FormWrapper>
      </AuthMain>
      <AuthImg>
        <img src="/images/logo.png" alt="" />
      </AuthImg>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #292929;
  display: flex;
`;

const AuthMain = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const AuthImg = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #131313;

  @media (max-width: 900px) {
    display: none;
  }
`;

const FormWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  h1 {
    color: #fff;
    margin-bottom: 1rem;
  }
  p {
    color: #c2c2c2;
    margin-bottom: 2rem;
    font-size: 14px;
    font-weight: 400;
  }
`;
