<?php 
    $account= $_POST["account"];
    $usernamelength= strlen($account); 
    $password= $_POST["password"];
    $existingAccountsArray= array("coen60","coen60l"); 
    
    if (isset($_POST["enterButton"])) { 
        if (empty($account)) {
            echo "<br>Invalid response. You forgot to enter an account name!"; 
        }
        else if (empty($_POST["password"])) {
            echo "<br>Invalid response. You forgot to enter a password!"; 
        }
        else if (strlen($password) < 8) {
            echo "<br>Invalid password. Password must be at least 8 characters"; 
        } 
        else if (!preg_match("~[0-9]+~", $password)) {
            echo "<br>Invalid password. Password must contain at least 1 digit."; 
        }   
        else if (in_array($account, $existingAccountsArray)) {
            echo "<br>Account can't match existing accounts.";
        }  else {
            echo "<br>Success!";
        }
    }
?>