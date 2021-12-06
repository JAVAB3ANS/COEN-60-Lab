<?php 
    $existingAccountsArray= array("coen60","coen60l"); 
    $errorCount = 0;
    
    if (isset($_POST["enterButton"])) { 
        if (empty($_POST["account"])) {
            echo "<br>Invalid response. You forgot to enter an account name!";
            $errorCount++;
        }
        if (empty($_POST["password"])) {
            echo "<br>Invalid response. You forgot to enter a password!";
            $errorCount++;
        }
        if (strlen($_POST["account"]) < 8) {
            echo "<br>Invalid password. Password must be at least 8 characters";
            $errorCount++;
        } 
        if (!preg_match("~[0-9]+~", $_POST["password"])) {
            echo "<br>Invalid password. Password must contain at least 1 digit.";
            $errorCount++;
        }   
        if (in_array($_POST["account"], $existingAccountsArray)) {
            echo "<br>Account can't match existing accounts.";
            $errorCount++;
        }  
        if ($errorCount === 0 ) {
            echo ("<br>Success!");
        }
    }
?>