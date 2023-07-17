import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
//import axios from "axios";

import firestore from "../firebase";

const defaultValues = {
  title: "",
  address: "",
  name: "",
  contact: "",
  tradeOption: "월세",
  deposit: "",
  fee: "",
  reason: "",
  time: new Date().toLocaleDateString(),
};
const db = firestore;
const user = db.collection("userData");
function InputDataScreen() {
  /* State */
  const [formData, setFormData] = useState(defaultValues);

  /* Functions */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // 성훈이 강의
    // function a() {
    //   return true;
    // }
    // const a = () => {
    //   return true;
    // };
    // const a = () => true;
  };

  const handleSave = () => {
    if (window.confirm("중도퇴실 정보를 접수하시겠습니까?")) {
      //console.log("formData: ", formData);
      user.add(formData);

      setFormData(defaultValues);

      // user.get().then((docs) => {
      //   docs.forEach((doc) => {
      //     console.log(doc);

      //     console.log(doc.data());

      //     console.log(doc.id);
      //   });
      // });
      try {
      } catch (e) {
        console.e("error adding document : ", e);
      }
      window.alert(
        "정보를 접수하셨습니다! 확인하는대로 바로 연락드리겠습니다! 접수해주셔서 감사합니다."
      );
    } else {
      setFormData(defaultValues);
    }

    //axios.post("http://localhost:8080/test")
  };
  const handleReset = () => {
    if (window.confirm("정보를 초기화 하시겠어요?")) setFormData(defaultValues);
  };

  /* Render */
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h4" color={"black"}>
            중도퇴실은 모두여기!
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="건물명"
            variant="outlined"
            fullWidth={true}
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="주소"
            variant="outlined"
            fullWidth={true}
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="이름"
            variant="outlined"
            fullWidth={true}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="전화번호"
            variant="outlined"
            fullWidth={true}
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              거래방식
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "tradeOption",
                id: "uncontrolled-native",
              }}
              value={formData.tradeOption}
              onChange={handleChange}
            >
              <option value={"월세"}>월세</option>
              <option value={"전세"}>전세</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="보증금"
            variant="outlined"
            fullWidth={true}
            name="deposit"
            value={formData.deposit}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="차임"
            variant="outlined"
            fullWidth={true}
            name="fee"
            value={formData.fee}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="퇴실사유"
            variant="outlined"
            fullWidth={true}
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            multiline
            row={4}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" onClick={handleSave}>
            전송하기
          </Button>
          <Button
            variant="outlined"
            style={{ margin: 5 }}
            onClick={handleReset}
          >
            초기화
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InputDataScreen;
