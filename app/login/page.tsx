'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Eye, EyeOff, Building2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mockup: Skip authentication, go straight to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-surface border-border-subtle">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-accent-primary rounded-xl flex items-center justify-center">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            FynIQ Processor Dashboard
          </h1>
          <p className="text-sm text-text-secondary">
            Welcome Back, Processor
          </p>
          <p className="text-sm text-text-secondary">
            Sign in to access your pipeline
          </p>
        </div>

        {/* Demo Credentials Note */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-text-primary mb-2">
            <strong className="text-blue-700">🎭 Demo Mode - Phase 1 UI/UX Mockup</strong>
          </p>
          <p className="text-xs text-text-secondary mb-2">
            Any email/password combination works for testing:
          </p>
          <div className="space-y-1 text-xs">
            <p className="font-mono bg-white px-2 py-1 rounded border border-border-subtle">
              Email: processor@fyniq.com
            </p>
            <p className="font-mono bg-white px-2 py-1 rounded border border-border-subtle">
              Password: demo123
            </p>
          </div>
          <p className="text-xs text-text-tertiary mt-2">
            Real authentication will be added in Phase 2
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="text-text-primary font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="processor@lender.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 border-border-medium"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <Label htmlFor="password" className="text-text-primary font-medium">
              Password
            </Label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10 border-border-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 w-4 h-4 rounded border-border-strong text-accent-primary focus:ring-accent-primary"
              />
              <span className="text-text-secondary">Remember me</span>
            </label>
            <button
              type="button"
              className="text-accent-primary hover:text-accent-hover"
              onClick={() => alert('Password reset functionality will be available in Phase 2')}
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full bg-accent-primary hover:bg-accent-hover text-white font-medium"
          >
            Sign In →
          </Button>
        </form>

        {/* Security Notice */}
        <div className="mt-8 pt-6 border-t border-border-subtle">
          <p className="text-xs text-text-tertiary text-center">
            For security, sessions expire after 8 hours.
          </p>
          <p className="text-xs text-text-tertiary text-center">
            Internal use only. Do not share credentials.
          </p>
        </div>
      </Card>
    </div>
  );
}
