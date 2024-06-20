import r_icon from "@/assets/r_icon.png";

function RightSidenav() {
  return (
    <div className="  p-2 h-full text-primary">
      <div className="bg-background-secondary rounded-md p-3">
        <div className="flex">
          <p className="flex-1">RECENT POSTS</p>
          <button className="text-blue-500 ">Clear</button>
        </div>
        <div className="mt-6">
          <div className="flex gap-x-2">
            <img src={r_icon} alt="" className="w-5 h-5     " />
            <h5 className="text-gray-500 text-sm">r/Cebu</h5>
          </div>
          <h4 className="py-2">Maecenas</h4>
          <div className="flex gap-x-2">
            <p className="text-sm">34 upvotes •</p>
            <p className="text-sm">42 comments</p>
          </div>
          <hr className="mt-2 border-neutral w-full" />
        </div>
      </div>
    </div>
  );
}

export default RightSidenav;
