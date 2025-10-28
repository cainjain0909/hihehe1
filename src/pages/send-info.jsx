import icon from '@/assets/images/icon.webp';
import { useState, useMemo } from 'react';

const SendInfo = () => {
    const defaultTexts = useMemo(
        () => ({
            title: 'Our system has received your information.',
            description1: 'If we still find that you are not old enough to use Facebook, your account will remain disabled. This is because your account does not comply with our Terms of Service.',
            description2: 'We always care about the security of everyone on Facebook so you cannot use your account until then.',
            helpCenter: 'Help Center' // Thêm text cho header
        }),
        []
    );

    // 🚀 Lấy texts từ cache, không dịch lại
    const translations = JSON.parse(localStorage.getItem('translations'));
    const [translatedTexts, setTranslatedTexts] = useState(
        translations?.sendInfo || defaultTexts
    );

    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Header với Help Center */}
            <header className='bg-white border-b border-gray-300'>
                <div className='max-w-6xl mx-auto px-4 py-3'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                            <img 
                                src={icon} 
                                alt='Facebook' 
                                className='h-8 w-8'
                            />
                            <span className='text-lg font-semibold'>{translatedTexts.helpCenter || 'Help Center'}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className='max-w-2xl mx-auto px-4 py-6'>
                <div className='bg-white rounded-none shadow-sm border border-gray-300'>
                    {/* Title Section */}
                    <div className='px-6 py-6 border-b border-gray-300'>
                        <h1 className='text-xl font-bold text-gray-900'>
                            {translatedTexts.title}
                        </h1>
                    </div>

                    {/* Description Section */}
                    <div className='px-6 py-6 space-y-4'>
                        <p className='text-gray-700 leading-relaxed'>
                            {translatedTexts.description1}
                        </p>
                        <p className='text-gray-700 leading-relaxed'>
                            {translatedTexts.description2}
                        </p>
                    </div>
                </div>

                {/* Khoảng trắng phía dưới - dài hơn */}
                <div className='mt-16'></div>
                <div className='mt-16'></div>
            </main>
        </div>
    );
};
 
export default SendInfo;
