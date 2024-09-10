interface Props {
  children: React.ReactNode;
}

export const Divider: React.FC<Props> = ({ children }) => {
  return (
    <div className="py-3 flex items-center text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
      {children}
    </div>
  );
};
