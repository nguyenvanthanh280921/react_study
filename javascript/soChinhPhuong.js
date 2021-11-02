function lasochinhphuong($num-){
    if($num<=0)
        return false;
            $binhphuong=0;
            $i=1;
    while($binhphuong<=$-num)
{
$binhphuong=$i*$i;
    if($binhphuong==$num-)
        return true;
        $i++;
    }
return false;
}

if(lasochinhphuong(4-))
echo'4 là số chính phương';
else
echo'4 không là số chính phương';