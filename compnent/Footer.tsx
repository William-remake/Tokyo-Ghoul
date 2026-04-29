import React from 'react';
import { FacebookFilled, TwitterSquareFilled, MailOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    /* 1. Xóa mt-20 để không còn khoảng hở với Section phía trên.
       2. Giữ bg-[#000000] để tạo độ tương phản mạnh mẽ sau các section màu trắng/đỏ.
    */
    <footer className="bg-[#000000] text-[#ffffff] py-16 px-6 lg:px-20 font-sans border-t border-[#ffffff]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Cột 1: Logo/Name */}
        <div className="space-y-4">
          <h2 className="text-[#df2531] text-2xl font-black uppercase italic tracking-tighter">
            Tokyo Ghoul:re
          </h2>
          <p className="text-gray-500 text-xs leading-relaxed max-w-62.5 uppercase font-medium tracking-wider">
            A collaborative fan project by William & Willston, 
            crafted with passion for the world of Tokyo Ghoul:re.
          </p>
        </div>

        {/* Cột 2: Contact */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg uppercase tracking-wide text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=daongoc.phuongmy308@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#df2531] transition-colors flex items-center gap-2"
              >
                <MailOutlined className="text-xs" /> William
              </a>
            </li>
            <li>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nn5583425@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#df2531] transition-colors flex items-center gap-2"
              >
                <MailOutlined className="text-xs" /> Willston
              </a>
            </li>
            <li className="hover:text-white transition-colors cursor-default">Bien Hoa, Dong Nai, VietNam</li>
          </ul>
        </div>

        {/* Cột 3: About us & Socials */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg uppercase tracking-wide text-white">About us</h3>
          <div className="flex gap-4 text-2xl">
            <a 
              href="https://www.facebook.com/share/18NkZm2qKJ/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#df2531] transition-all duration-300 hover:scale-110"
            >
              <FacebookFilled />
            </a>
            <a 
              href="https://x.com/Jackkastumi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#df2531] transition-all duration-300 hover:scale-110"
            >
              <TwitterSquareFilled />
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#ffffff]/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
           <span>Terms of Service</span>
           <span>Privacy Policy</span>
        </div>
        <p className="text-[12px] text-white uppercase tracking-widest">
          Copyright © 2026 William & Willston
        </p>
      </div>
    </footer>
  );
}