<?php
if (isset($_POST['login'])) {
    if ($_POST['loginid'] == 'Stream5' && $_POST['password'] == 'inatl123!') {
        session_start();
        $_SESSION['login'] = true;
        header('location: home.php');
        exit;
    } else
        $error = 'Invalid UserID/Password';
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NinaCDN Admin</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/login.css">

</head>
<style>

</style>

<body>


    <div class="circle-abs">
        <div class="circle-container">
            <div class="circle cir1"></div>
            <div class="rect cir2"></div>
            <div class="circle cir3"></div>
            <div class="rect cir4"></div>
            <div class="rect cir5"></div>
            <div class="circle cir6"></div>
            <div class="rect cir7"></div>
            <div class="circle cir8"></div>

            <div class="overlay">
                <div class="main-container2">
                    <div class="login-header">
                        <img class="login-header-logo" src="images/logo.png" alt="Nina CDN Logo">
                    </div>


                    <section class="content-section">
                        <h1 class="login-title">Welcome to NINACDN</h1>
                        <p class="login-p">Login to Access Dashboard</p>
                        <?php if (isset($error)) echo '<h5 class="login-title" style="color:red; margin-bottom: 2.5rem;">' . $error . '</h5>'; ?>

                        <form method="post" style="font-size: 18px;">
                            <!-- <span class="login-title2">Login ID:</span> -->
                            <input class="form-input" type="text" name="loginid" placeholder="Login ID">
                            <!-- <span class="login-title2">Password:</span> -->
                            <input class="form-input" type="password" name="password" placeholder="Password">
                            <input class="form-btn" type="submit" name="login" value="Login">

                        </form>
                    </section>
                </div>
            </div>

        </div>
    </div>


</body>

</html>
