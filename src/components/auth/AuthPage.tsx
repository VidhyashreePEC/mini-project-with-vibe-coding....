import React, { useState } from 'react';
import { useStartup } from '../../context/StartupContext';
import { UserRole, UserSession } from '../../types/startup';
import {
  Sparkles,
  Lock,
  Mail,
  User,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  GitBranch,
  ShieldAlert,
  Zap,
  Building2,
  Users,
  FolderKanban,
  Check,
  Plus
} from 'lucide-react';

export const AuthPage: React.FC = () => {
  const { loginUser, users, projects } = useStartup();
  const [tab, setTab] = useState<'login' | 'signup' | 'forgot'>('login');

  // Form Fields
  const [email, setEmail] = useState('vidhu@innovai.net');
  const [password, setPassword] = useState('••••••••');
  const [fullName, setFullName] = useState('Vidhyashree L.');
  const [role, setRole] = useState<UserRole>('Founder');
  const [country, setCountry] = useState('India');
  const [companyOrOrg, setCompanyOrOrg] = useState('InnovAI Ventures');
  const [rememberMe, setRememberMe] = useState(true);
  const [message, setMessage] = useState('');

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
    setMessage(`Signing in as ${selectedUser.fullName}...`);
    setTimeout(() => {
      loginUser(selectedUser);
    }, 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === 'forgot') {
      setMessage(`Password reset instructions sent to ${email}`);
      setTimeout(() => {
        setMessage('');
        setTab('login');
      }, 2000);
      return;
    }

    if (tab === 'login') {
      // Find matching user or create session
      const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      const session: UserSession = existing || {
        id: `usr-${Date.now()}`,
        fullName: fullName || email.split('@')[0],
        email: email,
        role: role,
        country: country || 'India',
        preferredLanguage: 'en',
        currency: 'INR',
        isVerified: true,
        companyOrOrg: companyOrOrg || 'Venture Studio'
      };

      setMessage(`Welcome back, ${session.fullName}! Accessing dashboard...`);
      setTimeout(() => {
        loginUser(session);
      }, 350);
      return;
    }

    // Sign Up
    const newSession: UserSession = {
      id: `usr-${Date.now()}`,
      fullName: fullName.trim() || 'New Founder',
      email: email.trim().toLowerCase(),
      role: role,
      country: country.trim() || 'India',
      preferredLanguage: 'en',
      currency: 'INR',
      isVerified: true,
      companyOrOrg: companyOrOrg.trim() || 'Venture Studio'
    };

    setMessage('Account created successfully! Opening project setup...');
    setTimeout(() => {
      loginUser(newSession, { isNewUser: true });
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden font-sans">
      {/* Background ambient glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Dual-Column Container */}
      <div className="w-full max-w-5xl rounded-3xl border border-slate-800/80 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* LEFT COLUMN: Strategic Features & Multi-Project Overview */}
        <div className="lg:col-span-6 p-8 sm:p-10 bg-gradient-to-br from-indigo-950/60 via-slate-900/80 to-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
          <div>
            {/* Top Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Multi-User & Multi-Project AI Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Scale multiple startups from idea to execution.
            </h1>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Unified enterprise operating system for founders, innovators, and teams. Manage unlimited projects with isolated financials, roadmaps, and AI advisory.
            </p>

            {/* 3 Core Value Props */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0 mt-0.5">
                  <FolderKanban className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs">Multi-Project Management</h3>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Seamlessly switch between ventures like EcoFleet AI, AgriScan, and custom startups with independent metrics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs">Multi-User Role Collaboration</h3>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Dedicated sessions for Founders, Co-Founders, Investors, and Product Architects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs">Financial & Valuation Engine</h3>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Break-even modeling, 10-category risk audits, and 31-section IEEE SRS documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial & Platform Meta */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "InnovAI Hub empowers our venture team to manage portfolio companies, calculate break-even targets, and generate investor-grade reports."
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold flex items-center justify-center text-xs">
                    P
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">Priya Sharma</div>
                    <div className="text-[10px] text-slate-400">Founder & CEO, EcoFleet AI</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {projects.length} Active Ventures
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Enterprise Multi-Tenant Architecture</span>
              </span>
              <span className="font-mono text-indigo-400">v2.4.0 Live</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Login & SignUp Form */}
        <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Top Navigation Tabs */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
              <div className="flex items-center gap-6 text-sm font-semibold">
                <button
                  type="button"
                  onClick={() => setTab('login')}
                  className={`pb-3 -mb-3 transition-colors border-b-2 font-bold ${
                    tab === 'login'
                      ? 'border-indigo-500 text-indigo-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setTab('signup')}
                  className={`pb-3 -mb-3 transition-colors border-b-2 font-bold ${
                    tab === 'signup'
                      ? 'border-indigo-500 text-indigo-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Create Account
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Secure Multi-User Auth</span>
              </div>
            </div>

            {/* Form Title & Subtitle */}
            <div className="mb-5">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {tab === 'login' && 'Sign In to InnovAI Hub'}
                {tab === 'signup' && 'Create Your User Account'}
                {tab === 'forgot' && 'Reset Your Password'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {tab === 'login' && 'Select an existing profile or enter your credentials to open your projects.'}
                {tab === 'signup' && 'Register your name and credentials to create and manage multiple startup projects.'}
                {tab === 'forgot' && 'Enter your registered email address to receive recovery instructions.'}
              </p>
            </div>

            {/* Dynamic Multi-User Quick Login Selector */}
            {tab === 'login' && (
              <div className="mb-5 p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Users className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Select Profile ({users.length} Users):</span>
                  </span>
                  <span className="text-indigo-400 text-[10px] font-mono">1-Click Sign In</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {users.map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => handleSelectUser(u)}
                      className="px-2.5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-950/50 border border-slate-800 hover:border-indigo-500/40 text-left transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold flex items-center justify-center text-[10px] flex-shrink-0">
                          {u.fullName.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold text-white truncate group-hover:text-indigo-300 transition-colors">
                            {u.fullName}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            {u.role} {u.companyOrOrg ? `· ${u.companyOrOrg}` : ''}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Notification message */}
            {message && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{message}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
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
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
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
                    placeholder="user@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {tab !== 'forgot' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-slate-300 font-medium">Password</label>
                    {tab === 'login' && (
                      <button
                        type="button"
                        onClick={() => setTab('forgot')}
                        className="text-[11px] text-indigo-400 hover:underline"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
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
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-white focus:outline-none focus:border-indigo-500 text-xs"
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
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Company or Startup Name (Optional)</label>
                    <input
                      type="text"
                      value={companyOrOrg}
                      onChange={(e) => setCompanyOrOrg(e.target.value)}
                      placeholder="e.g. Acme Ventures / Stealth"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </>
              )}

              {tab === 'login' && (
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-400">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-slate-800 bg-slate-950 text-indigo-600 focus:ring-0"
                    />
                    <span className="text-[11px]">Remember my session</span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 mt-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>
                  {tab === 'login' && 'Sign In to Workspace'}
                  {tab === 'signup' && 'Create Account & Enter Platform'}
                  {tab === 'forgot' && 'Send Password Reset Link'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Security Footer */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>TLS 1.3 & AES-256 Encrypted Session</span>
            </div>
            <span>© 2026 InnovAI Hub Enterprise</span>
          </div>
        </div>
      </div>
    </div>
  );
};
