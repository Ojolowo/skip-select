import classNames from 'classnames';
import { AlertTriangle, ArrowRight, Check } from 'lucide-react';

import Button from '@/shared/Button';

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: null | number;
  per_tonne_cost: null | number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface Props {
  selected: boolean;
  onSelect: (id?: number) => void;
  skip: Skip;
}

export default function SkipCard({ selected, skip, onSelect }: Props) {
  return (
    <div
      role="button"
      onClick={() => onSelect(selected ? undefined : skip.id)}
      key={skip.id}
      className={classNames(
        'group relative rounded-lg border-2 border-default hover:border-[#0037c180] p-4 md:p-6 transition-all duration-300 bg-card-bg text-white cursor-pointer',
        { 'border-prime-blue hover:border-prime-blue': selected },
        { 'opacity-50 cursor-not-allowed pointer-events-none': !skip.allows_heavy_waste },
      )}
    >
      {selected && (
        <div className="absolute top-3 right-3 md:top-4 md:right-4">
          <Check className="w-5 h-5 md:w-6 md:h-6 text-prime-blue" />
        </div>
      )}

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&amp;w=800"
          alt={`${skip.size} Yard Skip`}
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />

        <div className="absolute top-3 right-2 z-20 bg-prime-blue text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {skip.size} Yards
        </div>

        <div className="absolute bottom-3 left-2 z-20 space-y-2">
          {!skip.allowed_on_road && (
            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />

              <span className="text-xs font-medium text-yellow-500">Private Property Only</span>
            </div>
          )}

          {!skip.allows_heavy_waste && (
            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />

              <span className="text-xs font-medium text-red-500">Not Suitable for Heavy Waste</span>
            </div>
          )}
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{skip.size} Yard Skip</h3>

      <p className="text-sm text-gray-400 mb-4 md:mb-6">{skip.hire_period_days} day hire period</p>

      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl md:text-2xl font-bold text-prime-blue">£{skip.price_before_vat + skip.vat}</span>

          <span className="text-sm text-gray-400 ml-2">per week</span>
        </div>
      </div>

      <Button variant={selected ? 'primary' : 'secondary'}>
        <span>{selected ? 'Selected' : 'Select This Skip'}</span>

        {!selected && <ArrowRight className="w-4 h-4" />}
      </Button>
    </div>
  );
}
