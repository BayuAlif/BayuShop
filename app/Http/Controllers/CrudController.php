<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    public function admin()
    {
        return Inertia::render('Admin');
    }
}
