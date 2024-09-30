<?php

use Illuminate\Support\Facades\Route;

Route::prefix('admin')->middleware('auth')->group(function () {
    //require __DIR__.'/auth.php';
    require __DIR__."/auth/inicio.php";
});

