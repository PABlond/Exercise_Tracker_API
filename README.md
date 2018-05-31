<!DOCTYPE html>
<html>

   <head>
      <title>Exercise Tracker | Free Code Camp</title>
      <link rel="shortcut icon" href="https://cdn.hyperdev.com/us-east-1%3A52a203ff-088b-420f-81be-45bf559d01b1%2Ffavicon.ico" type="image/x-icon"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
      <link href="https://fuschia-custard.glitch.me/style.css" rel="stylesheet" type="text/css">
   </head>

   <body>
      <div class="container">
         <h1>Exercise tracker</h1>
        <p>
          by PABlond
        </p>
          <form action="/api/exercise/new-user" method="post">
            <h3>Create a New User</h3>
            <p><code>POST /api/exercise/new-user</code></p>
            <input id="uname" type="text" name="username" placeholder="username">
            <input type="submit" value="Submit">
          </form>
          <form action="/api/exercise/add" method="post">
            <h3>Add exercises</h3>
            <p><code>POST /api/exercise/add</code></p>
            <input id="uid" type="text" name="userId" placeholder='userId*'>
            <input id="desc" type="text" name="description" placeholder="description*">
            <input id="dur" type="text" name="duration" placeholder="duration* (mins.)">
            <input id="dur" type="text" name="date" placeholder="date (yyyy-mm-dd)">
            <input type="submit" value="Submit">
          </form>
          <p><strong>GET users's exercise log: </strong><code>GET /api/exercise/log?{userId}[&amp;from][&amp;to][&amp;limit]</code></p>
        <p>Example: <code>https://grateful-crate.glitch.me/api/exercise/log?userId=5b10020f5fc90104bb6d795b</code></code></p>          
      </div>
   </body>

</html>