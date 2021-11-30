import React, { useState } from 'react';

type ReconData = null | 'pending' | { data: any, processes: string };

function Recon(): React.ReactElement {
  const [data, setData] = useState<ReconData>(null);
  const onClick: React.ReactEventHandler = async (e) => {
    e.preventDefault();
    if (data !== 'pending') {
      setData('pending');
      const resp = await fetch('/api/recon');
      const data = await resp.json();
      setData(data);
    }
  }
  return (
    <div>
      <button onClick={onClick}>Recon</button>
      {data !== null && data !== 'pending' && (
        <div>
          <p>Processes</p>
          <pre>{data.processes}</pre>
          <p>ENV</p>
          <pre>{JSON.stringify(data.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default function Home(): React.ReactElement {
  return <div><p>hello</p><Recon /></div>;
}