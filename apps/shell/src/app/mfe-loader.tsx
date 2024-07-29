import { useEffect, useRef } from 'react';

type MfeLoaderProps = {
  appName: string;
};

type MfeExports = {
  mount: (container: HTMLElement) => void;
};

export const MfeLoader = ({ appName }: MfeLoaderProps) => {
  const mfeRef = useRef<HTMLDivElement>(null);

  const loadMfe = async () => {
    console.log('[MfeLoader] loading MFE:', appName);

    try {
      // appName import will be resolved to the MFE url via importmap script in index.html
      await import(/* @vite-ignore */ appName);
      const mfeExports = (window as any)[appName] as MfeExports | undefined;
      if (mfeRef.current && mfeExports?.mount) mfeExports.mount(mfeRef.current);
    } catch (error) {
      console.error('[MfeLoader] error loading MFE:', appName, error);
      return;
    }
  };

  useEffect(() => {
    loadMfe();
  }, []);

  return <div id={appName} ref={mfeRef} />;
};
