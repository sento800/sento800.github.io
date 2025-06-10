function NavBar() {
  return (
    <div className="py-3">
      <ul className="text-2xl font-semibold flex">
        <li className="ml-6 cursor-pointer">About me</li>
        <li className="ml-6 cursor-pointer">Skills</li>
        <li className="ml-6 cursor-pointer">Projects</li>
        <li className="ml-6 cursor-pointer">Contact me</li>
      </ul>
    </div>
  );
}

export default NavBar;
