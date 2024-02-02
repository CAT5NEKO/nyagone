exports.handler = async function (event, context) {
  return {
    statusCode: 410,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nyagone</title>
                <style>
                    body {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: "Arial Black";
                        height: 100vh;
                        margin: 0;
                        background-color: #141438;
                    }
                    h1 {
                        text-align: center;
                        font-size: 20em;
                        font-family: "Arial Black";
                        color: #e3dfdf;
                    }
                </style>
            </head>
            <body>
                <h1>410</h1>
                <h2>THIS PAGE IS GONE</h2>
            </body>
            </html>
        `,
  };
};