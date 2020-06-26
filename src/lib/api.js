import axios from "axios";

// export const getRecogFile = ({ recog_status, server_id }) => {
//     axios.get(
//         `203.240.146.25:3000/recog_file?recog_status=${recog_status}&server_id=${server_id}`
//     );
// };

export const getPost = (id) =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUser = (id) =>
    axios.get(`https://jsonplaceholder.typicode.com/users`);
