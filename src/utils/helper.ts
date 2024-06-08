export function formatCurrency(amount: number, currency?: boolean) {
  if (amount === undefined) return '-';
  return `${new Intl.NumberFormat().format(amount)} ${currency ? 'MMK' : ''}`;
}

export const getBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

// * this should be temporary solution
export function getServerBodyParams({
  skip,
  limit,
  searchItems,
}: {
  skip: string;
  limit: string;
  searchItems?: Record<string, unknown>[];
}) {
  return {
    sortName: '',
    sortOrder: '',
    pageNumber: skip,
    pageSize: limit,
    searchItems,
    // searchItems: search
    //   ? [
    //       {
    //         key: 'contactPersonName',
    //         value: search,
    //         operator: 'equal',
    //       },
    //       {
    //         key: 'code',
    //         value: search,
    //         operator: 'equal',
    //       },
    //     ]
    //   : [],
  };
}
