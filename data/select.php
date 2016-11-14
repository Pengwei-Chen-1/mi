<?php
header('Content-Type:application/json;charset=UTF-8');

$type =$_REQUEST['type'];

$conn = mysqli_connect('127.0.0.1','root','','mi',3306);
$sql = 'SET NAMES UTF8';
mysqli_query($conn,$sql);

$sql = "SELECT * FROM mi_select WHERE type='$type'";
$result = mysqli_query($conn,$sql);

$output = [];

while(($row=mysqli_fetch_assoc($result))!=null){
  $output[] = $row;
}
echo json_encode($output);

