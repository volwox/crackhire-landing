import { CheckIcon, ZapIcon } from './Icons';

interface TrustBadgesProps {
  variant?: 'hero' | 'pricing';
  className?: string;
}

export function TrustBadges({ variant = 'hero', className = '' }: TrustBadgesProps) {
  const badges = [
    { icon: '🔒', text: 'Secure checkout via Lemon Squeezy' },
    { icon: '⚡', text: 'Instant PDF access' },
    { icon: '🎁', text: 'Optional Notion tracker (bonus)' },
  ];

  if (variant === 'hero') {
    return (
      <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 ${className}`}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-1.5 text-sm text-slate-400">
            <span className="text-xs">{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 ${className}`}>
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
          <span>{badge.icon}</span>
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
