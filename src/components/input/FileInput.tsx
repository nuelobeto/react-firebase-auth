import styled from "styled-components";

type FileInputT = {
  image: any;
  text: string;
  setFile: React.Dispatch<React.SetStateAction<any>>;
};

export const FileInput = ({ image, text, setFile }: FileInputT) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  return (
    <InputWrapper>
      <label htmlFor="file">
        <img src={image} alt="" />
        <span>{text}</span>
      </label>
      <input type="file" id="file" onChange={handleChange} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;

    img {
      display: block;
      width: 40px;
    }

    span {
      color: #c2c2c2;
    }
  }

  input {
    display: none;
  }
`;
