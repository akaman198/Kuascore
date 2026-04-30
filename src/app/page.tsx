'use client';
import DashboardLayout from '@/components/DashboardLayout';
import TrustScore from '@/components/TrustScore';
import SmartSavings from '@/components/SmartSavings';
import Nudges from '@/components/Nudges';
import RecentTransactions from '@/components/RecentTransactions';
import { useAppContext } from '@/context/AppContext';

export default function Home() {
  const { user, addTransaction } = useAppContext();

  if (!user) return null;

  const handleQuickTransfer = () => {
    const amount = 50;
    if (user.balance >= amount) {
      addTransaction('Quick Transfer to Family', amount, 'out');
      alert(`Sent K${amount} successfully!`);
    } else {
      alert('Insufficient funds for Quick Transfer.');
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center" style={{ marginBottom: '30px' }}>
        <div>
          <h1 className="text-gradient" style={{ fontSize: '2rem' }}>Welcome back, {user.name.split(' ')[0]}! 👋</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Balance: <strong style={{ color: 'white' }}>K{user.balance.toFixed(2)}</strong></p>
        </div>
        <button className="btn" onClick={handleQuickTransfer}>Quick Transfer</button>
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
