<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SkaiciaiController extends Controller
{
    public function index(Request $request)
    {
        $skaiciai = $request->session()->get('skaiciai', []);
        return view('skaiciai.index', compact('skaiciai'));
    }

    public function prideti(Request $request)
    {
        $skaicius = (int) $request->input('skaicius');

        $skaiciai = $request->session()->get('skaiciai', []);
        $skaiciai[] = $skaicius;

        $request->session()->put('skaiciai', $skaiciai);

        return redirect()->route('skaiciai.index');
    }

    public function isvalyti(Request $request)
    {
        $request->session()->forget('skaiciai');
        return redirect()->route('skaiciai.index');
    }
}