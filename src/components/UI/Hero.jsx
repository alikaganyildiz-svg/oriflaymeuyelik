import React from 'react';
import Image from 'next/image';
import MembershipForm from './MembershipForm';

const Hero = () => {
    return (
        <section className="relative w-full bg-gray-50 py-12 lg:py-20 overflow-hidden min-h-screen flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop"
                    alt="Oriflame Background"
                    fill
                    className="object-cover opacity-10 filter blur-sm"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-gray-50/95"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="animate-fade-in">
                    <MembershipForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;
