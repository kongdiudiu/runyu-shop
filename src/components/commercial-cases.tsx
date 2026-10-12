"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

const CASE_IMAGES: string[] = [
  "/imgs/example/168.JPG",
  "/imgs/example/170.JPG",
  "/imgs/example/171.JPG",
  "/imgs/example/172.JPG",
  "/imgs/example/173.JPG",
  "/imgs/example/174.JPG",
  "/imgs/example/175.JPG",
  "/imgs/example/176.JPG",
  "/imgs/example/177.JPG",
  "/imgs/example/178.JPG",
  "/imgs/example/179.JPG",
  "/imgs/example/180.JPG",
  "/imgs/example/181.JPG",
  "/imgs/example/182.JPG",
  "/imgs/example/183.JPG",
];

export function CommercialCases() {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? CASE_IMAGES : CASE_IMAGES.slice(0, 8);

  return (
    <section id="commercial-cases" aria-label="商业案例展示" className="bg-white py-16 px-5 md:px-12 border-t border-smoke">
      <div className="mx-auto max-w-[1440px]">
        {/* 标题说明 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-widest text-ink/60">
              COMMERCIAL SHOWCASE & OEM/ODM CASES
            </span>
            <h2 className="mt-2 text-[28px] md:text-[38px] font-bold tracking-tight text-ink">
              商业案例 · 定制精选
            </h2>
            <p className="mt-2 text-[15px] md:text-[16px] text-zinc-600 max-w-2xl">
              深圳润裕商贸为全球客户提供专业的不锈钢制品 OEM / ODM 代工定制方案，涵盖多样化容量、杯型开模、色彩调配与品牌定制工艺。
            </p>
          </div>
          <a
            href="#footer-contact"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-ink underline underline-offset-4 hover:opacity-70 transition shrink-0"
          >
            获取案例样品打样与报价 →
          </a>
        </div>

        {/* 纯净案例图片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedImages.map((src, index) => (
            <div
              key={src}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 hover:-translate-y-0.5"
            >
              <img
                src={src}
                alt={`商业定制案例 ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* 展开/收起切换 */}
        {CASE_IMAGES.length > 8 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 rounded-full border border-ink bg-white px-8 py-3 text-[14px] font-bold text-ink transition hover:bg-ink hover:text-white"
            >
              <span>{showAll ? "收起案例列表" : `查看全部案例 (共 ${CASE_IMAGES.length} 款)`}</span>
              <Icon
                name={showAll ? "chevron-up" : "chevron-down"}
                size={14}
                className="transition-transform duration-200"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
