// import logo from './logo.svg';
// import './App.css';

import * as qrcode from "wifi-qr-code-generator";
// import Button from "@material-ui/core/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Card from "@mui/material/Card";

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [ssid, setSsid] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [encryption, setEncryption] = React.useState("WPA");
  const [hidden, setHidden] = React.useState(false);
  const [data, setData] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (key) => (event) => {
    if (key === "ssid") setSsid(event.target.value);
    if (key === "password") setPassword(event.target.value);
    if (key === "encryption") setEncryption(event.target.value);
    if (key === "hidden") setHidden(event.target.value);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    const pr = qrcode.generateWifiQRCode({
      ssid: ssid,
      password: password,
      encryption: encryption,
      hiddenSSID: hidden,
      outputFormat: { type: "image/png" },
    });
    pr.then((data) => setData(data));
    return () => {};
  }, [ssid, password, encryption, hidden]);

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, mx: "auto", my: 4 }}>
      <Box sx={{ p: 4 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel optional={null}>SSID/パスワード入力</StepLabel>
            <StepContent>
              <TextField
                sx={{ mb: 2 }}
                label="WiFi SSID"
                variant="outlined"
                fullWidth
                value={ssid}
                onChange={handleChange("ssid")}
              />
              <TextField
                sx={{ mb: 2 }}
                label="WiFi Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handleChange("password")}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">暗号化方式</FormLabel>
                <RadioGroup
                  row
                  aria-label="wifi-type"
                  name="row-radio-buttons-group"
                  value={encryption}
                  onChange={handleChange("encryption")}
                >
                  <FormControlLabel
                    value="WPA"
                    control={<Radio />}
                    label="WPA / WPA2"
                  />
                  <FormControlLabel
                    value="WEP"
                    control={<Radio />}
                    label="WEP"
                  />
                  <FormControlLabel
                    value="None"
                    control={<Radio />}
                    label="None"
                  />
                </RadioGroup>
              </FormControl>

              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  進む
                </Button>
                <Button disabled onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  戻る
                </Button>
              </Box>
            </StepContent>
          </Step>
          <Step>
            <StepLabel optional={null}>QRコードの表示</StepLabel>
            <StepContent>
              <a href={data} download={`${ssid}.png`}>
                <img alt="QRcode" src={data} />
              </a>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  href={data}
                  download={`${ssid}.png`}
                  sx={{ mt: 1, mr: 1 }}
                  fullWidth
                >
                  ダウンロードする
                </Button>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1 }}
                >
                  最初から
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  戻る
                </Button>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
      </Box>
    </Card>
  );
}

export default App;
