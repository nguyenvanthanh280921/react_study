<?php
function righteous($number){
    if($number <= 0)
    return false;
    $square = 0;
    $i = 1;
    while($square <= $number){
        $square = $i*$i;
        if($square == $number)
            return true;
        $i++;
    }
    return false;
}
if(righteous(2)){
    echo  "Là số chính phương";
}else{
    echo "Không phải là số chính phương";
}