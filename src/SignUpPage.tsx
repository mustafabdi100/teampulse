import React, { useState } from 'react';
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Add sign-up logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 font-sans">
      <header className="py-4 px-6 max-w-6xl mx-auto">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">TeamPulse</Link>
          <div className="flex items-center space-x-6">
            <Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900">Login</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
        <form className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <Button className="w-full bg-gray-900 text-white hover:bg-gray-700 py-2 text-sm font-semibold" onClick={handleSignUp}>
            Sign Up
          </Button>
        </form>
      </main>
    </div>
  );
};

export default SignUpPage;
