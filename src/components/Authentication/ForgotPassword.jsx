import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios
import api from '../../utils/axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Please enter your email.');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      setLoading(true);

      try {
        const response = await api.post(
          '/auth/forgotpass', 
          { email },
          { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.status === 200) {
          setSuccessMessage('OTP sent to your email. Enter it below to reset your password.');
          setOtpSent(true);
        } else {
          setError(response.data.message || 'Something went wrong. Please try again.');
        }
      } catch (err) {
        setError('There was an error connecting to the server. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#B64870] to-[#4E0080] bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative backdrop-blur-md p-8 shadow-lg rounded-md max-w-md w-full mx-4 md:mx-0 bg-white/20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="text-2xl mb-6 text-white font-bold text-center"
        >
          Forgot Password
        </motion.h2>

        {successMessage && <p className="text-green-500 text-xs italic mt-2">{successMessage}</p>}
        {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}

        {!otpSent && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Enter your email to reset your password.
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 px-4 py-2 border border-white bg-white/10 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              type="submit"
              className="w-full bg-[rgba(255,89,203,0.8)] text-white p-2 rounded-md hover:bg-[rgba(246,59,187,0.8)] transition font-bold"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </motion.button>
          </form>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-sm text-white mt-4 text-center font-bold"
        >
          Remember your password?{' '}
          <a href="/login" className="text-pink-400 font-bold hover:underline">
            Back to Login
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
