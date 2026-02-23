<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SumatoriusController extends Controller
{
    public function suma($a, $b)
    {
        $rezultatas = $a + $b;

        return view('suma', [
            'a' => $a,
            'b' => $b,
            'rezultatas' => $rezultatas
        ]);
    }
}