export const handleResponse = (response) => {
  if (response.status === 404) {
    console.log("error sir.", response);
    throw new Error({ response });
  }
};
