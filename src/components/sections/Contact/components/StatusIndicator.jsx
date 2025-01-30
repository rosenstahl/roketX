import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const StatusIndicator = () => {
  const { t } = useTranslation('common');

  return (
    <div className="inline-flex gap-6 items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
      {/* Online Status */}
      <div className="flex items-center gap-2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]"
        />
        <span className="text-sm text-main-tertiary font-medium">
          {t('contactpage.status.online')}
        </span>
      </div>

      {/* Divider */}
      <div className="w-px h-4 bg-white/10" />

      {/* Response Time */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-4 h-4"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-accent-primary"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
        </div>
        <div className="text-sm text-main-tertiary">
          <span className="font-medium">
            {t('contactpage.status.response_time')}:
          </span>{' '}
          <span className="text-black">
            ~15 {t('contactpage.status.minutes')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusIndicator;