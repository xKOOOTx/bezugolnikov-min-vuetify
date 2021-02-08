<?php
$rootpath = '../assets/images/Studio/';
$fileinfos = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootpath)
);
$studioImages = [];
foreach($fileinfos as $pathname => $fileinfo) {
    if (!$fileinfo->isFile()) continue;
    $studioImages[] = $pathname;
}

//print_r($studioImages);
$studioJson = json_encode($studioImages);

print_r($studioJson);
