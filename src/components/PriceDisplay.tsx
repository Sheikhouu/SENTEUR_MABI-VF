import React from 'react';

interface PriceDisplayProps {
  prices?: {
    eur?: number;
    cad?: number;
    fcfa?: number;
  };
  showAll?: boolean;
  className?: string;
  primaryCurrency?: 'EUR' | 'CAD' | 'FCFA';
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  prices = {},
  showAll = true,
  className = '',
  primaryCurrency = 'FCFA',
}) => {
  const formatPrice = (amount: number | undefined, currency: string) => {
    if (amount === undefined) return '';

    switch (currency) {
      case 'EUR':
        return `${amount.toLocaleString('fr-FR')}€`;
      case 'CAD':
        return `$${amount.toLocaleString('fr-FR')} CAD`;
      case 'FCFA':
        return `${amount.toLocaleString('fr-FR')} FCFA`;
      default:
        return `${amount}`;
    }
  };

  if (!prices || Object.keys(prices).length === 0) {
    return <span className={className}>Prix non disponible</span>;
  }

  if (showAll) {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-playfair text-primary">
            {formatPrice(
              prices[primaryCurrency.toLowerCase() as keyof typeof prices],
              primaryCurrency
            )}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          {Object.entries(prices)
            .filter(([key]) => key.toUpperCase() !== primaryCurrency)
            .map(([currency, amount]) => (
              <span key={currency} className="whitespace-nowrap">
                {formatPrice(amount, currency.toUpperCase())}
              </span>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className="text-2xl font-playfair text-primary">
        {formatPrice(
          prices[primaryCurrency.toLowerCase() as keyof typeof prices],
          primaryCurrency
        )}
      </span>
    </div>
  );
};

export default PriceDisplay;