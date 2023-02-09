<?php

// create string 
$source_url = __DIR__ . '/data.json';

// read file
$json_data = file_get_contents($source_url);

$disc = json_decode($json_data, true);

// want to write in json language
header('Content-Type: application/json');

// convert to jason and return the disks
echo json_encode($disc);
