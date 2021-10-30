<?php
//chu vi diên tích hình chữ nhật
    $a = 5;
    $b = 5;
    $chuVi = ($a+$b)*2;
    $dienTich = $a*$b;
    echo "Chu vi hình chữ nhật: " .$chuVi .'<br>';
    echo "Diện tích hình chữ nhật: ". $dienTich;
    
?>
<?php
//diện tích chu  vi hình tròn
    echo '<pre>'.PHP_EOL;
    $bk = 5;
    define('PI',3.14);
    $dt = PI*($bk*$bk);
    echo "Diện tính hình tròn là: ". $dt.'<br>';
    $chuVi = 2*$bk*PI;
    echo "Chu Vi hình tròn là: ". $chuVi;
?>

<?php
// ký tự liền sau 
echo '<pre>'.PHP-EOL;
    $str = 'a';
    echo ++$str; // prints 'b'

    echo '<pre>'.PHP_EOL;
    $str = 'z';
    $next_ch = ++$str; 
    if (strlen($next_ch) > 1) { 
    $next_ch = $next_ch[0];
    }
    echo $next_ch; 

?>
<?php
//tích 2 số nguyên 
echo '<pre>'.PHP_EOL;
$a = 5;
$b = -5;
if($a*$b >= 0){
    echo '1';
}
else if($a*$b < 0){
    echo '-1';
}
else {
    echo '0';
}
?>