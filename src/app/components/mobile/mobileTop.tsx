export default function TopBar() {
  return (
    <>
      <div className="justify-end flex sticky top-0  bg-zinc-800 w-view h-16 md:hidden border-slate-600 border-b ">
        <div className="p-4">
          <a>Proyectos</a>
        </div>
        <div className="p-4">
          <a>Contacto</a>
        </div>
      </div>
    </>
  );
}
