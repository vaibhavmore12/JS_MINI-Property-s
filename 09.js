<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Handling</title>
</head>
<body>
    {/* <!-- JS Starts --> */}
    <script>
        fetch("https://jsonplaceholder.typicode.com/posts/123456789")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Display data here
            console.log(data);
        })
        .catch((error) => {
            // Handle error here
            console.error('There has been a problem with your fetch operation:', error);
            document.body.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
    </script>
    {/* <!-- JS Ends --> */}
</body>
</html>
