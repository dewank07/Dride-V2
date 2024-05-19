import { ethers } from 'ethers';
import { connect } from 'http2';
import React, { useState } from 'react'

function ConnectWallet() {
    

    const [errorMessaage, setErrorMessaage] = useState<any>(null);
    const [defaultAccount, setDefaultAccount] = useState<any>(null);
    const [userBalance, setUserBalance] = useState<any>(null);





  return (
    <div>
        <button className='bg-[#F4A424] hover:bg-[#ffce49] text-white p-2 px-3 rounded-full text-lg font-semibold hover:border-black'>
            Connect Wallet
        </button>
    </div>
  )
}

export default ConnectWallet