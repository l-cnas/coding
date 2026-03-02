<?php
// This file helps IDEs understand Laravel's magic methods and facades
// It doesn't affect runtime but improves IDE autocomplete and reduces false error warnings

namespace PHPSTORM_META {
    override(\Illuminate\Support\Facades\Route::class, map([
        '' => \Illuminate\Routing\Router::class,
    ]));

    override(\Illuminate\Support\Facades\Session::class, map([
        '' => \Illuminate\Session\SessionManager::class,
    ]));

    override(\Illuminate\Support\Facades\Redirect::class, map([
        '' => \Illuminate\Routing\Redirector::class,
    ]));
}
