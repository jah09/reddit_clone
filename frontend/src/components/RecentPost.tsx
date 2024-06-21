import r_icon from "@/assets/r_icon.png";

function RecentPost() {
    return (
        <div className="  p-2 h-full text-primary">
          <div className="bg-background-secondary rounded-md p-3">
            <div className="flex bg-inherit">
              <p className="flex-1 bg-inherit text-text-primary">RECENT POSTS</p>
              <button className="text-secondary-accent ">Clear</button>
            </div>
            <div className="mt-6 bg-inherit">
              <div className="flex gap-x-2 bg-inherit">
                <img src={r_icon} alt="" className="w-5 h-5     " />
                <h5 className="text-gray-500 text-sm bg-inherit text-text-primary">f/ Cebu</h5>
              </div>
              <h4 className="py-2 bg-inherit text-text-primary">Maecenas</h4>
              <div className="flex gap-x-2 bg-inherit">
                <p className="text-sm bg-inherit text-text-primary">34 upvotes •</p>
                <p className="text-sm bg-inherit text-text-primary">42 comments</p>
              </div>
              <hr className="mt-2 border-neutral w-full" />
            </div>
          </div>
        </div>
      );
}

export default RecentPost
