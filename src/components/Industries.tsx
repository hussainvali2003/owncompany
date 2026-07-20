'use client';

import React from 'react';
import { 
  Factory, 
  Car, 
  Boxes, 
  Truck, 
  HardHat, 
  Pill, 
  Wrench, 
  Shirt, 
  FlaskConical, 
  ShoppingBag,
  MapPin
} from 'lucide-react';
import { industryList } from '../config/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Car,
  Boxes,
  Truck,
  HardHat,
  Pill,
  Wrench,
  Shirt,
  FlaskConical,
  ShoppingBag
};

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
            Sectoral Expertise
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3C5D] mt-3">
            Industries We Serve Across India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tailored candidate sourcing pipelines for diverse manufacturing, supply chain, and engineering verticals.
          </p>
        </div>

        {/* 10 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {industryList.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Factory;
            return (
              <div
                key={ind.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-5 hover:bg-white hover:shadow-xl hover:border-[#0B3C5D]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B3C5D] text-white flex items-center justify-center mb-4 group-hover:bg-[#F97316] transition-colors shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0B3C5D] mb-2 group-hover:text-[#F97316] transition-colors">
                    {ind.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Key Roles Sourced:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {ind.rolesSourced.slice(0, 3).map((role, idx) => (
                      <span 
                        key={idx}
                        className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0B3C5D] pt-1">
                    <MapPin className="w-3 h-3 text-[#F97316]" />
                    <span className="truncate">{ind.popularLocation}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
