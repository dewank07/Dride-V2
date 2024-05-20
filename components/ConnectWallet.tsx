"use client"
import { useEffect, useState } from "react";


declare global {
  interface Window{
    ethereum?:any
  }
}


function ConnectWallet() {
    
    // const [address, setAddress] = useState<string | null>(null);

    // const [errorMessaage, setErrorMessaage] = useState<any>(null);
    const [defaultAccount, setDefaultAccount] = useState<any>(null);
    // const [userBalance, setUserBalance] = useState<any>(null);

  useEffect(()=>{
    getCurrentWallet()
    addWalletListener()
  },[])

  useEffect(()=>{

  },[defaultAccount])


    const handleConnect = async () => {
      if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
        if(!defaultAccount){
        try{
          const accounts = await window.ethereum?.request({method: "eth_requestAccounts"})
          setDefaultAccount(accounts[0])
          console.log(accounts[0])
        }catch(err){
          console.
          log(err)
        }
      }
      }else{
        console.log("Plase install metamask")
      }
    }

    const getCurrentWallet = async () => {
      if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
        if(!defaultAccount){
        try{
          const accounts = await window.ethereum?.request({method: "eth_accounts"})
          setDefaultAccount(accounts[0])
          console.log(accounts[0])
        }catch(err){
          console.
          log(err)
        }
      }
      }else{
        console.log("Plase install metamask")
      }
    }

    const addWalletListener = async () => {
      if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
        window.ethereum.on('accountChanged', (accounts:any) =>{
          if (!accounts.length) {
            defaultAccount(null)
          }else{
            defaultAccount(accounts[0])
          console.log("Account changed")
          }
          
        }
        )
      }
      else{
        defaultAccount(null)
        console.log("Plase install metamask")
      }
    }

  return (
    <div>
        <button onClick={handleConnect} className="px-2 p-[2px] font-semibold rounded-full bg-[#F4A424] text-white hover:shadow-sm hover:shadow-gray-400">
          {
            defaultAccount?`${defaultAccount.substring(0,6)}...${defaultAccount.substring(38)}`:'Connect Wallet'
          }
        </button>
    </div>
  )
}

export default ConnectWallet