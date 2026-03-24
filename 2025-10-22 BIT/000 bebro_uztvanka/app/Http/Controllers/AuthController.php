<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function showRegister()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:4|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        return redirect('/');
    }

    public function showLogin()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect('/');
        }

        return back()->withErrors([
            'email' => 'Wrong email or password.'
        ])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function profilePage(Request $request)
    {
        return view('auth.settings.profile', [
            'user' => $request->user(),
        ]);
    }

    public function accountPage(Request $request)
    {
        return view('auth.settings.account', [
            'user' => $request->user(),
        ]);
    }

    public function passwordPage(Request $request)
    {
        return view('auth.settings.password', [
            'user' => $request->user(),
        ]);
    }

    public function storiesPage(Request $request)
    {
        return view('auth.settings.stories', [
            'user' => $request->user()->load('stories'),
        ]);
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'location' => 'nullable|string|max:255',
            'age' => 'nullable|integer|min:1|max:120',
            'about' => 'nullable|string|max:2000',
        ]);

        $user = $request->user();

        $user->location = $request->location;
        $user->age = $request->age;
        $user->about = $request->about;
        $user->save();

        return redirect()->route('settings.profile.page')->with('success', 'Profile details updated successfully.');
    }

    public function updateAccount(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $request->user()->id,
        ]);

        $user = $request->user();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return redirect()->route('settings.account.page')->with('success', 'Account details updated successfully.');
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'password' => 'required|string|min:4|confirmed',
        ]);

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return redirect()->route('settings.password.page')->with('error', 'Current password is incorrect.');
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return redirect()->route('settings.password.page')->with('success', 'Password updated successfully.');
    }
}
