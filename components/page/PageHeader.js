const PageHeader = ({ page }) => {
  return (
    <div>
        <div className="relative mb-8 bg-gradient-to-br from-gray-800 to-teal-900">
          <div className="relative mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="rounded-xl bg-black/25 p-10">
              <h1 className="text-white text-4xl font-extrabold tracking-tight dark:text-white sm:text-5xl lg:text-6xl">
                {page?.title}
              </h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PageHeader;
