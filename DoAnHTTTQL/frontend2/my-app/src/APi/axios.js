import axios from "axios";
axios
  .get(`http://localhost:12345/api/bill`)
  .then((res) => {
    console.log("get response date --", res.data);
  })
  .catch((error) => console.log(error));
