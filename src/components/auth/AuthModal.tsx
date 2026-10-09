import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { UserRole, UserSession } from '../../types/startup';
import { X, Lock, Mail, User, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, LogOut, Users, Plus } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, user, users, loginUser, logoutUser } = useStartup();
  const [tab, setTab] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('••••••••');
  const [fullName, setFullName] = useState(user.fullName);
  const [role, setRole] = useState<UserRole>(user.role);
  const [country, setCountry] = useState(user.country);
  const [companyOrOrg, setCompanyOrOrg] = useState(user.companyOrOrg || '');
  const [rememberMe, setRememberMe] = useState(true);
  const [message, setMessage] = useState('');

  if (!isAuthModalOpen) return null;

  const roles: UserRole[] = [
    'Founder',
    'Co-Founder',
    'Entrepreneur',
    'Business Owner',
    'Investor',
    'Student',
    'Academic Supervisor'
  ];

  const handleSelectUser = (selectedUser: UserSession) => {
    setMessage(`Switched to ${selectedUser.fullName}!`);
    setTimeout(() => {
      loginUser(selectedUser);
      setMessage('');
      setIsAuthModalOpen(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === 'forgot') {
      setMessage(`Password reset instructions sent to ${email}`);
      setTimeout(() => setTab('login'), 2000);
      return;
    }

    const session: UserSession = {
      id: `usr-${Date.now()}`,
      fullName: fullName.trim() || 'User',
      email: email.trim().toLowerCase(),
      role: role,
      country: country.trim() || 'India',
      preferredLanguage: user.preferredLanguage || 'en',
      currency: user.currency || 'INR',
      isVerified: true,
      companyOrOrg: companyOrOrg.trim() || 'Venture Studio'
    };

    loginUser(session, { isNewUser: tab === 'signup' });
    setMessage(tab === 'signup' ? 'Account created! Initializing project setup...' : 'Signed in successfully!');
    setTimeout(() => {
      setMessage('');
      setIsAuthModalOpen(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 font-sans">
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 text-slate-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>InnovAI Hub Multi-User Access</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            {tab === 'login' && 'Switch User or Sign In'}
            {tab === 'signup' && 'Create New User Account'}
            {tab === 'forgot' && 'Reset Your Password'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage projects with isolated permissions and personalized insights
          </p>
        </div>

        {/* Dynamic Registered Users Quick Switcher */}
        {tab === 'login' && (
          <div className="mb-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
              <span className="flex items-center gap-1 text-slate-300">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                <span>Switch to Existing Account:</span>
              </span>
              <span className="text-indigo-400 text-[10px] font-mono">1-Click Access</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {users.map((u) => {
                const isActive = u.id === user.id;
                return (
                  <button
                    key={u.id}
                    onClick={() => handleSelectUser(u)}
                    className={`px-2.5 py-1.5 rounded-lg border text-left transition-all ${
                      isActive
                        ? 'bg-indigo-600/20 border-indigo-500/40 text-white'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-semibold truncate flex items-center justify-between">
                      <span className="truncate">{u.fullName}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">{u.role}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tabs: Sign In / Create Account */}
        <div className="flex border-b border-slate-800 mb-4 text-xs font-semibold">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 pb-2 text-center transition-colors border-b-2 ${
              tab === 'login'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Sign In with Email
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 pb-2 text-center transition-colors border-b-2 ${
              tab === 'signup'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            + Register New User
          </button>
        </div>

        {/* Message */}
        {message && (
          <div className="mb-4 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          {tab === 'signup' && (
            <div>
              <label className="block text-slate-300 font-medium mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Vidhyashree L."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-slate-300 font-medium mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {tab !== 'forgot' && (
            <div>
              <label className="block text-slate-300 font-medium mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          )}

          {tab === 'signup' && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Account Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-white focus:outline-none focus:border-indigo-500"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="India"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Company / Startup (Optional)</label>
                <input
                  type="text"
                  value={companyOrOrg}
                  onChange={(e) => setCompanyOrOrg(e.target.value)}
                  placeholder="e.g. InnovAI Ventures"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-2.5 mt-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition-all shadow-md shadow-indigo-600/20 flex items-center justify-center gap-1.5"
          >
            <span>{tab === 'signup' ? 'Create & Activate Account' : 'Sign In to Workspace'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Enterprise Multi-Tenant Security</span>
          </div>
          <button
            onClick={() => {
              logoutUser();
              setIsAuthModalOpen(false);
            }}
            className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium"
          >
            <LogOut className="w-3 h-3" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
