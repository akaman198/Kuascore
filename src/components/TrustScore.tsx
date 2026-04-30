'use client';
import React, { useState } from 'react';

export default function TrustScore() {
  const [unlocked, setUnlocked] = useState(false);
  const score = 785;
  const maxScore = 1000;
  const percentage = (score / maxScore) * 100;

  return (
    <div className="glass-card animate-fade-in delay-100">
      <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem' }}>AI Trust Score</h3>
        <span className="badge badge-success">+15 pts this week</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="progress-ring" style={{ '--percentage': percentage } as React.CSSProperties}>
          <div className="progress-value">
            {score}
            <span>/ {maxScore}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {unlocked 
              ? "Offers unlocked! We have sent a K500 micro-loan offer to your inbox."
              : "Your transaction consistency has improved! You are now eligible for micro-loans up to K500."}
          </p>
          {!unlocked && (
            <div style={{ marginTop: '10px' }}>
              <button 
                className="btn" 
                style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                onClick={() => setUnlocked(true)}
              >
                Unlock Offers
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
