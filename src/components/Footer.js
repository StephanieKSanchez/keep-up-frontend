import "../styling/footer.css";

export default function Footer() {
  return (
    <footer className="footerContainer">
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
