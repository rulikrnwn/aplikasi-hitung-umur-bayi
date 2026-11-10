<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('about-app', function () {
    $this->comment('Kalkulator Usia Bayi');
})->purpose('Menampilkan informasi aplikasi');
