import React from "react";

const Apartment = () => {
  return (
    <div>
      {/* The button to open modal */}
      <a href="#my_modal_8" className="btn">
        <div className="card bg-white w-96 shadow-xl">
          <figure>
            <img src="/hero2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mini Flat </h2>
            <p>3bedroom </p>
            <div className=" flex items-center justify-end">
              <p>#700k/month</p>
              <p>Ibeju lekki</p>
            </div>
          </div>
        </div>
      </a>

      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with anchor links</p>
          <div className="modal-action">
            <a href="#" className="btn">
              close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
