import axios from "axios";

export const FunctionCall = async(message) => {
   const res =  await axios.post("https://stayalertbackend.onrender.com/check/message", { message });
   console.log(res);
   return res.data.data
}
