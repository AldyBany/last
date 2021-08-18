import React, { useState, useEffect,useRef } from 'react';
import {gsap,TimelineLite} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Scrollbar from 'smooth-scrollbar'

const Banner = () => {
    gsap.registerPlugin(ScrollTrigger)

    const headerRef = useRef(null)

    const data = [
        {
        id: 1,
        imageSrc:
            "https://images.unsplash.com/photo-1616788373791-1d4794500268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
        id: 2,
        imageSrc:
            "https://images.unsplash.com/photo-1594739297262-188737d3c2b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=964&q=80",
        },
        {
        id: 3,
        imageSrc:
            "https://images.unsplash.com/photo-1618938225889-a87f84263cc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
        id: 4,
        imageSrc:
            "https://images.unsplash.com/photo-1556483563-7f4034a4eeb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        },
        {
        id: 5,
        imageSrc:
        "https://images.unsplash.com/photo-1590735213920-68192a487bc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },

    ];
    

     useEffect(()=>{
        const scrollbar = document.querySelector('.main')
        const text = document.querySelector('.text-container > h1')
        const text2 = document.querySelector('.text-container > h2')
        const initScroll = ()=>{
            const verticalScrollbar = Scrollbar.init(scrollbar,{
                dumping:0.1,
                delegateTo: document
            })
            verticalScrollbar.setPosition(0,0)
            verticalScrollbar.track.yAxis.element.remove()
            verticalScrollbar.track.xAxis.element.remove()
            ScrollTrigger.scrollerProxy('.main',{
                scrollTop(value){
                    if(arguments.length){
                        verticalScrollbar.scrollTop = value
                    }

                    return verticalScrollbar.scrollTop
                }
            })
        }
        initScroll()
        
        const images = document.querySelectorAll('section.images > figure')
        gsap.to(images[0],{duration:0,right:0, rotate:0,top:'3%',zIndex:0})
        gsap.to(images[1],{duration:0,right:-125,top:'11%',zIndex:2})
        gsap.to(images[2],{duration:0,right:35,top:'15%',zIndex:1})
        gsap.to(images[3],{duration:0,right:'16%',top:'10%',zIndex:3})
        gsap.to(images[4],{duration:0,right:'13%',top:'1%',zIndex:1})
        // gsap.to(images[5],{duration:0,right:'18%',top:'33%',zIndex:0})

        const defaultScrollConfig  = {
            trigger:'.main',
            start:'-40px  top',
            scoller: scrollbar,
            end:'+=100%',
            scrub:1
        }

        const endPosition = {
            top:'78%',
            rotate:0,
            left:'50%',
            transform: 'translate(-50%,-50%)'
        }
  
    })

    


    return (
        <div className="banner">
            <div className="text-container">
                <h1 className="h1">Write a story <br/>about your travels memories <br/> and share it with your friends<br/> and the world </h1><br/>
            </div>

           
            
            <div className="main">
                <section className="images">
                    {
                        data.map((item)=>(
                            <figure key={item.id}>
                                <img src={item.imageSrc}/>
                            </figure>
                        ))
                    }
                </section>
            </div>
        
       
        </div>
    )
}

export default Banner
