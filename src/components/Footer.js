export default function Footer() {
  return (
    <footer className="flex h-12 px-8 font-cabinet font-medium bg-black text-white justify-center items-center">
      <p>
        Copyright &copy; 2022.{" "}
        <a
          href="https://github.com/StephanieKSanchez"
          className="underline cursor-pointer underline-offset-8 hover:text-green-400"
          target="_blank"
        >
          Stephanie Sanchez
        </a>
      </p>
    </footer>
  );
}
