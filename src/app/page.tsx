'use client';
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import TrustScore from '@/components/TrustScore';
import SmartSavings from '@/components/SmartSavings';
import Nudges from '@/components/Nudges';
import RecentTransactions from '@/components/RecentTransactions';
import { useAppContext } from '@/context/AppContext';

export default function Home() {
  const { user, addTransaction } = useAppContext();
  const [transferAmount, setTransferAmount] = useState<number | string>(50);

  if (!user) return null;

  const handleQuickTransfer = () => {
    const amount = Number(transferAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    if (user.balance >= amount) {
      addTransaction('Quick Transfer to Family', amount, 'out');
      alert(`Sent K${amount.toFixed(2)} successfully!`);
      setTransferAmount('');
    } else {
      alert('Insufficient funds for Quick Transfer.');
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center" style={{ marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 className="text-gradient" style={{ fontSize: '2rem' }}>Welcome back, {user.name.split(' ')[0]}! 👋</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Balance: <strong style={{ color: 'white' }}>K{user.balance.toFixed(2)}</strong></p>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>K</span>
            <input 
              type="number" 
              value={transferAmount} 
              onChange={(e) => setTransferAmount(e.target.value)}
              placeholder="0.00"
              style={{ padding: '8px 10px 8px 25px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.05)', color: 'white', width: '100px', outline: 'none' }}
            />
          </div>
          <button className="btn" onClick={handleQuickTransfer}>Transfer</button>
        </div>
      </div>

      <div className="grid-dashboard">
        <TrustScore />
        <SmartSavings />
      </div>

      <div className="grid-dashboard" style={{ marginTop: '24px' }}>
        <Nudges />
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
}
