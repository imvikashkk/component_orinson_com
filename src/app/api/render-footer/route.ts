import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch HTML from the external URL
    const { data } = await axios.get(
      "https://components-orinson.vercel.app/footer"
    );

    const morehtml = `
       <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        .app__container {
            @apply mx-auto max-w-6xl p-6 lg:px-0;
        }

        .app__text {
            @apply text-gray-600;
        }

        .active {
            @apply text-[#ff6a00] text-sm;
        }

        .active-white {
            @apply text-[#ffffff] text-sm;
        }

        .activeMenu {
            color: #ff6a00;
        }

        .highlight {
            color: #ff6a00;
        }

        .navlink,
        .navlink:after,
        .navlink:before {
            transition: all 0.5s;
        }

        .navlink:hover {
            color: #ff6a00;
        }

        .gradient-text-logo-blue {
            background: linear-gradient(45deg,
                    #4a9cff,
                    #d8ddff,
                    #3d94ff);
            /* Define your gradient colors */
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: #4a9cff;
        }

        .gradient-text-logo-white {
            background: linear-gradient(45deg,
                    #3179d0,
                    #88b8e8,
                    #3179d0);
            /* Define your gradient colors */
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: #4a9cff;
        }

        .logo-filter-white {
            filter: brightness(95%);
        }

        .no-select {
            user-select: none;
            -webkit-user-select: none;
            /* For Safari */
            -moz-user-select: none;
            /* For Firefox */
            -ms-user-select: none;
            /* For Internet Explorer/Edge */
        }


        /* stroke */
        .navlink {
            position: relative;
        }

        .navlink:after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 0%;
            content: ".";
            color: transparent;
            background: #ff6a00;
            height: 1px;
        }

        .navlink:hover:after {
            width: 100%;
        }

        .navlink-white,
        .navlink-white:after,
        .navlink-white:before {
            transition: all 0.5s;
        }

        .navlink-white:hover {
            color: #ffffff;
        }

        /* stroke */
        .navlink-white {
            position: relative;
        }

        .navlink-white:after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 0%;
            content: ".";
            color: transparent;
            background: #ffffff;
            height: 1px;
        }

        .navlink-white:hover:after {
            width: 100%;
        }

        .social {
            padding: 0.5rem;
            background: transparent;
            color: white;
            border-radius: 100%;
            border: 1px solid white;
            transition: all 0.3s ease-in-out;
        }

        .social:hover {
            background: linear-gradient(to right, #ee0979 0%, #ff6a00 51%, #ee0979 100%);
        }

        /* .primary-btn {
  background-image: linear-gradient(to right, #ee0979 0%, #ff6a00  51%, #ee0979  100%);
  padding: 12px 24px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;    
  font-weight: 700;        
  border-radius: 43px 43px 43px 12px;
  display: block;
}

.primary-btn:hover {
  background-position: right center; /* change the direction of the change here */
        /* color: #fff;
  text-decoration: none; */
        /* } */

        .primary-btn {
            position: relative;
            /* background-color: #ff5b69; */
            background-image: linear-gradient(to right,
                    #ee0979 0%,
                    #ff6a00 51%,
                    #ee0979 100%);
            padding: 12px 24px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            font-weight: 700;
            border-radius: 43px 43px 43px 12px;
            /* border: 1px solid #ee0979; */
            /* display: block; */
            z-index: 1;
        }

        .primary-btn:after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: #ffffff;
            z-index: -1;
            -webkit-clip-path: circle(0% at 0% 50%);
            clip-path: circle(0% at 0% 50%);
            transition: 0.5s ease-out;
            border-radius: 43px 43px 43px 12px;
        }

        .primary-btn:hover {
            color: #000 !important;
            border-color: transparent !important;
        }

        .primary-btn:hover:after {
            transition: 1s ease-in-out;
            -webkit-clip-path: circle(200% at 0% 50%);
            clip-path: circle(200% at 0% 50%);
            border: 1px solid #ee0979;
        }

        .primary-btn:hover:before {
            opacity: 1;
            visibility: visible;
        }

        .primary-btn.active:after {
            animation: btn-shatter 0.8s 1 alternate;
        }

        .primary-btn:before {
            position: absolute;
            content: "";
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            border-radius: 43px 43px 43px 12px;
            border-style: solid;
            border-color: #ff5b69;
            opacity: 0;
            visibility: hidden;
            border-radius: 0px;
        }

        .secondary-btn {
            background-image: linear-gradient(to right, #fff 0%, #eee 51%, #fff 100%);
            padding: 12px 24px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: #000;
            font-weight: 700;
            border-radius: 43px 43px 43px 12px;
            display: block;
        }

        .secondary-btn:hover {
            background-position: right center;
            /* change the direction of the change here */
            color: #000;
            text-decoration: none;
        }

        .gradient-bg {
            background: linear-gradient(to right, #ee0979 0%, #ff6a00 51%, #ee0979 100%);
        }

        .navbar-btn {
            position: relative;
            /* background-color: #ff5b69; */
            background-image: linear-gradient(to right,
                    #ee0979 0%,
                    #ff6a00 51%,
                    #ee0979 100%);
            padding: 12px 24px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            font-weight: 700;
            border-radius: 43px;
            /* border: 1px solid #ee0979; */
            /* display: block; */
            z-index: 1;
        }

        @media screen and (max-width: 768px) {
            .navbar-btn {
                padding: 8px 12px;
            }
        }

        .navbar-btn:after {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: #ffffff;
            z-index: -1;
            -webkit-clip-path: circle(0% at 0% 50%);
            clip-path: circle(0% at 0% 50%);
            transition: 0.5s ease-out;
            border-radius: 43px;
        }

        .navbar-btn:hover {
            color: #000 !important;
            border-color: transparent !important;
        }

        .navbar-btn:hover:after {
            transition: 1s ease-in-out;
            -webkit-clip-path: circle(200% at 0% 50%);
            clip-path: circle(200% at 0% 50%);
            border: 1px solid #ee0979;
        }

        .navbar-btn:hover:before {
            opacity: 1;
            visibility: visible;
        }

        .navbar-btn.active:after {
            animation: btn-shatter 0.8s 1 alternate;
        }

        .navbar-btn:before {
            position: absolute;
            content: "";
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            border-radius: 43px;
            border-style: solid;
            border-color: #ff5b69;
            opacity: 0;
            visibility: hidden;
            border-radius: 0px;
        }

        .primary-heading {
            @apply text-3xl lg:text-4xl font-extrabold capitalize tracking-tight;
        }

        .breadcrumbs-btn {
            @apply p-1;
        }

        .orange-gradient {
            background: linear-gradient(to right, #ff2a26, #ffba3c, #ff2a26);
        }

        /* .section-title h2,
.section-title h3,
.section-title h4 {
  font-weight: 800;
  line-height: 2.3em;
  color: #204163;
} */

        .single-feature-two {
            padding: 50px 30px;
            transition: 0.4s ease;
            -webkit-box-shadow: 0px 0px 25px 0px #e6e6e6;
            -moz-box-shadow: 0px 0px 25px 0px #e6e6e6;
            box-shadow: 0px 0px 25px 0px #e6e6e6;
            background-color: #ffffff;
            text-align: center;
            transition: 0.5s ease-in;
            position: relative;
            overflow: hidden;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .single-feature-two:hover {
            -webkit-box-shadow: 0px 5px 0px 0px rgba(230, 230, 230, 0.8);
            -moz-box-shadow: 0px 5px 0px 0px rgba(230, 230, 230, 0.8);
            box-shadow: 0px 0px 5px 0px rgba(230, 230, 230, 0.8);
        }

        .single-feature-two:after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            -webkit-clip-path: circle(0% at 50% 20%);
            clip-path: circle(0% at 50% 20%);
            z-index: -1;
        }

        .single-feature-two .h2-feature-icon {
            height: 100px;
            width: 100px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            z-index: 1;
            flex: none;
        }

        .single-feature-two .h2-feature-icon svg {
            height: 50px;
            width: 50px;
        }

        .single-feature-two .h2-feature-icon svg path {
            fill: #ffffff !important;
        }

        .single-feature-two .h2-feature-icon img {
            height: 50px;
            width: 50px;
        }

        .single-feature-two .h2-feature-icon i {
            font-size: 35px;
            color: #ffffff;
        }

        .single-feature-two .h2-feature-icon:after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            -webkit-clip-path: circle(0% at 0% 0%);
            clip-path: circle(0% at 0% 0%);
            z-index: -1;
        }

        .single-feature-two .card-two-content {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
        }

        .single-feature-two:hover h3,
        .single-feature-two:hover p,
        .single-feature-two:hover a,
        .single-feature-two:hover i {
            transition: 0.4s ease;
            color: #ffffff !important;
        }

        .single-feature-two:hover:after {
            transition: 2s ease;
            -webkit-clip-path: circle(200% at 50% 20%);
            clip-path: circle(200% at 50% 20%);
        }

        .single-feature-two:hover .h2-feature-icon svg {
            transition: 0.3s ease;
        }

        .single-feature-two:hover .h2-feature-icon:after {
            transition: 1.8s ease;
            -webkit-clip-path: circle(200% at 0% 0%);
            clip-path: circle(200% at 0% 0%);
        }

        .single-feature-two.sky-shape:after {
            background-color: #0298ff;
        }

        .single-feature-two.sky-shape:hover .h2-feature-icon svg path {
            fill: #0298ff !important;
        }

        .single-feature-two.blue-shape:after {
            background-color: #0a35dc;
        }

        .single-feature-two.blue-shape:hover .h2-feature-icon svg path {
            fill: #0a35dc !important;
        }

        .single-feature-two.red-shape:after {
            background-color: #f15f73;
        }

        .single-feature-two.red-shape:hover .h2-feature-icon svg path {
            fill: #f15f73 !important;
        }

        .single-feature-two.indigo-shape:after {
            background-color: #4039d4;
        }

        .single-feature-two.indigo-shape:hover .h2-feature-icon svg path {
            fill: #4039d4 !important;
        }

        .bg-sky {
            background-color: #0298ff;
        }

        .bg-blue {
            background-color: #0a35dc;
        }

        .bg-blue2 {
            background-color: #4039d4;
        }

        .bg-indigo {
            background-color: #4039d4;
        }

        .bg-red {
            background-color: #ff5b69;
        }

        .blue-shadow {
            -webkit-box-shadow: 0px 9px 20px -5px #0a35dc;
            -moz-box-shadow: 0px 9px 20px -5px #0a35dc;
            box-shadow: 0px 9px 20px -5px #0a35dc;
        }

        .sky-shadow {
            -webkit-box-shadow: 0px 9px 20px -5px rgba(2, 152, 255, 0.5);
            -moz-box-shadow: 0px 9px 20px -5px rgba(2, 152, 255, 0.5);
            box-shadow: 0px 9px 20px -5px rgba(2, 152, 255, 0.5);
        }

        .red-shadow {
            -webkit-box-shadow: 0px 9px 20px -5px #ff5b69;
            -moz-box-shadow: 0px 9px 20px -5px #ff5b69;
            box-shadow: 0px 9px 20px -5px #ff5b69;
        }

        .black-shadow {
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        }

        .white-shadow {
            transition: 0.3s ease-in;
            transition: 0.4s ease;
            -webkit-box-shadow: 0px 0px 25px 0px rgba(230, 230, 230, 0.8);
            -moz-box-shadow: 0px 0px 25px 0px rgba(230, 230, 230, 0.8);
            box-shadow: 0px 0px 25px 0px rgba(230, 230, 230, 0.8);
        }

        .footer-bg {
            background-color: #07011e;
        }

        /*Loading */
        .lds-ripple {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }

        .lds-ripple div {
            position: absolute;
            border: 4px solid #ff2a26;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        .lds-ripple div:nth-child(2) {
            animation-delay: -0.5s;
        }

        @keyframes lds-ripple {
            0% {
                top: 36px;
                left: 36px;
                width: 0;
                height: 0;
                opacity: 0;
            }

            4.9% {
                top: 36px;
                left: 36px;
                width: 0;
                height: 0;
                opacity: 0;
            }

            5% {
                top: 36px;
                left: 36px;
                width: 0;
                height: 0;
                opacity: 1;
            }

            100% {
                top: 0px;
                left: 0px;
                width: 72px;
                height: 72px;
                opacity: 0;
            }
        }

        /*SEO SMO*/

        .common-single-card {
            background-color: #ffffff;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            position: relative;
            z-index: 1;
            overflow: hidden;
            height: 100%;
        }

        .common-single-card:after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #e7f1fa;
            -webkit-clip-path: circle(0% at 20% 27%);
            clip-path: circlecircle(0% at 20% 27%);
            z-index: -1;
        }

        .common-single-card:hover:after {
            -webkit-clip-path: circle(200% at 20% 27%);
            clip-path: circlecircle(200% at 20% 27%);
            transition: 1.5s ease-in;
        }

        .common-single-card:hover .common-card-icon:after {
            -webkit-clip-path: circle(200% at 50% 50%);
            clip-path: circlecircle(200% at 50% 50%);
            transition: 2s ease-in;
        }

        .h4-offer-card {
            padding: 50px 35px;
            display: flex;
            flex-wrap: wrap;
            -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
            transition: 0.5s ease;
        }

        .h4-offer-card:hover {
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        }

        .h4-offer-card:after {
            background-color: #ffe3d6;
            -webkit-clip-path: circle(0% at 13% 30%);
            clip-path: circlecircle(0% at 13% 30%);
        }

        .h4-offer-card:hover i {
            color: #ff8c5a;
            transition: 0.5s ease;
        }

        .svg-blue svg path,
        .svg-blue svg circle,
        .svg-blue svg rect {
            fill: #0344c7 !important;
        }

        .svg-gray svg path,
        .svg-gray svg circle,
        .svg-gray svg rect {
            fill: #bcc2d0 !important;
        }

        .svg-white svg path,
        .svg-white svg circle,
        .svg-white svg rect {
            fill: #ffffff !important;
        }

        .svg-orange svg path,
        .svg-orange svg circle {
            fill: #f76b1c !important;
        }

        .svg-purple svg path,
        .svg-purple svg circle {
            fill: #7900f3 !important;
        }

        .svg-ired svg path,
        .svg-ired svg circle {
            fill: #f15f73 !important;
        }

        .svg-paste svg path,
        .svg-paste svg circle {
            fill: #0cd593 !important;
        }

        .svg-pink svg path,
        .svg-pink svg circle {
            fill: #e651fa !important;
        }

        .svg-sky svg path,
        .svg-sky svg circle {
            fill: #0298ff !important;
        }

        .svg-yellow svg path,
        .svg-yellow svg circle {
            fill: #ffbc3a !important;
        }

        .pink-hover .comon-card-icon {
            background-color: #f5ccfb;
        }

        .pink-hover:after {
            background-color: #f5ccfb;
        }

        .pink-hover:hover .h4-card-content i {
            color: #e651fa;
            transition-delay: 0.5s;
            padding-left: 10px;
        }

        .paste-hover .comon-card-icon {
            background-color: #e0fbef;
        }

        .paste-hover:after {
            background-color: #e0fbef;
        }

        .paste-hover:hover .h4-card-content i {
            color: #0cd593;
            transition-delay: 0.5s;
            padding-left: 10px;
        }

        .yellow-hover .comon-card-icon {
            background-color: #f8efb3;
        }

        .yellow-hover:after {
            background-color: #f8efb3;
        }

        .yellow-hover:hover .h4-card-content i {
            color: #ffbe3d;
            transition-delay: 0.5s;
            padding-left: 10px;
        }

        .purple-hover .comon-card-icon {
            background-color: #e7deff;
        }

        .purple-hover:after {
            background-color: #e7deff;
        }

        .purple-hover:hover .h4-card-content i {
            color: #7900f3;
            transition-delay: 0.5s;
            padding-left: 10px;
        }

        .pink-text {
            color: #e651fa;
        }

        .paste-text {
            color: #0cd593;
        }

        .yellow-text {
            color: #ffbe3d;
        }

        .purple-text {
            color: #7900f3;
        }

        /*PPC SM*/
        .service-card-five {
            padding: 50px 30px;
            background-color: #ffffff;
            border-radius: 10px;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 1;
            overflow: hidden;
        }

        .service-card-five:after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #ff6a00;
            z-index: -1;
            -webkit-clip-path: circle(0% at 50% 50%);
            clip-path: circle(0% at 50% 50%);
        }

        .service-card-five:hover svg path,
        .service-card-five:hover svg circle {
            fill: #fff !important;
        }

        .service-card-five:hover h3,
        .service-card-five:hover p {
            color: #ffffff !important;
        }

        .service-card-five:hover:after {
            -webkit-clip-path: circle(200% at 50% 50%);
            clip-path: circle(200% at 50% 50%);
            transition: 1s ease-in;
        }

        .svg-50 svg {
            height: 50px;
            width: 50px;
        }

        /* Web Dev */
        .engaging-business-heading {
            max-width: 650px;
            margin: 0 auto;
            padding: 0px 15px;
        }

        .engaging-single-card {
            width: 325px;
            padding: 35px 30px;
        }

        .engaging-single-card:after {
            clip-path: circlecircle(0% at 20% 50%);
            -webkit-clip-path: circle(10% at 20% 50%);
        }

        .engaging-content-wrapper .engaging-content {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 20;
        }

        .engaging-content-wrapper .engaging-content .engaging-card-one,
        .engaging-content-wrapper .engaging-content .engaging-card-two,
        .engaging-content-wrapper .engaging-content .engaging-card-three,
        .engaging-content-wrapper .engaging-content .engaging-card-four {
            position: absolute;
        }

        .engaging-content-wrapper .engaging-content .engaging-card-one {
            top: 35px;
            left: 0;
        }

        .engaging-content-wrapper .engaging-content .engaging-card-two {
            top: 100px;
            right: 0;
        }

        .engaging-content-wrapper .engaging-content .engaging-card-three {
            bottom: 100px;
            left: 0;
        }

        .engaging-content-wrapper .engaging-content .engaging-card-four {
            bottom: 35px;
            right: 0;
        }

        .engaging-circle-img {
            border-radius: 50%;
            height: 700px;
            width: 700px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .engaging-circle-img:after {
            position: absolute;
            content: "";
            height: 100%;
            width: 100%;
            border-radius: 50%;
            border: 2px dashed #dde4f5;
            top: 0;
            left: 0;
            animation: rotate-strategy 18s infinite linear;
        }

        .engaging-circle-img:hover:after {
            animation: rotate-strategy 1s 1 linear;
        }

        @keyframes rotate-strategy {
            0% {
                transform: rotate(360deg);
            }

            100% {
                transform: rotate(0deg);
            }
        }

        @media screen and (max-width: 1350px) {
            .web-Strategy-content-wrapper {
                padding: 0px 0px;
            }

            .engaging-content-wrapper .engaging-content .engaging-card-one {
                top: 0px;
            }

            .engaging-content-wrapper .engaging-content .engaging-card-two {
                top: 30px;
            }

            .engaging-circle-img img {
                max-width: 60%;
            }
        }

        @media screen and (max-width: 1199px) {
            .engaging-circle-img {
                height: 550px;
                width: 550px;
            }

            .engaging-circle-img img {
                max-width: 55%;
            }

            .engaging-content-wrapper .engaging-content .engaging-card-three {
                bottom: 40px;
            }
        }

        @media screen and (max-width: 991px) {
            .web-Strategy-content {
                max-width: 550px;
                text-align: center;
                margin: 0 auto;
            }

            .web-Strategy-img {
                position: relative;
                top: 0px;
                right: 0;
                width: auto;
                height: auto;
                max-width: 70%;
                margin: 0 auto;
                margin-top: 50px;
            }

            .web-Strategy-img>img {
                max-height: 100%;
                max-width: 100%;
                margin-right: 0px;
                position: relative;
                top: 0;
                right: unset;
                transform: translateY(0);
            }

            .engaging-content-wrapper .engaging-content {
                position: relative;
            }

            .engaging-content-wrapper .engaging-content .engaging-top,
            .engaging-content-wrapper .engaging-content .engaging-btm {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 50px;
            }

            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-one,
            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-two,
            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-three,
            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-four,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-one,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-two,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-three,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-four {
                position: relative;
            }

            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-one,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-one {
                top: 0;
                left: 0;
            }

            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-two,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-two {
                top: 0;
                right: 0;
            }

            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-three,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-three {
                bottom: 0;
                left: 0;
            }

            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-four,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-four {
                bottom: 0;
                right: 0;
            }

            .engaging-circle-img img {
                max-width: 75%;
            }
        }

        @media screen and (max-width: 767px) {

            .engaging-content-wrapper .engaging-content .engaging-top,
            .engaging-content-wrapper .engaging-content .engaging-btm {
                margin-bottom: 30px;
                flex-direction: column;
            }

            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-one,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-one {
                margin-bottom: 30px;
            }

            .engaging-content-wrapper .engaging-content .engaging-top .engaging-card-three,
            .engaging-content-wrapper .engaging-content .engaging-btm .engaging-card-three {
                margin-bottom: 30px;
            }

            .engaging-content-wrapper .engaging-content .engaging-btm {
                margin-bottom: 50px;
            }

            .engaging-circle-img {
                height: auto;
                width: auto;
            }

            .engaging-circle-img img {
                max-width: 90%;
                margin: 0 auto;
            }

            .engaging-circle-img:after {
                display: none;
            }
        }

        /*Hero*/

        .single-counter-two {
            border-radius: 6px;
            border-color: transparent;
            background: white;
            -webkit-box-shadow: 0px 0px 15px 0px rgba(249, 197, 202, 0.53);
            -moz-box-shadow: 0px 0px 15px 0px rgba(249, 197, 202, 0.53);
            box-shadow: 0px 0px 15px 0px rgba(249, 197, 202, 0.53);
            transition: 0.4s ease-in-out;
        }

        .single-counter-two:hover {
            border: 1px solid #f9c5ca;
        }

        /*Bottom Bar */
        .app__bottom-bar {
            z-index: 99;
        }

        /*Form*/

        /* #form-services option{
   background: white;
}

#form-services option:hover{
  background: red;
} */

        .half-circle {
            background: linear-gradient(to right, #ef0d75, #ffcc00);
            padding: 6px 6px 0 0;
        }

        .half-circle .half-circle-child {
            background: #fff;
            padding: 1.5rem;
        }

        .square-ani {
            background: linear-gradient(to right, #ef0d75, #fe6407);
            padding: 2px;
        }

        .square-ani .square-ani-child {
            background: #f8fafc;
            padding: 0.2rem;
        }

        .square-ani-2 {
            background: linear-gradient(to right, #ef0d75, #fe6407);
            padding: 2px 2px 0 0;
        }

        .square-ani-2 .square-ani-child-2 {
            background: #f8fafc;
            padding: 0.2rem;
        }

        .square-ani-3 {
            background: linear-gradient(to right, #ef0d75, #fe6407);
            padding: 0 0 2px 2px;
        }

        .square-ani-3 .square-ani-child-3 {
            background: #f8fafc;
            padding: 0.2rem;
        }

        .circle-ani {
            background: linear-gradient(to right, #ef0d75, #ffcc00);
            padding: 2px;
        }

        .circle-ani .circle-ani-child {
            background: #f8fafc;
            padding: 1rem;
        }

        .half-circle-ani {
            background: linear-gradient(to right, #ef0d75, #ffcc00);
            padding: 4px 4px 0 0;
        }

        .half-circle-ani .half-circle-ani-child {
            background: #f8fafc;
            padding: 0.5rem;
        }

        /*Testimonials*/

        .slider-container {
            position: relative;
            overflow: hidden;
        }

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            /* background: #ffdbc2; */
        }

        .slide.activeSlider {
            opacity: 1;
        }

        .slider-test-container {
            position: relative;
            overflow: hidden;
        }

        .slide-test {
            position: absolute;
            left: 7%;
            right: 7%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            /* background: #ffdbc2; */
        }

        .slide-test.activeSlider-test {
            opacity: 1;
        }

        /* Carousel */
        .item {
            min-height: 10rem;
            min-width: 10rem;
            padding: 40px;
        }

        /* 
.item .it{
  width: 100%;
  height: 100%;
} */

        .inner-carousel {
            display: flex;
        }

        .carousel {
            cursor: grab;
            overflow: hidden;
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">
    `;


    const combinedHTML = `<div>
  ${morehtml}
  <div style="font-family: "Nunito", sans-serif;">
  ${data}
  </div>
    </div>`

    // Return the fetched HTML content
    return new NextResponse(combinedHTML, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*", // Allow all origins, replace with specific domain if needed
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching footer:", error);
    return new NextResponse("<p>Error fetching footer</p>", { status: 500 });
  }
}

// Handle OPTIONS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
