import { memo, useEffect, useState } from 'react';
import { useMousePositionRef } from '../../hooks/useMousePositionRef';
import StarField from './StarField';
import NebulaBackground from './NebulaBackground';
import CosmicDust from './CosmicDust';
import OrbitalPaths from './OrbitalPaths';
import AmbientLighting from './AmbientLighting';
import GalaxyDrift from './GalaxyDrift';
import SectionVoidOverlay from './SectionVoidOverlay';

function GlobalCosmicEnvironment() {
  const mouse = useMousePositionRef();
  const [starCount, setStarCount] = useState(180);
  const [dustEnabled, setDustEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => {
      const mobile = mq.matches;
      setStarCount(mobile ? 100 : 180);
      setDustEnabled(!mobile);
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className="global-cosmos" aria-hidden="true">
      <div className="global-cosmos-layer cosmic-void" />
      <SectionVoidOverlay />

      <div className="global-cosmos-layer">
        <GalaxyDrift />
      </div>

      <StarField count={starCount} mouseRef={mouse} />

      <div className="global-cosmos-layer">
        <NebulaBackground />
      </div>

      {dustEnabled && (
        <div className="global-cosmos-layer">
          <CosmicDust count={50} mouseRef={mouse} />
        </div>
      )}

      <div className="global-cosmos-layer cosmic-orbits-layer">
        <OrbitalPaths mouseRef={mouse} />
      </div>

      <div className="global-cosmos-layer">
        <AmbientLighting />
      </div>
    </div>
  );
}

export default memo(GlobalCosmicEnvironment);
