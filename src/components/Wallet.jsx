import React from "react";

function Wallet() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-r bg-customBlue to-indigo-500 text-white rounded-lg shadow-lg p-6">
    {/* آیکون */}
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold">My Wallet</div>
      <div className="bg-white text-purple-500 p-3 rounded-full shadow-md">
        💰
      </div>
    </div>

    {/* موجودی */}
    <div className="mt-6">
      <p className="text-sm uppercase">Available Balance</p>
      <h2 className="text-3xl font-bold mt-2">$12,340.50</h2>
    </div>

    {/* جزئیات بیشتر */}
    <div className="mt-6 flex justify-between text-sm">
      <div>
        <p className="uppercase">Income</p>
        <p className="font-bold mt-1">$5,400</p>
      </div>
      <div>
        <p className="uppercase">Expense</p>
        <p className="font-bold mt-1">$2,130</p>
      </div>
    </div>
  </div>
  );
}

export default Wallet;
