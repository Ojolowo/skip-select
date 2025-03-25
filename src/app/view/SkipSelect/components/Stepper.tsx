import React from 'react';
import { Calendar, CreditCard, MapPin, Shield, Trash2, Truck } from 'lucide-react';
import classNames from 'classnames';

const steps = [
  { icon: MapPin, label: 'Postcode', active: true },
  { icon: Trash2, label: 'Waste Type', active: true },
  { icon: Truck, label: 'Select Skip', active: true, disabled: false },
  { icon: Shield, label: 'Permit Check', active: false, disabled: true },
  { icon: Calendar, label: 'Choose Date', active: false, disabled: true },
  { icon: CreditCard, label: 'Payment', active: false, disabled: true },
];

export default function Stepper() {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <button
              className={classNames('flex items-center whitespace-nowrap transition-colors', {
                'text-prime-blue cursor-pointer hover:text-prime-blue': step.active,
                ' text-white/60 cursor-not-allowed opacity-50': !step.active,
              })}
              disabled={step.disabled}
            >
              <step.icon className="w-6 h-6 shrink-0" />

              <span className="ml-2 text-white">{step.label}</span>
            </button>

            {index < steps.length - 1 && (
              <div
                className={`w-16 h-px ${step.active && !steps[index + 1]?.disabled ? 'bg-prime-blue' : 'bg-default'}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
