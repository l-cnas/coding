<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostSumatoriusController extends Controller
{
    // Rodo formą
    public function forma()
    {
        return view('post_suma_forma');
    }

    // Apdoroja POST
    public function skaiciuoti(Request $request)
    {
        $a = $request->input('a');
        $b = $request->input('b');

        $rezultatas = $a + $b;

        return redirect()->route('post.suma.rezultatas')
                         ->with('a', $a)
                         ->with('b', $b)
                         ->with('rezultatas', $rezultatas);
    }

    // Rodo rezultatą po redirect
    public function rezultatas()
    {
        return view('post_suma_rezultatas');
    }
}