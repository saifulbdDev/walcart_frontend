import React from "react";
import Image from "next/image";
import { popularCategories } from "../Data";
const PopularCategories = () => {
  return (
    <section className="popular-categories">
      <div className="container">
          <div className="popular-categories-header">
           <h2 >Popular Product Categories</h2>
          </div>
        <div className="row">
          {popularCategories.map((menu, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <Image src={menu.image} alt={menu?.title} />
                  <span className="card-title">{menu.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
