import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f433d4594dbe480c99c45012b24ee1bc'
  }
})