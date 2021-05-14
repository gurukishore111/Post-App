export const baseUrl = "http://192.168.43.104:9000/post";

export const getPost = async () => {
  try {
    const response = await fetch(baseUrl);
    //console.log(response);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export const addPost = async (formdata) => {
  //console.log(formdata);
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: formdata,
  };
  try {
    const response = await fetch(baseUrl, options);
    //console.log(response);
    return response.json();
  } catch (error) {
    //console.log(error);
    return error;
  }
};
