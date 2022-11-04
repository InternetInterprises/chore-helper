interface ErrorMessage {
  message: string;
}

const Error = ({ error }: { error: ErrorMessage | null }) => {
  return <div className="text-red-600">{error && error.message}</div>;
};

export default Error;
