import { PropsWithChildren, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

import Button from './Button';

interface Props extends PropsWithChildren {
  error?: string;
  onRetry?: VoidFunction;
  loading?: boolean;
  loader?: ReactNode;
}

export default function AppLoader(props: Props) {
  const { children, error, loading, loader, onRetry } = props;

  return (
    <div className="w-full min-h-max">
      {!error && children}

      {error && (
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-2xl font-semibold">{error}</h1>
          <div>
            <Button onClick={onRetry} size="sm">
              Retry
            </Button>
          </div>
        </div>
      )}

      {loading && (
        <>
          {loader ?? (
            <div role="status" className="flex justify-center items-center">
              <Loader2 className="size-[40px] animate-spin" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
