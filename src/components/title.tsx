const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex w-full items-center justify-center pt-6 text-2xl capitalize text-blue-500">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
