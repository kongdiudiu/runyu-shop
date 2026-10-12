"use client";

import { Icon, type IconName } from "@/components/icons";

interface ContactPerson {
  name: string;
  role: string;
  tel: string;
  email: string;
  wechatQr: string;
  whatsappQr: string;
}

const CONTACTS: ContactPerson[] = [
  {
    name: "Erin",
    role: "海外业务与客户对接 / Overseas Business",
    tel: "+86 13128779836",
    email: "liyinglong1996@gmail.com",
    wechatQr: "/imgs/Erin_wechat.png",
    whatsappQr: "/imgs/Erin_whatsapp.png",
  },
  {
    name: "Ryan",
    role: "商务合作与定制对接 / Business Cooperation",
    tel: "+86 18123701992",
    email: "Ryan@runyu.shop",
    wechatQr: "/imgs/Ryan_wechat.png",
    whatsappQr: "/imgs/Ryan_whatsapp.png",
  },
];

const SOCIALS: { name: IconName; href: string; label: string }[] = [
  { name: "social-facebook", href: "https://www.facebook.com/RunyuKENoVA", label: "Facebook @RunyuKENoVA" },
  { name: "social-instagram", href: "https://www.instagram.com/RunyuKENoVA", label: "Instagram @RunyuKENoVA" },
  { name: "social-tiktok", href: "https://www.tiktok.com/@RunyuKENoVA", label: "TikTok @RunyuKENoVA" },
];

function ContactCard({ contact }: { contact: ContactPerson }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div>
          <span className="text-[18px] font-bold text-white">{contact.name}</span>
          <p className="text-[12px] text-gray-300">{contact.role}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 text-[13px] text-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Tel:</span>
          <a href={`tel:${contact.tel}`} className="font-semibold text-white hover:underline">
            {contact.tel}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Email:</span>
          <a href={`mailto:${contact.email}`} className="text-white hover:underline break-all">
            {contact.email}
          </a>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
        <div className="flex flex-col items-center gap-1.5">
          <div className="overflow-hidden rounded bg-white p-1 shadow-sm">
            <img
              src={contact.wechatQr}
              alt={`${contact.name} WeChat QR Code`}
              className="h-24 w-24 object-contain"
            />
          </div>
          <span className="text-[11px] font-medium text-gray-300">WeChat 微信扫码</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="overflow-hidden rounded bg-white p-1 shadow-sm">
            <img
              src={contact.whatsappQr}
              alt={`${contact.name} WhatsApp QR Code`}
              className="h-24 w-24 object-contain"
            />
          </div>
          <span className="text-[11px] font-medium text-gray-300">WhatsApp 扫码联系</span>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="footer-contact" className="bg-[#101010] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* 公司品牌与简介 */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/imgs/trademark.jpg"
                alt="深圳润裕商贸有限公司"
                className="h-12 w-auto rounded object-contain bg-white/10 p-1"
              />
              <div>
                <h2 className="text-[20px] font-bold leading-tight">深圳润裕商贸有限公司</h2>
                <p className="text-[12px] tracking-wider text-gray-300">
                  SHENZHEN RUNYU TRADING CO., LTD.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-[14px] leading-relaxed text-gray-300">
              <p>
                <strong className="text-white">主营产品：</strong>不锈钢制品 (Stainless Steel Products)、保温杯、器皿与户外水具。
              </p>
              <p>
                <strong className="text-white">代工模式：</strong>支持专业 <span className="font-bold text-white">OEM & ODM</span> 深度定制，欢迎全球客商询盘合作。
              </p>
              <p>
                <strong className="text-white">官方网址：</strong>
                <a
                  href="http://www.runyu.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-white underline hover:text-gray-300"
                >
                  http://www.runyu.shop/
                </a>
              </p>
            </div>

            {/* 公司地址 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-[13px] text-gray-300">
              <div className="font-bold text-white mb-1.5 flex items-center gap-2">
                <Icon name="location" size={16} />
                <span>公司地址 / Address</span>
              </div>
              <p className="leading-snug">广东省梅州市梅江区城北镇明阳村第十八村民小组罗屋41号</p>
              <p className="mt-1 text-[12px] text-gray-400 leading-snug">
                No. 41, Luowu, Mingyang Village, Chengbei Town, Meijiang District, Meizhou City, Guangdong Province, China
              </p>
            </div>

            {/* 社媒矩阵 */}
            <div>
              <p className="text-[14px] font-semibold text-white mb-3">关注我们 / Follow Us (@RunyuKENoVA)</p>
              <div className="flex gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    title={social.label}
                  >
                    <Icon name={social.name} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 商务对接与二维码 */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div>
              <h3 className="text-[22px] font-bold text-white">业务联系与咨询 / Contact Us</h3>
              <p className="mt-1 text-[13px] text-gray-400">
                支持电话直拨与 WeChat / WhatsApp 扫码快速沟通
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {CONTACTS.map((contact) => (
                <ContactCard key={contact.name} contact={contact} />
              ))}
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-gray-400 sm:flex-row">
          <p>© 2026 深圳润裕商贸有限公司 (SHENZHEN RUNYU TRADING CO., LTD.) All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[12px]">
            <a href="http://www.runyu.shop/" className="hover:text-white">
              runyu.shop
            </a>
            <span>•</span>
            <span>OEM & ODM 不锈钢制品专家</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
