'use client';
import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export default function SmartSavings() {
  const [hasSavedToday, setHasSavedToday] = useState(false);
  const [saveAmount, setSaveAmount] = useState<number | string>(15);
  const { user, saveMoney } = useAppContext();

  if (!user) return null;

  const handleSave = () => {
    const amount = Number(saveAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    if (user.balance >= amount) {
      saveMoney(amount);
      setHasSavedToday(true);
    } else {
      alert(`Insufficient funds to save K${amount} today.`);
    }
  };

  const progressPercentage = (user.savings / user.savingsGoal) * 100;

  return (
    <div className="glass-card animate-fade-in delay-200">
      <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem' }}>Smart Savings Bot</h3>
        <span className="badge" style={{ background: 'rgba(79,172,254,0.1)', color: 'var(--primary)', border: '1px solid rgba(79,172,254,0.2)' }}>AI Active</span>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '16px', marginBottom: '20px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '10px' }}>
          {hasSavedToday ? "You've successfully saved for today!" : "Suggested safe daily saving:"}
        </p>
        <div className="flex items-center gap-4">
          {hasSavedToday ? (
            <h2 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>✓</h2>
          ) : (
            <>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>K</span>
                <input 
                  type="number" 
                  value={saveAmount}
                  onChange={(e) => setSaveAmount(e.target.value)}
                  style={{ 
                    background: 'transparent', 
                    border: 'none', 
                    borderBottom: '2px solid rgba(79, 172, 254, 0.5)', 
                    color: 'white', 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    width: '100px', 
                    paddingLeft: '25px',
                    outline: 'none'
                  }}
                />
              </div>
              <button 
                className="btn btn-secondary" 
                style={{ padding: '6px 12px', fontSize: '0.8rem', borderRadius: '8px' }}
                onClick={handleSave}
              >
                Save Now
              </button>
            </>
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '0.9rem' }}>Goal: Restock Inventory</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>K{user.savings} / K{user.savingsGoal}</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: 'var(--surface-light)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${Math.min(100, progressPercentage)}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderRadius: '4px', transition: 'width 0.5s ease' }}></div>
        </div>
      </div>
    </div>
  );
}
