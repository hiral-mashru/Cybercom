<!DOCTYPE html>
<html>
<head>
    <style>
        table,td,th {
            border: 1px solid black;
            width : 500px;
            text-align: center;
        }
        table {
            height: 600px;
        }
    </style>
    <title>Information</title>
</head>
<body>
    <center>
    <?php 
        $fName = $lName = $date = $month = $year = $gender = $email =  $password  =$secQue = $secAns = $address = $city = $state = $zip1 = $zip2 = $phone = $mobile = ""; 
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $fName = $_POST["firstName"];
            $lName = $_POST["lastName"];
            $date = $_POST["day"];
            $month = $_POST["month"];
            $year = $_POST["year"];
            $gender = $_POST["gender"];
            if($_POST["email"] == $_POST["reEmail"]){
                $email = $_POST["email"];
            }
            if($_POST["password"] == $_POST["rePassword"]) {
                $password = $_POST["password"];
            }
            $secQue = $_POST["securityQue"];
            $secAns = $_POST["securityAns"];
            $address = $_POST["address"];
            $city = $_POST["city"];
            $state = $_POST["state"];
            $zip1 = $_POST["zip1"];
            $zip2 = $_POST["zip2"];
            $phone = $_POST["phone"];
            $mobile = $_POST["mobile"];
        }
    ?>
    <table>
        <tr>
            <th>First Name</th>
            <td><?php echo $fName ?></td>
        </tr>
        <tr>
            <th>Last Name</th>
            <td><?php echo $lName ?></td>
        </tr>
        <tr>
            <th>Date of Birth</th>
            <td><?php echo $date ?>, &nbsp;<?php echo $month ?>&nbsp;<?php echo $year ?></td>
        </tr>
        <tr>
            <th>Gender</th>
            <td><?php echo $gender ?></td>
        </tr>
        <tr>
            <th>Email</th>
            <td><?php echo $email ?></td>
        </tr>
        <tr>
            <th>Password</th>
            <td><?php echo $password ?></td>
        </tr>
        <tr>
            <th>Security Question</th>
            <td><?php echo $secQue ?></td>
        </tr>
        <tr>
            <th>Security Answer</th>
            <td><?php echo $secAns ?></td>
        </tr>
        <tr>
            <th>Address</th>
            <td><?php echo $address ?></td>
        </tr>
        <tr>
            <th>City</th>
            <td><?php echo $city ?></td>
        </tr>
        <tr>
            <th>State</th>
            <td><?php echo $state ?></td>
        </tr>
        <tr>
            <th>Zip Code</th>
            <td><?php echo $zip1, " ", $zip2  ?></td>
        </tr>
        <tr>
            <th>Phone</th>
            <td><?php echo $phone," ",$mobile ?></td>
        </tr>
    </table>
    </center>
</body>
</html>