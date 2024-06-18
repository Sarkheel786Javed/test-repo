import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useState } from "react";
function TypeScriptParticles() {
  const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="App">
            {init && (
                <Particles
                    options={particlesOptions as ISourceOptions}
                />
            )}
        </div>
    );
}

export default TypeScriptParticles;
