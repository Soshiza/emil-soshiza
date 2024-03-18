import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-rose-pale py-8 px-4 text-center">
      <div className="mb-4">
        <p className="text-olive mb-2">
          <Link legacyBehavior href="https://www.soshiza.com">
            <a className="hover:underline">Soshiza</a>
          </Link>
          © 2023 Todos los derechos reservados.
        </p>
        <p className="text-orange-soft mx-2">
          <Link legacyBehavior href="https://www.soshiza.com/politicadeprivacidad">
            <a className="underline ml-2">Política de privacidad    </a>
          </Link>
          <Link legacyBehavior href="https://www.soshiza.com/terminosycondiciones">
            <a className="underline ml-2">    Términos y condiciones</a>
          </Link>
        </p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
