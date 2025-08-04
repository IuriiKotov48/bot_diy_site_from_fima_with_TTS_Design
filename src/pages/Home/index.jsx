import React, { useState } from 'react';
import Header from '../../components/common/Header';
import TTSControls from '../../components/TTSControls';

const Home = () => {
  const [textInput, setTextInput] = useState('');

  const features = [
    {
      icon: '/images/img_svg.svg',
      title: 'Hassle-free time tracking',
    },
    {
      icon: '/images/img_svg_black_900.svg',
      title: 'Perfect for freelancers',
    },
    {
      icon: '/images/img_svg_black_900_118x118.svg',
      title: 'Useful insights and analytics',
    },
    {
      icon: '/images/img_svg_118x118.svg',
      title: 'Quick export to CSV',
    },
    {
      icon: '/images/img_svg_1.svg',
      title: 'Daily limits and notifications',
    },
    {
      icon: '/images/img_svg_2.svg',
      title: 'Menubar extension',
    },
    {
      icon: '/images/img_svg_3.svg',
      title: 'Playful customization',
    },
    {
      icon: '/images/img_svg_4.svg',
      title: 'Unlimited projects',
    },
  ];

  const socialIcons = [
    { src: '/images/img_frame_gray_50.svg', alt: 'Social 1' },
    { src: '/images/img_frame_gray_50_70x70.svg', alt: 'Social 2' },
    { src: '/images/img_frame_gray_900_02.svg', alt: 'Social 3' },
    { src: '/images/img_frame_gray_900_02_34x34.svg', alt: 'Social 4' },
  ];

  return (
    <div className="w-full bg-global-2">
      {/* Background Image Container - Fixed with gradient backgrounds */}
      <div 
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%), url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')",
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="w-full">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center w-full">
              {/* Main Headline */}
              <h1 className="text-[95px] sm:text-[130px] md:text-[160px] lg:text-[189px] font-poppins font-medium leading-[80px] sm:leading-[110px] md:leading-[140px] lg:leading-[161px] text-global-1 text-center w-full mt-[32px] sm:mt-[48px] lg:mt-[64px]">
                Smarter Than Just Reading.
              </h1>

              {/* Description and CTA Row */}
              <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-full mt-[54px] sm:mt-[81px] lg:mt-[108px]">
                <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-poppins font-medium leading-[25px] sm:leading-[31px] lg:leading-[37px] text-global-3 text-center w-full lg:w-[56%] mb-6 lg:mb-0">
                  It is not just audio — it is a better way to absorb information. Listen, learn, and stay focused as your browser reads and thinks with you.
                </p>
                
                <div className="flex justify-center items-center self-center w-full lg:w-[30%]">
                  <img 
                    src="/images/img_arrow_1.svg" 
                    className="w-[11px] h-[11px] sm:w-[16px] sm:h-[16px] lg:w-[22px] lg:h-[22px]" 
                    alt="arrow" 
                  />
                  <span className="text-[25px] sm:text-[33px] lg:text-[41px] font-poppins font-medium leading-[25px] sm:leading-[33px] lg:leading-[41px] text-global-1 ml-[14px] sm:ml-[21px] lg:ml-[28px]">
                    Try Smarter Listening
                  </span>
                </div>
              </div>

              {/* Text Input Section */}
              <div className="w-full max-w-5xl mt-[53px] sm:mt-[79px] lg:mt-[106px] bg-global-3 border border-[#afafaf4c] rounded-[22px] sm:rounded-[33px] lg:rounded-[44px] p-[27px] sm:p-[40px] lg:p-[54px] shadow-[0px_0px_59px_#0000000b]">
                <div className="flex flex-col justify-start items-start w-full max-w-full mx-auto gap-[467px] sm:gap-[700px] lg:gap-[934px]">
                  <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e?.target?.value)}
                    placeholder="Enter your text here..."
                    className="w-full text-[18px] sm:text-[22px] lg:text-[26px] font-poppins font-medium leading-[25px] sm:leading-[31px] lg:leading-[37px] text-global-3 bg-transparent border-none outline-none resize-none min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]"
                  />
                  
                  <TTSControls 
                    textContent={textInput}
                    className="self-center w-full max-w-[600px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Second Section with Different Background - Fixed with gradient */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%), url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop')",
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="w-full pt-[60px] sm:pt-[80px] lg:pt-[100px] pb-[60px] sm:pb-[80px] lg:pb-[100px]">
          <div className="flex flex-col justify-center items-center w-full">
            
            {/* Features Section */}
            <div className="w-full max-w-5xl bg-global-3 border-[2px] sm:border-[3px] lg:border-[4px] border-[#ffffff29] rounded-[22px] sm:rounded-[33px] lg:rounded-[44px] p-[40px] sm:p-[60px] lg:p-[80px] shadow-[0px_0px_59px_#0000000b] mb-[60px] sm:mb-[80px] lg:mb-[100px]">
              <div className="flex flex-col justify-center items-center w-full">
                
                {/* Features Grid */}
                <div className="flex flex-col justify-start items-center w-full">
                  <div className="flex flex-col gap-[29px] sm:gap-[43px] lg:gap-[58px] w-full">
                    
                    {/* First Row of Features */}
                    <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                      <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                        {features?.slice(0, 4)?.map((feature, index) => (
                          <div key={index} className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-center w-full sm:w-1/4 p-[16px] sm:p-[24px] lg:p-[32px]">
                            <div className="w-[59px] h-[59px] sm:w-[88px] sm:h-[88px] lg:w-[118px] lg:h-[118px] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                              <span className="text-white text-2xl font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-[25px] sm:text-[33px] lg:text-[41px] font-sf-pro-display font-bold leading-[30px] sm:leading-[39px] lg:leading-[49px] text-global-1 text-center">
                              {feature?.title}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Second Row of Features */}
                    <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                      {features?.slice(4, 8)?.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-center w-full sm:w-1/4 p-[16px] sm:p-[24px] lg:p-[32px]">
                          <div className="w-[59px] h-[59px] sm:w-[88px] sm:h-[88px] lg:w-[118px] lg:h-[118px] bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">{index + 5}</span>
                          </div>
                          <h3 className="text-[25px] sm:text-[33px] lg:text-[41px] font-sf-pro-display font-bold leading-[30px] sm:leading-[39px] lg:leading-[49px] text-global-1 text-center">
                            {feature?.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Design Resources Section */}
                  <div className="flex flex-col lg:flex-row gap-[22px] sm:gap-[33px] lg:gap-[44px] justify-center items-center w-full mt-[60px] sm:mt-[90px] lg:mt-[120px]">
                    <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                      <p className="text-[40px] sm:text-[52px] lg:text-[65px] font-poppins font-semibold leading-[52px] sm:leading-[68px] lg:leading-[84px] text-center w-full lg:w-[56%] mt-[37px] sm:mt-[55px] lg:mt-[74px]">
                        <span className="text-global-1">Where magic meets logic, </span>
                        <span className="bg-[linear-gradient(135deg,#fcc188_0%,#7041d2_50%,#2d008e_100%)] bg-clip-text text-transparent">beautifully crafted</span>
                        <span className="text-global-4"> </span>
                        <span className="text-global-1">design resources that inspire.</span>
                      </p>
                      <img 
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85
