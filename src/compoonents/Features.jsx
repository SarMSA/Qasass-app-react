import {useRef}from 'react'
import {pic1Img,pic2Img, videoV } from '../utils'
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import gsap from 'gsap';

const Features = () => {
    const videoRef = useRef(null);
    useGSAP(()=> {
        gsap.to(videoRef.current,
            {scrollTrigger: {
                trigger: '#exploreVideo',
                start: '-10% bottom',
                toggleActions: 'play pause reverse restart',
            },
        onComplete: () => {
            videoRef.current.play();
        }}
        )
        animateWithGsap('#features-title', {y: 0, opacity: 1})
        animateWithGsap('.g_grow', {scale: 1, opacity: 1, ease:'power1'}, {scrub: 5})
        animateWithGsap('.g_text', {y: 0, opacity: 1 , duration: 1, ease:'power2.inOut'})
    }, [])
  return (
    <section className='h-full common-padding bg-white dark:bg-dark-zinc relative overflow-hidden'>
        <div className="screen-max-width">
            <div className='mb-12 w-full'>
                <h1 id='features-title' className='section-heading'>
                    Explore the full story.
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="mt-32 mb-24 pl-24">
                    <h2 className='text-5xl lg:text-7xl font-semibold'>
                        iPhone
                    </h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>
                        Forged in titanium
                    </h2>
                </div>
                <div className="flex-center flex-col sm:px-10">
                    <div className="relative h-[50vh] w-full flex items-center">
                        <video 
                            ref={videoRef}
                            playsInline 
                            muted 
                            autoPlay 
                            id='exploreVideo' 
                            className='w-full h-full object-cover object-center' 
                            preload='none'
                        >
                            <source src={videoV} type='video/mp4' />
                        </video>

                    </div>
                    <div className="flex flex-col w-full relative">
                        <div className="feature-video-container">
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={pic1Img} alt="titanium" className='feature-video g_grow'/>
                            </div>
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={pic2Img} alt="titanium2" className='feature-video g_grow'/>
                            </div>
                        </div>
                        <div className="feature-text-container">
                            <div className="flex-1 flext-center">
                                <p className="feature-text g_text" >
                                iPhone 15 Pro is {' '}
                                <span className="text-gray dark:text-white">
                                the first iPhone to feature an aerospace-grade titanium design
                                    </span> 
                                    using the same alloy that spacecrafts use for missions to Mars.
                                </p>
                            </div>
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                    <span className="text-gray dark:text-white">
                                    lightest Pro models ever.
                                    </span>
                                    You will notice the difference the moment you pick one up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features