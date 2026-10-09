import { CurrencyCode } from '../../types/startup';

export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  INR: 1,       // Base reference in INR as in slide examples (₹2.21 Cr, ₹4500 Cr)
  USD: 0.012,   // 1 INR ~ $0.012 (or $1 ~ ₹83.3)
  EUR: 0.011,   // 1 INR ~ €0.011 (or €1 ~ ₹91)
  GBP: 0.0094,  // 1 INR ~ £0.0094 (or £1 ~ ₹106)
};

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
};

export const CURRENCY_LABELS: Record<CurrencyCode, string> = {
  INR: 'INR (₹)',
  USD: 'USD ($)',
  EUR: 'EUR (€)',
  GBP: 'GBP (£)',
};

export function convertAmount(amountInInr: number, targetCurrency: CurrencyCode): number {
  const rate = EXCHANGE_RATES[targetCurrency] || 1;
  return amountInInr * rate;
}

export function formatCurrency(
  amountInInr: number,
  currency: CurrencyCode = 'INR',
  options?: { compact?: boolean; precision?: number }
): string {
  const symbol = CURRENCY_SYMBOLS[currency] || '₹';
  const converted = convertAmount(amountInInr, currency);
  const precision = options?.precision ?? 2;

  if (currency === 'INR') {
    if (options?.compact) {
      if (Math.abs(amountInInr) >= 10000000) {
        return `${symbol}${(amountInInr / 10000000).toFixed(precision)} Cr`;
      }
      if (Math.abs(amountInInr) >= 100000) {
        return `${symbol}${(amountInInr / 100000).toFixed(precision)} Lakh`;
      }
      if (Math.abs(amountInInr) >= 1000) {
        return `${symbol}${(amountInInr / 1000).toFixed(1)}k`;
      }
    }
    return `${symbol}${new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: precision,
    }).format(converted)}`;
  }

  // Western currencies (USD, EUR, GBP)
  if (options?.compact) {
    if (Math.abs(converted) >= 1000000000) {
      return `${symbol}${(converted / 1000000000).toFixed(precision)}B`;
    }
    if (Math.abs(converted) >= 1000000) {
      return `${symbol}${(converted / 1000000).toFixed(precision)}M`;
    }
    if (Math.abs(converted) >= 1000) {
      return `${symbol}${(converted / 1000).toFixed(1)}K`;
    }
  }

  return `${symbol}${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: precision,
  }).format(converted)}`;
}
