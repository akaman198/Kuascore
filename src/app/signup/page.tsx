'use client';
import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

export default function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { signup } = useAppContext();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    signup(name, phone);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', padding: '20px' }}>
      <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem', margin: '0 auto 15px' }}>K</div>
          <h1 className="text-gradient" style={{ fontSize: '1.8rem', margin: 0 }}>Join KuaScore</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '5px' }}>Build your financial identity today</p>
        </div>

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-muted)' }}>Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. David Mwansa" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', outline: 'none', fontFamily: 'var(--font-body)' }}
            />
          </div>
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
          
          <button type="submit" className="btn" style={{ width: '100%' }}>Create Account</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}
