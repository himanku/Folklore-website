import axios from "axios";



export const AddUserApi=async(cread)=>{
  console.log(cread)
 let res= await axios.post(`https://vast-puce-mussel-tie.cyclic.app/users/register`,cread)
  console.log(res)
  return res.data
}

export const LoginApi=async(cread)=>{
  let res= await axios.post(`https://vast-puce-mussel-tie.cyclic.app/users/login`,cread)
  return res.data
}

