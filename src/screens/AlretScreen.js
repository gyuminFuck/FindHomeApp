import React, { useState } from "react";
import Alert from "@mui/material/Alert";

import Container from "@mui/material/Container";

function AlretScreen() {
  if (props.msg == "error") {
    return (
      <Container>
        <Alert severity="error">
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      </Container>
    );
  } else {
    return (
      <Container>
        <Alert severity="success">
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Container>
    );
  }
}

export default AlretScreen;
