import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "mui-image";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import Filter1Icon from "@mui/icons-material/Filter1";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
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
        "정보 접수 완료했습니다! 확인하는대로 바로 연락드리겠습니다! 접수해주셔서 감사합니다."
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
    /* 두개 이상의 리턴값 포함하고 싶을때 */
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <br />
          <br />
          <br />
          <br />

          <Typography component="h2" variant="h4" color={"black"} sx={{}}>
            온라인 중도퇴실 신청
          </Typography>

          <Typography variant="subtitle1" color={"black"} sx={{}}>
            전문적역량을 바탕으로 고객과의 신뢰구축을 소중하게 생각하는
            도하부동산 오늘도 최선을 다하고 있습니다.
          </Typography>

          <Typography variant="subtitle1" color={"black"} sx={{}}>
            중도퇴실 정보 신청해 주시면 빠르시간내에 답변드리겠습니다.
          </Typography>
          <Box sx={{ alignItems: "center" }}>
            <Typography variant="subtitle1" color={"black"}>
              <PhoneIcon
                sx={{
                  display: { color: "black" },
                  mr: 1,
                  fontSize: "0.95em",
                }}
              />
              <span style={{ marginTop: -10 }}>051.623.0709</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        <Grid container spacing={1}>
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
      <br />
      <br />
      <Container>
        <Grid container spacing={1}>
          <br />
          <Grid
            item
            xs={12}
            container
            direction={"column"}
            alignItems={"flex-start"}
          >
            <Typography variant="h5" color={"black"}>
              - 찾아오시는 길
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <br />
            <Box
              sx={{
                width: "100%",
                height: 500,
                backgroundImage: "/location.png",
              }}
            >
              <Image src={"/location.png"}></Image>
            </Box>
          </Grid>

          <Grid item md={1} xs={12}>
            <Box sx={{ padding: "10px" }}></Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="body1" color={"black"}>
                <HomeIcon
                  sx={{
                    display: { color: "black" },
                    mr: 1,
                    fontSize: "0.95em",
                  }}
                />
                부산광역시 남구 유엔로157번길 67 3층
              </Typography>
            </Box>
          </Grid>

          <Grid item md={3} xs={12}>
            <Box
              sx={{
                padding: "10px",
              }}
            >
              <Typography variant="body1" color={"black"}>
                <PhoneIcon
                  sx={{
                    display: { color: "black" },
                    mr: 1,
                    fontSize: "0.95em",
                  }}
                />
                051.623.0709
              </Typography>
            </Box>
          </Grid>

          <Grid item md={3} xs={12}>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="body1" color={"black"}>
                <EmailIcon
                  sx={{
                    display: { color: "black" },
                    mr: 1,
                    fontSize: "0.95em",
                  }}
                />
                leorealestate0415@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item md={1} xs={12}>
            <Box sx={{ padding: "10px" }}></Box>
          </Grid>
        </Grid>
        <hr />
        <br />
        <br />
      </Container>
      <Container>
        <Grid container spacing={1}>
          <Grid item md={3} xs={12}>
            <Typography component="h2" variant="h5" color={"black"}>
              <DirectionsTransitIcon
                sx={{
                  display: { color: "black" },
                  mr: 1,
                  fontSize: "0.95em",
                }}
              />
              지하철 이용 시
            </Typography>
          </Grid>
          <Grid item md={9} xs={12}>
            <Typography variant="h6" color={"black"}>
              <ArrowRightIcon
                sx={{
                  display: { color: "black" },
                  mr: 1,
                  fontSize: "0.95em",
                }}
              />
              2호선 대연역 - 1번출구, 스타벅스 우회전 후 200m 직진 '화오뎅' 건물
              3층
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <br />
      <Container>
        <Grid container spacing={1}>
          <Grid item md={3} xs={12}>
            <Typography component="h2" variant="h5" color={"black"}>
              <DirectionsCarIcon
                sx={{
                  display: { color: "black" },
                  mr: 1,
                  fontSize: "0.95em",
                }}
              />
              승용차 이용 시
            </Typography>
          </Grid>
          <Grid item md={9} xs={12}>
            <Typography variant="h6" color={"black"}>
              <ArrowRightIcon
                sx={{
                  display: { color: "black" },
                  mr: 1,
                  fontSize: "0.95em",
                }}
              />
              대연역 - 1번출구, 스타벅스 우회전 후 200m 직진 '화오뎅' 건물 3층
              (주차시설 없음)
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />

      <Container>
        <Grid container spacing={1}>
          <Grid
            item
            md={9}
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Grid
              container
              direction={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Grid>
                <Typography variant="h4" color={"black"}>
                  도하부동산
                </Typography>
              </Grid>
              <br />
              <Grid>
                <Typography variant="subtitle1" color={"black"}>
                  주소 : 부산광역시 남구 유엔로157번길 67 정안빌등 3충
                  도하부동산 &nbsp; 사업자등록번호 : 605-40-96326
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="subtitle1" color={"black"}>
                  대표공인중개사 : 박규민
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            container
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Grid>
              <Typography variant="h5" color={"black"}>
                Contact
              </Typography>
            </Grid>
            <br />
            <Grid>
              <Typography variant="subtitle1" color={"black"}>
                상담문의 : 051.623.0709(24시 연중무휴)
              </Typography>
            </Grid>
            <br />
            <Grid>
              <Typography variant="subtitle1" color={"black"}>
                © 도하부동산. All right Reserved.
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1" color={"black"}>
                Privacy Policy.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default InputDataScreen;
