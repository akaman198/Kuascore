'use client';
import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { login } = useAppContext();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(phone);
    if (!success) {
      setError('Account not found. Please sign up first.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', padding: '20px' }}>
      <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem', margin: '0 auto 15px' }}>K</div>
          <h1 className="text-gradient" style={{ fontSize: '1.8rem', margin: 0 }}>Welcome Back</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '5px' }}>Enter your phone number to continue</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-muted)' }}>Phone Number</label>
            <input 
              type="tel" 
              placeholder="e.g. 0970000000" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', outline: 'none', fontFamily: 'var(--font-body)' }}
            />
          </div>
          
          {error && <p style={{ color: 'var(--danger, #EF4444)', fontSize: '0.85rem', margin: 0 }}>{error}</p>}
          
          <button type="submit" className="btn" style={{ width: '100%' }}>Login</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: '600' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
