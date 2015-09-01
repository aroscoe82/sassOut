<?php
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$sass = $request->sass;
  if (isset($sass))
  {
    $string=$sass;
  }else{
    $string = "ERROR";
  }
$file = 'people.txt';

// // Write the contents back to the file
file_put_contents($file, $string);

$fileOpen = "http://sandbox.aroscoe.com/testing/people.txt"; 

header("Content-Description: File Transfer"); 
header("Content-Type: application/octet-stream"); 
header("Content-Disposition: attachment; filename=\"$file\""); 

readfile ($fileOpen); 

 /*
   * Collect all Details from Angular HTTP Request.
   */ 
    
    // @$pass = $request->pass;
    echo $sass; //this will go back under "data" of angular call.
    /*
     * You can use $email and $pass for further work. Such as Database calls.
    */    

?>