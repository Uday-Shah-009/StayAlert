import axios from "axios";

export const FunctionCall = async(message) => {
   const res =  await axios.post("http://localhost:3000/check/message", { message });
   console.log(res);
   return res.data.data
}