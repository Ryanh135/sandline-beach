<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Document</title>
</head>
<body>
    <form>
        <h1>Login</h1>
        <div class="textbox">
            <input type="text" placeholder="username" name="username">
        </div>
        <div class="textbox">
            <input type="password" placeholder="password" name="password">
        </div>
            <div class="loginbtn">
                <input type="submit" value="login" class="loginbtn" name="login_btn">
            </div>
            <div>
                Don'T have an account!
                <br>
                <a href="#">sign up</a>
            </div>
        </div>
    </form>
</body>
</html>
<?php
$conn = mysqli_connect("localhost", "root", "", "websitelogin");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['login_btn'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Using a prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT password FROM logindetails WHERE username = ?");
    $stmt->bind_param("s", $username);
    
    if ($stmt->execute()) {
        $stmt->bind_result($resultpassword);
        $stmt->fetch();

        // Verify password with password_verify, assuming passwords are hashed with password_hash
        if (password_verify($password, $resultpassword)) {
            header('Location: index.html');
            exit;
        } else {
            echo "<script>alert('Login unsuccessful');</script>";
        }
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

mysqli_close($conn);
?>