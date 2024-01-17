import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid, IconButton, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/base";
import { useState } from "react";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+919999999999");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const check = () => {
    if (name == "") {
      setError("*Name is required");
    } else if (email == "") {
      setError("*Email is required");
    } else if (message == "") {
      setError("*Message is required");
    } else {
      setError("");
      submit();
    }
  };
  const submit = () => {
    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("message", message);

    // let config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "http://skfprodhouse.pythonanywhere.com/contactus/",
    //   data: data,
    // };

    // async function makeRequest() {
    //   try {
    //     const response = await axios.request(config);
    //     console.log(response.data);
    //     setEmail("");
    //     setName("");
    //     setMessage("");
    //   } catch (error) {
    //     //console.log(error);
    //   }
    // }

    // makeRequest();
  };
  return (
    <>
      <div
        class="py-40"
        style={{ backgroundColor: "", paddingBottom: "100px" }}
      >
        <FormControl>
          <Grid container rowSpacing={3} sx={{ backgroundColor: "" }}>
            <Grid
              item
              md={7}
              sm={12}
              xs={12}
              sx={{ paddingTop: "20px", backgroundColor: "2b2c2c" }}
            >
              <Grid container>
                <Grid item md={3} sm={1} xs={1}></Grid>
                <Grid item md={8} sm={10} xs={10}>
                  <Typography
                    class="text-3xl lg:text-5xl mb-2 text-bold font-bebas"
                    variant="h5"
                  >
                    Contact Information
                  </Typography>
                  <Typography class="text-xl lg:text-xl mb-2  pt-5  text-bold font-mono">
                    Any questions or reamrks...
                  </Typography>
                  <Typography class="text-xl lg:text-xl mb-2  font-mono">
                    Just write us a message!!
                  </Typography>
                </Grid>
                <Grid item md={1} sm={1} xs={1}></Grid>
                <Grid item md={3} sm={1} xs={1}></Grid>
                <Grid
                  item
                  md={8}
                  sm={10}
                  xs={10}
                  sx={{
                    padding: "40px",
                    paddingLeft: "0px",
                    paddingTop: "100px",
                  }}
                >
                  {/* <IconButton>
                    <EmailIcon sx={{ color: "red" }}></EmailIcon>
                  </IconButton> */}
                  {/* <div
                    style={{
                      display: "inline",
                      fontStyle: "bold",
                      fontSize: "19px",
                      fontWeight: "800",
                      color: "black",
                    }}
                  >
                    aditya.tiwari@sparkreachmedia.com
                  </div> */}
                  <div style={{ padding: "20px", paddingLeft: "0px" }}>
                    <IconButton>
                      <CallIcon sx={{ color: "red" }}></CallIcon>
                    </IconButton>
                    <div
                      style={{
                        display: "inline",
                        fontStyle: "bold",
                        fontSize: "19px",
                        fontWeight: "800",
                        color: "black",
                      }}
                    >
                      +91 88585 85149
                    </div>
                  </div>
                  <div>
                    <IconButton>
                      <LocationOnIcon sx={{ color: "red" }}></LocationOnIcon>
                    </IconButton>
                    <div
                      style={{
                        display: "inline",
                        fontStyle: "bold",
                        fontSize: "19px",
                        fontWeight: "800",
                        color: "black",
                        paddingBottom: "50px",
                      }}
                    >
                      Malad West
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "inline",
                        fontStyle: "bold",
                        fontSize: "19px",
                        fontWeight: "800",
                        color: "black",
                        paddingTop: "100px",
                      }}
                    >
                      {/* <a
                        href="https://maps.app.goo.gl/z6ABHJqiVMFeeyw86"
                        target="_blank"
                      >
                        <img
                          src=""
                          style={{ width: "70%", paddingTop: "30px" }}
                        />
                      </a> */}
                    </div>
                  </div>
                </Grid>
                <Grid item md={1} sm={1} xs={1}></Grid>
              </Grid>
            </Grid>
            <Grid item md={5} sx={{ padding:"30px" }} sm={12} xs={12}>
              <div
                class="bg-gray-200 "
                style={{ padding: "40px", width: "100%", borderRadius: 20 }}
              >
                <Grid container>
                  <Grid item md={12} className="contactus">
                    <Grid container>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{ paddingTop: "20px" }}
                      >
                        <TextField
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          required
                          id="standard-basic"
                          variant="outlined"
                          placeholder="Your name"
                          sx={{ width: "100%" }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{ paddingTop: "20px" }}
                      >
                        <TextField
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          required
                          id="standard-basic"
                          variant="outlined"
                          placeholder="Email"
                          sx={{ width: "100%" }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{ paddingTop: "20px" }}
                      >
                        <TextField
                          rows={4}
                          multiline
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          required
                          id="standard-basic"
                          variant="outlined"
                          placeholder="Message"
                          sx={{ width: "100%" }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                          paddingTop: "20px",
                          justifyContent: "end",
                          display: "flex",
                          alignItems: "end",
                        }}
                      >
                        <div style={{ color: "red" }}>{error}</div>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                          paddingTop: "10px",
                          justifyContent: "end",
                          display: "flex",
                          alignItems: "end",
                        }}
                      >
                        <Button
                          onClick={check}
                          sx={{
                            backgroundColor: "#C61414",
                            color: "white",
                            fontWeight: "bold ",
                            borderRadius: 10,
                            padding: "5px",
                            width: "30%",
                            "&:hover": {
                              backgroundColor: "#C61414",
                              color: "white",
                              borderRadius: 20,
                              padding: "5px",
                              width: "30%",
                            },
                          }}
                        >
                          Send
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </>
  );
}
