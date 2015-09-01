<?php

  $data = $_POST['data'];
  $sheetName = $_POST['sheetName'];

  if (isset($data)){
    $string = $data;
  }else{
    $string = "ERROR";
  }

  if (isset($data)){
    $sheetname = $sheetName;
  }else{
    $sheetname = "unknown";
  }

$file = $sheetname . '.scss';

// // Write the contents back to the file
file_put_contents($file, $string);

$fileOpen = "http://sandbox.aroscoe.com/testing/" . $file; 

header("Content-Description: File Transfer"); 
header("Content-Type: application/octet-stream"); 
header("Content-Disposition: attachment; filename=\"$file\""); 

readfile ($fileOpen); 

?>