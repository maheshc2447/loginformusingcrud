<?php
    $conn = mysqli_connect("localhost","root","","cse");

    $email = $_POST["email"];
    $pass = $_POST["pass"];


    if(!$conn)
        echo mysqli_connect_error();
    else{
        $qur = "select * from tb1";

        $res = mysqli_query($conn,$qur);
        if(!$res)
            echo "no table selected";
        else{
            if(mysqli_num_rows($res)>0){
                while($rw = mysqli_fetch_array($res)){
                    if($rw["email"]==$email && $rw["pass"]==$pass){
                        include("cindex.html");
                    }
                }
        }
    }
}
?>