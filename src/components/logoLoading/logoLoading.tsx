"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoLoadingProps {
  logoSrc: string
  size?: number
}

export default function LogoLoading({ logoSrc, size = 100 }: LogoLoadingProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative" style={{ width: size, height: size }}>
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="70 200"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Image
            src={logoSrc}
            alt="Logo"
            width={size * 0.6}
            height={size * 0.6}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </div>
  )
}