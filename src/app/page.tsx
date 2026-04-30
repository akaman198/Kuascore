import DashboardLayout from '@/components/DashboardLayout';
import TrustScore from '@/components/TrustScore';
import SmartSavings from '@/components/SmartSavings';
import Nudges from '@/components/Nudges';
import RecentTransactions from '@/components/RecentTransactions';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center" style={{ marginBottom: '30px' }}>
        <div>
          <h1 className="text-gradient" style={{ fontSize: '2rem' }}>Welcome back, David! 👋</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Here is your financial snapshot for today.</p>
        </div>
        <button className="btn">Quick Transfer</button>
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
