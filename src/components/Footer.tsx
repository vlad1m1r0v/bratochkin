export const Footer = () => {
  return (
    <div className="bg-red-600">
      <div className="mx-auto max-w-screen-xl py-4 text-center text-neutral-50">
        <span>
          © {new Date().getFullYear()}. Lucid Media. All rights reserved.
        </span>
      </div>
    </div>
  );
};
