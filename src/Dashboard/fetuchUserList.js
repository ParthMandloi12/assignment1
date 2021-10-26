export const getDummyUserList = async (page,limit) => {
    let userList = "";
    let APIURL = `https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`;
    await fetch(APIURL, {
      headers: { "app-id": "617644fb9faa571cfde2c8be" },
    })
      .then(async function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        await response.json().then(function (data) {
            userList = data;
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
    return userList;
  };