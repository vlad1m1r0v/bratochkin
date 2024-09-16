export const Footer = () => {
  return (
    <div className="border">
      <div className="mx-auto max-w-screen-xl py-4 text-center text-gray-800">
        <span>
          © {new Date().getFullYear()}. Lucid Co. All rights reserved.
        </span>
      </div>
    </div>
  );
};
