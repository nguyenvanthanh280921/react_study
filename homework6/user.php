<?php
 $classUsers = [
    0 => [
        'id' => 1,
        'name' => 'ThanhNV',
        'email'  => 'thanhnv@gmail.com',
        'score' => 6
    ],
    1 => [
        'id' => 2,
        'name' => 'TuTV',
        'email'  => 'tutv@gmail.com',
        'score' => 10
    ],
    2 => [
        'id' => 3,
        'name' => 'KhanhNB',
        'email'  => 'khanhnb@gmail.com',
        'score' => 8
    ],
    3 => [
        'id' =>4,
        'name' => 'NamNV',
        'email'  =>'namnv@gmail.com',
        'score' => 8
    ],
    4 => [
        'id' =>5,
        'name' => 'TuanTQ',
        'email'  => 'tuantq@gmail.com',
        'score' => 5
    ],
    5 => [
        'id' =>6,
        'name' => 'QuynhNB',
        'email'  => 'qunhnb@gmail.com',
        'score' => 7
    ],
    6 => [
        'id' =>7,
        'name' => 'TrungNV',
        'email'  =>  'trungnv@gmail.com',
        'score' => 3
    ],
];
$user = array_column($classUsers,'score');
print_r($user);