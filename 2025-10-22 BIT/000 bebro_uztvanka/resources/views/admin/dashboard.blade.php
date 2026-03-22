@extends('layouts.admin')

@section('page_title', 'Admin Dashboard')

@section('admin_content')
    <div class="admin-page-box">
        <h2>Dashboard</h2>

        <div class="admin-stats-grid">
            <div class="admin-stat-card">
                <h3>Registered Users</h3>
                <p>{{ $userCount }}</p>
            </div>

            <div class="admin-stat-card">
                <h3>Stories Posted</h3>
                <p>{{ $storyCount }}</p>
            </div>
        </div>
    </div>
@endsection
