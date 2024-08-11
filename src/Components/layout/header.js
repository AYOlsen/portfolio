import Navigation from "./navigation";

export default function Header ({ divClassName }) {
  return (
    <header className={`mx-auto items-center justify-between bg-background`}>
      <Navigation divClassName={divClassName} />
    </header>
  )
};