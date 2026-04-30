'use client';
import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export default function TrustScore() {
  const [unlocked, setUnlocked] = useState(false);
  const { user, unlockOffers } = useAppContext();

  if (!user) return null;

  const score = user.score;
  const maxScore = 1000;
  const percentage = (score / maxScore) * 100;

  const handleUnlock = () => {
    unlockOffers();
    setUnlocked(true);
  };

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
              ? "Offers unlocked! We have disbursed a K500 micro-loan to your balance."
              : "Your transaction consistency has improved! You are now eligible for micro-loans up to K500."}
          </p>
          {!unlocked && (
            <div style={{ marginTop: '10px' }}>
              <button 
                className="btn" 
                style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                onClick={handleUnlock}
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
