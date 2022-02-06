import React, { useContext } from 'react';
import { useState } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle} from "react-icons/bs";
import { Loader } from "./";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from '../utils/shortenAddress';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ( { placeholder, name, type, value, handleChange } ) => (
    <input
        placeholder = {placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);
const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit =(e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction()
    }
    return (
        <div className="flex w-full justify-center items-between">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col flex-row mf:mr-10">
                    <h1 className="text-3xl sm:text-4xl text-white text-gradient py-1">
                        Justin Bieber 
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                    Justin Drew Bieber is a Canadian singer. He was discovered by American record executive Scooter Braun and signed with RBMG Records in 2008, gaining recognition with the release of his debut seven-track EP My World and soon establishing himself as a teen idol.

                    </p>
                    {!currentAccount && (
                    <button
                    type="button"
                    onClick={connectWallet}
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                     <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>
                    )}
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Two Grammy Awards

                        </div>
                        <div className={commonStyles}>Latin Grammy Award</div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            1 Billion views
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                                100+songs

                        </div>
                        <div className={commonStyles}>270 million followers</div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            83.3 million listeners

                        </div>
                    </div>
                </div>
                <div className = "flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="fff" />

                                </div>
                                <BsInfoCircle fontSize={17} color="fff" />

                            </div>
                            <div>
                                <p className="text-[11.5px] text-white font-light text-sm">
                                    {"0x472D1ca606957C6eF291Dc47296Fa90a3824df8C"}
                                </p>
                                
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="p-5 sm:w-96 w-full flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (MATIC)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                        <div className="h-[1px] w-full bg-gray-400 my-2" />

                        {isLoading ? (
                            <Loader /> 
                        ) : (
                            <button
                            type = "button"
                            onClick = {handleSubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Send Now
                            </button>
                        )}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Welcome;
