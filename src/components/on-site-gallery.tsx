"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

const ON_SITE_IMAGES: string[] = [
  "/imgs/on-site/1.JPG",
  "/imgs/on-site/2.JPG",
  "/imgs/on-site/3.JPG",
  "/imgs/on-site/4.JPG",
  "/imgs/on-site/5.JPG",
  "/imgs/on-site/6.JPG",
  "/imgs/on-site/7.JPG",
  "/imgs/on-site/8.JPG",
  "/imgs/on-site/9.JPG",
  "/imgs/on-site/10.JPG",
  "/imgs/on-site/11.JPG",
  "/imgs/on-site/12.JPG",
  "/imgs/on-site/13.JPG",
  "/imgs/on-site/14.JPG",
  "/imgs/on-site/15.JPG",
  "/imgs/on-site/16.JPG",
];

export function OnSiteGallery() {
  const [activeModalSrc, setActiveModalSrc] = useState<string | null>(null);

  return (
    <section id="on-site-gallery" aria-label="工厂与车间实景" className="bg-[#f8f9fa] py-16 px-5 md:px-12 border-t border-smoke">
      <div className="mx-auto max-w-[1440px]">
        {/* 标题 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[13px] md:text-[14px] font-bold uppercase tracking-widest text-ink/60">
              FACTORY TOUR & WORKSHOP ON-SITE
            </span>
            <h2 className="mt-2 text-[28px] md:text-[38px] font-bold tracking-tight text-ink">
              生产基地 · 工地与车间实景
            </h2>
            <p className="mt-2 text-[15px] md:text-[16px] text-zinc-600 max-w-2xl">
              真实呈现深圳润裕商贸制造基地的生产制造流程——涵盖自动化冲压拉伸、精密焊接、表面喷涂及严格检测各工段实拍。
            </p>
          </div>
          <div className="flex items-center gap-2 text-[13px] font-medium text-zinc-500">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            现场实拍共 {ON_SITE_IMAGES.length} 张车间实景
          </div>
        </div>

        {/* 纯净瀑布流画廊（无任何文字覆盖） */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {ON_SITE_IMAGES.map((src, index) => (
            <div
              key={src}
              onClick={() => setActiveModalSrc(src)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 break-inside-avoid border border-zinc-200/70"
            >
              <img
                src={src}
                alt={`车间实景实拍 ${index + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 高清大图纯净预览弹窗 */}
      {activeModalSrc && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalSrc(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl bg-black p-2 shadow-2xl"
          >
            {/* 关闭按钮 */}
            <button
              type="button"
              onClick={() => setActiveModalSrc(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition border border-white/20"
              aria-label="关闭预览"
            >
              <Icon name="close" size={20} className="fill-white" />
            </button>

            <div className="flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={activeModalSrc}
                alt="车间实景高清大图"
                className="max-h-[85vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
