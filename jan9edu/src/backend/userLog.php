<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Header:Content-Type');
    header('Content-Type:application/json');
    include "./config.php";
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $fname = $_POST['fname'];
        $pass = $_POST['pass'];

        $dbcon = new mysqli($serverName, $dbUser, $dbpass, $dbName);
        if($dbcon -> connect_error) {
            echo "connection failed at database connect";
        } else {
            $cmd = "SELECT * FROM user_tb";
            if($dbcon -> query($cmd)) {
                $resultBox = [];
                $result = $dbcon -> query($cmd);
                $associatedArray = $result -> fetch_all();
                foreach($associatedArray as $element) {
                    if($fname == $element[1]) {
                    // if($fname == $element[1] && $element[4] == password_hash($pass, PASSWORD_DEFAULT)) {
                        echo "logged in successfully!";
                        echo json_encode($element[4]);
                        echo "           ";
                        echo password_hash($pass, PASSWORD_DEFAULT);
                        return;
                    }
                }
                echo "no matched user!";
                echo json_encode($associatedArray);
                // $encodedAssociatedArray = json_encode($associatedArray);

            } else {
                echo "failed to run cmd!";
            }
        }
    }
?>