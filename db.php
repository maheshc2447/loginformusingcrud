<?php
    $conn = mysqli_connect("localhost","root","","cse");

    $name = $_POST["name"];
    $email = $_POST["email"];
    $pass = $_POST["pass"];

    $tab = "tb1";
    if(!$conn)
        echo mysqli_connect_error();
    else{
        
        $qur = "insert into tb1 values ('".$name."','".$email."','".$pass."')";

        $res = mysqli_query($conn,$qur);
        if(!$res)
            echo "table not there";
        else{
            echo "1 row inserted";
            include("cindex.html");
        }
    }
?>