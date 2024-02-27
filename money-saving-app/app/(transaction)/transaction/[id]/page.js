const getTransactionById = async (id) => {
  try {
    const res = await fetch(`/api/transaction/${id}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const Transaction = async ({ params }) => {
  return <div>Transaction {params.id}</div>;
};

export default Transaction;
