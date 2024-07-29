import { useEffect, useRef } from 'react';

type MfeLoaderProps = {
  appName: string;
};

export const MfeLoader = ({ appName }: MfeLoaderProps) => {
  const mfeRef = useRef<HTMLDivElement>(null);

  const loadMfe = async () => {
    console.log('[MfeLoader] loading MFE:', appName);

    try {
      // appName import will be resolved to the MFE url via importmap.json
      const mfe = await import(appName);
      console.log({ loaded: true, appName, mfe });
      if (mfeRef.current) mfe.mount(mfeRef.current);
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
