import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

import Stepper from './components/Stepper';
import SkipCard, { Skip } from './components/SkipCard';
import Button from '@/shared/Button';
import AppLoader from '@/shared/AppLoader';
import { BASE_API_URL } from '@/constants/variables';

const SKIPS_API_URL = `${BASE_API_URL}/skips/by-location?postcode=NR32&area=Lowestoft`;

export default function SkipSelect() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [requestStatus, setRequestStatus] = useState<'loading' | 'error'>();
  const [selected, setSelected] = useState<number>();

  const fetchSkipsSizes = async () => {
    setRequestStatus('loading');

    try {
      const response = await fetch(SKIPS_API_URL);

      if (!response.ok) {
        setRequestStatus('error');
      }

      const data = await response.json();

      setSkips(data || []);
      setRequestStatus(undefined);
    } catch (error) {
      console.log(error);
      setRequestStatus('error');
    }
  };

  useEffect(() => {
    fetchSkipsSizes();
  }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Stepper />

        <div className="max-w-7xl mx-auto px-4 pb-32">
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
            <p className="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
          </div>

          <AppLoader
            error={requestStatus === 'error' ? 'Failed to fetch skips' : undefined}
            loading={requestStatus === 'loading'}
            onRetry={fetchSkipsSizes}
            loader={<SkipsSkeletonLoader />}
          >
            {!!skips.length && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {skips.map((skip) => (
                  <SkipCard skip={skip} key={skip.id} onSelect={setSelected} selected={selected === skip.id} />
                ))}
              </div>
            )}

            {!skips.length && <EmptyState />}
          </AppLoader>

          <div className="fixed bottom-0 left-0 right-0 bg-card-bg border-t border-default p-4 animate-slideUp z-50">
            <div className="max-w-7xl mx-auto">
              <div className="lg:hidden">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium"></h3>

                  <div>
                    <span className="text-xl font-bold text-prime-blue">£</span>
                    <span className="text-sm text-gray-400 ml-2">7 days</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button size="sm" variant="secondary">
                    Back
                  </Button>

                  <Button size="sm" variant="primary">
                    Continue
                  </Button>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div>
                    <h3 className="font-medium"></h3>
                    <p className="text-sm text-gray-400">4</p>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-prime-blue">£</span>
                    <span className="text-sm text-gray-400 ml-2">7 day hire</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button size="sm" variant="secondary">
                    Back
                  </Button>

                  <Button size="sm" variant="primary">
                    <span>Continue</span>

                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const SkipsSkeletonLoader = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {Array(9)
      .fill('')
      .map((_, idx) => (
        <div key={idx.toString()} className="bg-default p-4 rounded-2xl shadow-md">
          <div className="h-40  bg-[#1E1E1E]  rounded-xl animate-pulse"></div>
          <div className="mt-4 h-6 w-24  bg-[#1E1E1E]  rounded-md animate-pulse"></div>
          <div className="mt-2 h-4 w-40  bg-[#1E1E1E]  rounded-md animate-pulse"></div>
          <div className="mt-4 h-8 w-32  bg-[#1E1E1E]  rounded-md animate-pulse"></div>
          <div className="mt-6 h-12  bg-[#1E1E1E]  rounded-lg animate-pulse"></div>
        </div>
      ))}
  </div>
);

const EmptyState = () => (
  <div className="py-10">
    <h1 className="text-2xl text-center">No skips to display here</h1>
  </div>
);
