'use client';
import React from 'react';
import { useAppContext } from '@/context/AppContext';

export default function RecentTransactions() {
  const { user } = useAppContext();

  if (!user) return null;

  return (
    <div className="glass-card animate-fade-in delay-300">
      <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem' }}>Recent Activity</h3>
        <a href="#" style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>View All</a>
      </div>

      <div className="flex flex-col">
        {user.transactions.slice(0, 4).map(tx => (
          <div key={tx.id} className="transaction-item">
            <div className="flex items-center gap-4">
              <div style={{ 
                width: '40px', height: '40px', borderRadius: '50%', 
                background: tx.type === 'in' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                color: tx.type === 'in' ? 'var(--success)' : 'var(--warning)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {tx.type === 'in' ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                )}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '2px' }}>{tx.name}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{tx.date}</p>
              </div>
            </div>
            <div style={{ fontWeight: '600', color: tx.type === 'in' ? 'var(--success)' : 'var(--text-main)' }}>
              {tx.type === 'in' ? '+' : '-'}K{tx.amount.toFixed(2)}
            </div>
          </div>
        ))}
        {user.transactions.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', padding: '10px 0' }}>No recent activity.</p>
        )}
      </div>
    </div>
  );
}
