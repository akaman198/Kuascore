'use client';
import React from 'react';

export default function Nudges() {
  return (
    <div className="glass-card animate-fade-in delay-300">
      <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>AI Insights & Nudges</h3>
      
      <div className="nudge-card">
        <div className="nudge-icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Income Consistency</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>You&apos;ve received payments for 5 consecutive days. This boosted your score by 10 points!</p>
        </div>
      </div>

      <div className="nudge-card" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
        <div className="nudge-icon" style={{ background: 'rgba(245, 158, 11, 0.2)', color: 'var(--warning)' }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Upcoming Expense Alert</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Based on your history, you usually pay rent soon. Want to set aside K200 now?</p>
        </div>
      </div>
    </div>
  );
}
