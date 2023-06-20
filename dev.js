import { startSubgraphs } from './subgraphs/subgraphs.js';

// For local development, we will run `rover dev` that will handle
// composition and configure the ports of the Router and subgraphs manually
// See supergraph-config-dev.yaml for config setup
(async () => {
  // start subgraphs in monolith mode
  // If you change this port, update rover dev config
  await startSubgraphs(4001);
})();
