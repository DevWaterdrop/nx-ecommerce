import clsx from 'clsx';

export const Head: React.FC = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="divide-x divide-gray-200">
        <td
          className={clsx(
            'py-3.5 pr-4 pl-4',
            'font-semibold text-left text-sm',
            'sm:(pl-6)'
          )}
        >
          Products
        </td>
        <td
          className={clsx(
            'py-3.5 pr-4 pl-4',
            'font-semibold text-left text-sm',
            'sm:(pr-6)'
          )}
        >
          Total
        </td>
      </tr>
    </thead>
  );
};
