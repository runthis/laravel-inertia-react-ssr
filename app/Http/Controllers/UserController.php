<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class UserController extends Controller
{
    public function show(User $user): InertiaResponse
    {
        return Inertia::render('User/Show');
    }

    public function show2(User $user): InertiaResponse
    {
        return Inertia::render('User/ShowMore');
    }
}
