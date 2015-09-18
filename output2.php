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

// header("Content-Description: File Transfer"); 
// header("Content-Type: application/octet-stream"); 
// header("Content-Disposition: attachment; filename=\"$file\""); 

// readfile ($fileOpen); 



header('Pragma: public');   // required
  header('Expires: 0');   // no cache
  header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
  header('Last-Modified: '.gmdate ('D, d M Y H:i:s', filemtime ($file)).' GMT');
  header('Cache-Control: private',false);
  header('Content-Type: '.$mime);
  header('Content-Disposition: attachment; filename="'.basename($file).'"');
  header('Content-Transfer-Encoding: binary');
  header('Content-Length: '.filesize($file));  // provide file size
  header('Connection: close');
  readfile($file);   // push it out

  

 /*
   * Collect all Details from Angular HTTP Request.
   */ 
    
    // @$pass = $request->pass;
    echo $sass; //this will go back under "data" of angular call.
    /*
     * You can use $email and $pass for further work. Such as Database calls.
    */    

?>