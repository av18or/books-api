const React = require("react");
//stub function called Def w/ one paramater called HTML
function Def(html) {
  //inside Def function is our HTML skeleton for all pages:
  return (
    <html>
      <head>
        <title>Books</title>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
        {html.children}
      </body>
    </html>
  );
}

//export the Def function:
module.exports = Def;
