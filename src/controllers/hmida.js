const axios = require("axios");

// map array of objects to array of values and console .log one every 3 seconds
const result = [];
async function fetchTimeout(actions) {
  try {
    const { data: response } = await axios.get(
      "https://dummyjson.com/products/" + actions.data[0]
    );
    const responseResult = {
      id: response.id,
      title: response.title,
      index: actions.data[0],
    };
    actions.data.shift();
    result.push(responseResult);
    if (actions.data.length) {
      setTimeout(() => {
        fetchTimeout(actions);
      }, actions.delay);
    }
  } catch (error) {
    console.log(error);
    setTimeout(() => {
      fetchTimeout(actions);
    }, actions.delay);
  }

  if (actions.data.length == 0) {
    actions.reactiveData.value = result;
  }
}

module.exports = fetchTimeout;
