async function helloCounter() {
  const url =
    "https://api-siddheshpatil.herokuapp.com/singleboard/api/auth/counter";
  const data = {
    name: "siddheshpatil.in",
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  console.log(json);
}

helloCounter();
