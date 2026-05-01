"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Modal, Form, Input, InputNumber, QRCode, Button, Select } from 'antd';

// Import styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PRICE_PER_BOOK = 346476;

// 1. Định nghĩa kiểu dữ liệu cho Book
interface Book {
  id: number;
  title: string;
  image: string;
}

// 2. Định nghĩa kiểu dữ liệu cho Form Values
interface OrderFormValues {
  name: string;
  address: string;
  phone: string;
  volume: string;
  quantity: number;
}

export default function GamePage() {
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  
  // Thay 'any' bằng interface Book hoặc null
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [form] = Form.useForm<OrderFormValues>();
  const [totalAmount, setTotalAmount] = useState<number>(PRICE_PER_BOOK);

  const bookList: Book[] = [
    { id: 1, title: "Tokyo Ghoul RE Vol 1", image: "/vol 1.jpg" },
    { id: 2, title: "Tokyo Ghoul RE Vol 2", image: "/vol 2.jpg" },
    { id: 3, title: "Tokyo Ghoul RE Vol 3", image: "/vol 3.jpg" },
    { id: 4, title: "Tokyo Ghoul RE Vol 4", image: "/vol 4.jpg" },
  ];

  const handleBuyClick = (book: Book) => {
    setSelectedBook(book);
    setIsConfirmOpen(true);
  };

  const handleConfirmYes = () => {
    setIsConfirmOpen(false);
    setIsInfoOpen(true);
  };

  // 3. Sửa 'any' ở changedValues
  // Partial<OrderFormValues> nghĩa là chỉ chứa một vài trường đang thay đổi
  const onValuesChange = (changedValues: Partial<OrderFormValues>) => {
    if (changedValues.quantity !== undefined) {
      setTotalAmount(changedValues.quantity * PRICE_PER_BOOK);
    }
  };

  const handleFinish = (values: OrderFormValues) => {
    const emailTo = "daongoc.phuongmy308@gmail.com"; 
    const subject = encodeURIComponent(`Order: ${selectedBook?.title || "Book Order"}`);
    
    const body = encodeURIComponent(
      `Họ tên: ${values.name}\n` +
      `Địa chỉ: ${values.address}\n` +
      `Số điện thoại: ${values.phone}\n` +
      `Tập: ${values.volume}\n` +
      `Số lượng: ${values.quantity}\n` +
      `Tổng tiền: ${totalAmount.toLocaleString()} VND`
    );

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    
    setIsInfoOpen(false);
    form.resetFields();
  };

  return (
    <section className="bg-white min-h-screen text-black selection:bg-[#df2531] selection:text-white pb-20">
      <style jsx global>{`
        .book-pagination .swiper-pagination-bullet { background: #000 !important; opacity: 0.3; width: 12px; height: 12px; }
        .book-pagination .swiper-pagination-bullet-active { background: #df2531 !important; opacity: 1; }
        .ant-btn-primary { background-color: #df2531 !important; border-color: #df2531 !important; }
      `}</style>

        {/* Header */}
      <div className="py-20 px-6 md:px-20 lg:px-32 bg-white flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
          The <br className="md:hidden" /> Game
        </h1>
        <div className="h-2 w-24 bg-[#df2531] mt-6"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
         
          {/* Local Video Section */}
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-video border-4 border-black shadow-[15px_15px_0px_0px_#df2531] overflow-hidden bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
              >
                <source src="/trailer game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Game Information */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-6">
            <div className="text-4xl font-black uppercase tracking-tighter leading-tight">
              <h2>TOKYO GHOUL:re</h2>
              <h2 className="text-[#df2531]">[CALL to EXIST]</h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-bold italic text-gray-500 uppercase">
                It may not be stylish, but... Live.
              </p>

              <p className="text-xl font-medium leading-relaxed border-l-4 border-black pl-6">
                Eat or be eaten. <span className="font-black">TOKYO GHOUL:re [CALL to EXIST]</span> is a co-op survival action game that lets you experience the exciting world of Tokyo Ghoul and Tokyo Ghoul:re for yourself.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 py-4">
              {["Co-op", "Survival", "Action", "Multiplayer"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <Link
                href="https://store.steampowered.com/app/756530/TOKYO_GHOULre_CALL_to_EXIST/"
                target="_blank"
                className="inline-block w-full md:w-auto text-center px-10 py-4 bg-[#df2531] text-white font-black uppercase tracking-widest text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Get Game
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Books Swiper */}
      <div className="max-w-7xl mx-auto px-6 mt-32 relative">
        {/* Header cho phần Books */}
        <div className="py-20 px-6 md:px-20 lg:px-32 bg-white flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
            Books
          </h2>
          <div className="h-2 w-24 bg-[#df2531] mt-6"></div>
        </div>
        <div className="relative group px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: '.book-prev', nextEl: '.book-next' }}
            pagination={{ clickable: true, el: '.book-pagination' }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-20"
          >
            {bookList.map((book) => (
              <SwiperSlide key={book.id}>
                <div className="border-[3px] border-black rounded-[40px] p-8 flex flex-col items-center bg-white hover:border-[#df2531] group/card transition-all">
                  <div className="relative w-full h-56 mb-6">
                    <Image src={book.image} alt={book.title} fill className="object-contain transition-transform group-hover/card:scale-105" />
                  </div>
                  <span className="px-6 py-2 border-2 border-black rounded-full font-bold uppercase text-xs mb-4 group-hover/card:bg-[#df2531] group-hover/card:text-white transition-all">
                    {book.title}
                  </span>
                  <button onClick={() => handleBuyClick(book)} className="px-8 py-2 bg-black text-white font-bold rounded-full hover:bg-[#df2531] uppercase text-xs">
                    Buy Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="book-prev absolute -left-4 md:-left-8 top-[40%] text-3xl font-black hover:text-[#df2531]">←</button>
          <button className="book-next absolute -right-4 md:-right-8 top-[40%] w-12 h-12 border-2 border-[#df2531] rounded-full text-[#df2531] font-bold hover:bg-[#df2531] hover:text-white transition-all">→</button>
          <div className="book-pagination flex justify-center gap-3 mt-4"></div>
        </div>
      </div>

      {/* Modal 1: Confirm */}
      <Modal title={null} open={isConfirmOpen} onCancel={() => setIsConfirmOpen(false)} footer={null} centered width={300}>
        <div className="text-center p-4">
          <h3 className="text-xl font-bold mb-6 italic uppercase text-black">Are you sure?</h3>
          <div className="flex justify-center gap-4">
            <button onClick={handleConfirmYes} className="px-6 py-2 bg-[#df2531] text-white font-bold rounded-md">YES</button>
            <button onClick={() => setIsConfirmOpen(false)} className="px-6 py-2 bg-gray-200 font-bold rounded-md">NO</button>
          </div>
        </div>
      </Modal>

      {/* Modal 2: Info & Payment */}
      <Modal
        title={<span className="text-2xl font-black italic uppercase text-black">Order Information</span>}
        open={isInfoOpen}
        onCancel={() => setIsInfoOpen(false)}
        footer={null}
        width={800}
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <Form form={form} layout="vertical" onFinish={handleFinish} onValuesChange={onValuesChange} initialValues={{ quantity: 1, volume: selectedBook?.title }}>
            <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item name="address" label="Address" rules={[{ required: true }]}>
              <Input placeholder="Delivery address" />
            </Form.Item>
            <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
              <Input placeholder="Your phone number" />
            </Form.Item>
            <div className="flex gap-4">
              <Form.Item name="volume" label="Select Vol" className="flex-1">
                <Select>
                  {[...Array(16)].map((_, i) => (
                    <Select.Option key={i+1} value={`Vol ${i+1}`}>Vol {i+1}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="quantity" label="Quantity" className="w-24">
                <InputNumber min={1} max={100} />
              </Form.Item>
            </div>
            <div className="mb-6 p-4 bg-gray-50 border-l-4 border-[#df2531]">
              <p className="text-sm text-gray-500">Total Price:</p>
              <p className="text-2xl font-black text-[#df2531]">{totalAmount.toLocaleString()} VND</p>
            </div>
            <Button type="primary" htmlType="submit" block className="h-12 font-bold text-lg uppercase">
              Confirm & Open Email
            </Button>
          </Form>

          <div className="flex flex-col items-center justify-center border-l border-gray-100 pl-4">
            <p className="font-bold mb-4 uppercase text-black">Scan to Pay</p>
            <QRCode value={`Payment-Total-${totalAmount}`} color="#df2531" bordered={false} />
          </div>
        </div>
      </Modal>

      <div className="flex justify-center mt-12">
        <Link href="/books" className="px-14 py-4 bg-[#df2531] text-white font-black text-2xl rounded-full border-2 border-black hover:bg-black transition-all uppercase">
          More
        </Link>
      </div>
    </section>
  );
}