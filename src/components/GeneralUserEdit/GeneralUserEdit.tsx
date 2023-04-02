import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user.slice";

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledImageDiv = styled("div")`
  width: 100px;
  position: relative;
  cursor: pointer;
`;

const StyledDiv = styled("div")`
  display: flex;
  gap: 12px;
  margin-left: -60px;
`;

const StyledInput = styled("input")`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0;
`;

function getBase64(file: File, ref: any) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    ref.current.src = reader.result;
    // return reader.result;
  };
  reader.onerror = function (error) {
    console.log(error);
    // return null;
  };
}

function GeneralUserEdit({ handleChangeEdit, onSubmit }: any) {
  const ref = useRef(null);
  const userInfo = useSelector((state: any) => state.auth?.user);
  const [photoURL, setPhotoURL] = useState("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const { displayName } = e.target.elements;
    onSubmit &&
      onSubmit({
        displayName: displayName.value,
        photoURL: photoURL || userInfo?.profilePhoto,
      });
  };

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const profileImage = e.target.files?.[0];

    // const base64 = 
    getBase64(profileImage!, ref);

    // console.log(base64)

    // setPhotoURL(typeof base64 === 'string' ? base64 : '');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledImageDiv>
        <img
          ref={ref}
          src={photoURL ?? userInfo?.photoURL}
          alt={userInfo?.displayName}
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <StyledInput
          style={{
            background: 'red',
            width: '300px',
            height: '300px'
          }}
          accept="image/*"
          type="file"
          onChange={onFileChange}
        ></StyledInput>
      </StyledImageDiv>
      <FormControl
        style={{ display: "flex", gap: "34px", flexDirection: "column" }}
      >
        <TextField
          size="small"
          variant="outlined"
          name="displayName"
          label="Display Name"
        ></TextField>

        <TextField
          size="small"
          variant="outlined"
          name="Username"
          label="Username"
        ></TextField>

        <TextField size="small" variant="outlined" name="email" label="Email">
          {" "}
        </TextField>

        <TextField
          size="small"
          variant="outlined"
          name="JobTitle"
          label="Job title"
        ></TextField>
      </FormControl>
      <StyledDiv>
        <Button
          type="submit"
          variant="contained"
          color="success"
          style={{ color: "#fff" }}
        >
          Save
        </Button>
        <Button
          onClick={handleChangeEdit}
          variant="text"
          style={{ color: "#000" }}
        >
          Cancel
        </Button>
      </StyledDiv>
    </StyledForm>
  );
}

export default GeneralUserEdit;
