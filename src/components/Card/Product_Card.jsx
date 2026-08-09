import React from 'react';
import { useNavigate } from 'react-router';
import './product_Card.css';

const Product_Card = ({ Pid, thumbnail, category, title, price, rating , status }) => {
    let navigate = useNavigate();

    return (
        <div className="group relative bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">

            <div>
                {/* Product Image Box */}
                <div className="relative w-full h-48 bg-slate-50/80 rounded-xl overflow-hidden flex items-center justify-center p-4">
                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-600 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-xs border border-slate-100">
                        {category}
                    </span>

                    {/* Image with Zoom Effect */}
                    <img
                        src={thumbnail}
                        alt={title}
                        className="h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                </div>

                {/* Product Details */}
                <div className="mt-4">
                    <h3 className="text-slate-800 font-bold text-base tracking-tight line-clamp-1 group-hover:text-indigo-600 transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                       
                        {Array((Math.round((rating) || 0)))?.fill(0)?.map((i) => {
                            return 
                        })}
                        <div>
                            {(status?.toLowerCase() === 'in stock') ? (
                                <span className="text-green-500 font-bold">In Stock</span>
                            ) : (
                                <span className="text-red-500 font-bold">Out of Stock</span>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Price & Action Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                        Price
                    </span>
                    <span className="text-xl font-extrabold text-slate-900">
                        ${price}
                    </span>
                </div>

                {/* Stylish Circular Button */}
                <button
                 className=" w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-indigo-600 group-hover:scale-105 transition-all duration-300 shadow-md hover:cursor-pointer hover:bg-green-700"
                 
                 onClick={() => navigate(`/products-detail/${Pid}`)}
                 >
                    <svg className="w-4 h-4 stroke-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default Product_Card;