import React, { useState } from "react";
import Alert from "@mui/material/Alert";

import Container from "@mui/material/Container";

function AlretScreen() {
  return (
    <Container>
      <Alert severity="success">
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Container>
  );
}

export default AlretScreen;
