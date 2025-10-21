// import React, { useMemo } from 'react';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import {
//     WalletModalProvider,
//     WalletDisconnectButton,
//     WalletMultiButton,
//     WalletConnectButton
// } from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';

// import '@solana/wallet-adapter-react-ui/styles.css';
// import { Airdrop } from './Airdrop';


// function App() {
//   const network = WalletAdapterNetwork.Devnet;

//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//   return (
//       <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/Vrsgi4KSmsYsfpSGcNopw"}>
//           <WalletProvider wallets={[]} autoConnect>
//               <WalletModalProvider>
//                 <WalletMultiButton/>
//                 <WalletDisconnectButton/>
//                 <Airdrop/>
//               </WalletModalProvider>
//           </WalletProvider>
//       </ConnectionProvider>
//   );
// }

// export default App


import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';


function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/Vrsgi4KSmsYsfpSGcNopw"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                  
                </div>
                <Airdrop/>
               
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App

// "https://solana-devnet.g.alchemy.com/v2/Vrsgi4KSmsYsfpSGcNopw"