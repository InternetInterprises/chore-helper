import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
}
