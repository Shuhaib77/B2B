import React from "react";

function Review() {
  return (
    <div>
      <div className="h-[700px] w-full bg-gray-400   p-15">
        <h1 className="mt-5 mb-5 text-2xl font-semibold">
          descriptionw | Reviw
        </h1>
        <div className="h-[200px] overflow-y-scroll flex flex-col gap-y-3">
          <div className=" border rounded-xl p-3  flex  ">
            <div className="w-1/10">
              <div className="bg-gray-600 w-[100px] h-[100px] rounded-full ">
                {" "}
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <h1>name</h1>
                <h1>ratinggg</h1>
              </div>
              <p>
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here5r5r4tg54yg5ycg5yghy6h',
              </p>
              <div className=" flex gap-x-5">
                <button>like</button>
                <button>replay</button>
                <button>time</button>
              </div>
            </div>

            {/* ------ */}
          </div>
        </div>

        <div className=" overflow-scroll ">
          <div className=" border rounded-xl p-3 flex  p-5">
            <div className="w-1/10">
              <div className="bg-gray-600 w-[100px] h-[100px] rounded-full ">
                {" "}
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-4">
                <label htmlFor="">name</label>
                <label htmlFor="">email</label>
                <input className="border rounded p-4" type="text" />
                <input className="border rounded p-4" type="text" />

                {/* <h1>ratinggg</h1> */}
              </div>
              <label htmlFor="">message</label>
              <textarea
                className="border rounded p-4 w-full mt-3"
                name=""
                id=""
              ></textarea>

              <div className=" flex justify-between">
                <div >
                  <h1 className="font-bold">Rating:</h1>
                </div>
                <div>
                    <button className="p-1 rounded-3xl bg-black w-32 text-white">Post review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
