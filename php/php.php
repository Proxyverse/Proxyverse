<?php 
$username = 'username'; 
$password = 'password'; 
$proxy = 'proxy.proxyverse.io'; 
$target = curl_init('https://api.ipify.org/'); 
curl_setopt($target, CURLOPT_RETURNTRANSFER, 1); 
curl_setopt($target, CURLOPT_PROXY, $proxy); 
curl_setopt($target, CURLOPT_PROXYUSERPWD, "$username:$password"); 
$result = curl_exec($target); 
curl_close($target); 
if ($result) 
echo $result; 
?> 
