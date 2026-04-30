'use client';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="flex items-center gap-4" style={{ marginBottom: '50px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>K</div>
          <h2 className="text-gradient" style={{ fontSize: '1.5rem', margin: 0 }}>KuaScore</h2>
        </div>
        
        <nav className="flex flex-col gap-4">
          <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(79, 172, 254, 0.1)', color: 'var(--primary)', fontWeight: '600' }}>Dashboard</a>
          <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: 'var(--text-muted)' }}>Trust Score</a>
          <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: 'var(--text-muted)' }}>Savings</a>
          <a href="#" style={{ padding: '12px 16px', borderRadius: '12px', color: 'var(--text-muted)' }}>Analytics</a>
        </nav>

        <div style={{ marginTop: 'auto', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <div>
              <h4 style={{ margin: 0, fontSize: '0.9rem' }}>David M.</h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Vendor Account</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav">
        <a href="#" className="nav-item active">
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          Home
        </a>
        <a href="#" className="nav-item">
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          Score
        </a>
        <a href="#" className="nav-item">
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Save
        </a>
        <a href="#" className="nav-item">
          <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          Profile
        </a>
      </nav>
    </div>
  );
}
