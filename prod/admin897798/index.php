<?php
  session_start();
  if(isset($_SESSION['adminKey']) && $_SESSION['adminKey']=="8abd5b6492cdad380d53dd2f5b9112b4"){
    header('location: adminPage.php');
  }
?>
<?php
  $msg = "";
  if(isset($_POST['username']) && isset($_POST['password'])){
    $username = htmlspecialchars(addslashes(stripslashes($_POST['username'])));
    $password = htmlspecialchars(addslashes(stripslashes($_POST['password'])));
    if(md5($username)=="7c4e26f601664b6f18eff6093a060e47" && md5($password)=="460ab876484a3bfcc2ee7c0989264b3a"){
      session_start();
      $_SESSION['adminKey'] = "8abd5b6492cdad380d53dd2f5b9112b4";
      header('location: adminPage.php');
    }
    else{
      $msg = "<br>Authentication failed<br>";
    }
  }
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Login to Admin Panel | Pantheon 17</title>
</head>
<body>
  <section class="container">
    <div class="login">
      <center><h1>Login to Admin Panel</h1>
      <h5 style="color: red"><php if($msg!="") echo $msg; ?></h5>
      <form method="post" action="">
        <p><input type="text" name="username" value="" placeholder="Username"></p>
        <p><input type="password" name="password" value="" placeholder="Password"></p>
        <p class="submit"><input type="submit" name="commit" value="Login"></p>
      </form></center>
    </div>
  </section>
</body>
<style>
body {
  font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;
  color: #404040;
  background: #666;
}

.container {
  margin: 80px auto;
  width: 640px;
}

.login {
  position: relative;
  margin: 0 auto;
  padding: 20px 20px 20px;
  width: 310px;
  background: white;
  border-radius: 3px;
  @include box-shadow(0 0 200px rgba(white, .5), 0 1px 2px rgba(black, .3));

  &:before {
    content: '';
    position: absolute;
    top: -8px; right: -8px; bottom: -8px; left: -8px;
    z-index: -1;
    background: rgba(black, .08);
    border-radius: 4px;
  }

  h1 {
    margin: -20px -20px 21px;
    line-height: 40px;
    font-size: 15px;
    font-weight: bold;
    color: #555;
    text-align: center;
    text-shadow: 0 1px white;
    background: #f3f3f3;
    border-bottom: 1px solid #cfcfcf;
    border-radius: 3px 3px 0 0;
    @include linear-gradient(top, whiteffd, #eef2f5);
    @include box-shadow(0 1px #f5f5f5);
  }

  p { margin: 20px 0 0; }
  p:first-child { margin-top: 0; }

  input[type=text], input[type=password] { width: 278px; }

  p.remember_me {
    float: left;
    line-height: 31px;

    label {
      font-size: 12px;
      color: #777;
      cursor: pointer;
    }

    input {
      position: relative;
      bottom: 1px;
      margin-right: 4px;
      vertical-align: middle;
    }
  }

  p.submit { text-align: right; }
}


:-moz-placeholder {
  color: #c9c9c9 !important;
  font-size: 13px;
}

::-webkit-input-placeholder {
  color: #ccc;
  font-size: 13px;
}

input {
  font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;
  font-size: 14px;
}

input[type=text], input[type=password] {
  margin: 5px;
  padding: 0 10px;
  width: 200px;
  height: 34px;
  color: #404040;
  background: white;
  border: 1px solid;
  border-color: #c4c4c4 #d1d1d1 #d4d4d4;
  border-radius: 2px;
  outline: 5px solid #eff4f7;
  -moz-outline-radius: 3px; // Can we get this on WebKit please?
  @include box-shadow(inset 0 1px 3px rgba(black, .12));

  &:focus {
    border-color: #7dc9e2;
    outline-color: #dceefc;
    outline-offset: 0; // WebKit sets this to -1 by default
  }
}

input[type=submit] {
  padding: 0 18px;
  height: 29px;
  font-size: 12px;
  font-weight: bold;
  color: #527881;
  text-shadow: 0 1px #e3f1f1;
  background: #cde5ef;
  border: 1px solid;
  border-color: #b4ccce #b3c0c8 #9eb9c2;
  border-radius: 16px;
  outline: 0;
  @include box-sizing(content-box); // Firefox sets this to border-box by default
  @include linear-gradient(top, #edf5f8, #cde5ef);
  @include box-shadow(inset 0 1px white, 0 1px 2px rgba(black, .15));

  &:active {
    background: #cde5ef;
    border-color: #9eb9c2 #b3c0c8 #b4ccce;
    @include box-shadow(inset 0 0 3px rgba(black, .2));
  }
}
</style>
</html>
