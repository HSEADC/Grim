document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPause");
  const seekBar = document.getElementById("seekBar");
  const currentTime = document.getElementById("currentTime");
  const duration = document.getElementById("duration");
  const speedBtn = document.getElementById("speedBtn");
  const skipButtons = document.querySelectorAll(".A_SkipBtn");
  let speed = 1;

  const iconPlay = `
        

<svg width="20" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2940_266)">
<path d="M2.28003 5.23074V16.3293C2.28003 18.63 4.80635 20.0429 6.77504 18.8432L15.8814 13.2939C17.7665 12.1451 17.7665 9.41495 15.8814 8.26618L6.77504 2.7169C4.80635 1.5172 2.28003 2.93005 2.28003 5.23074Z" fill="#FF0000"/>
</g>
<mask id="mask0_2940_266" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="18">
<path d="M2.28003 5.23074V16.3293C2.28003 18.63 4.80635 20.0429 6.77504 18.8432L15.8814 13.2939C17.7665 12.1451 17.7665 9.41495 15.8814 8.26618L6.77504 2.7169C4.80635 1.5172 2.28003 2.93005 2.28003 5.23074Z" fill="#FF0000"/>
</mask>
<g mask="url(#mask0_2940_266)">
</g>
<mask id="mask1_2940_266" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="16" height="18">
<path d="M1.29523 5.23074V16.3293C1.29523 18.63 3.82155 20.0429 5.79024 18.8432L14.8966 13.2939C16.7817 12.1451 16.7817 9.41495 14.8966 8.26618L5.79024 2.7169C3.82155 1.5172 1.29523 2.93005 1.29523 5.23074Z" fill="url(#paint0_linear_2940_266)"/>
</mask>
<g mask="url(#mask1_2940_266)">
<mask id="mask2_2940_266" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="16" height="18">
<path d="M1.29523 5.23074V16.3293C1.29523 18.63 3.82155 20.0429 5.79024 18.8432L14.8966 13.2939C16.7817 12.1451 16.7817 9.41495 14.8966 8.26618L5.79024 2.7169C3.82155 1.5172 1.29523 2.93005 1.29523 5.23074Z" fill="white"/>
</mask>
<g mask="url(#mask2_2940_266)">
<g filter="url(#filter1_f_2940_266)">
<path d="M1.29523 5.23074V16.3293C1.29523 18.63 3.82155 20.0429 5.79024 18.8432L14.8966 13.2939C16.7817 12.1451 16.7817 9.41495 14.8966 8.26618L5.79024 2.7169C3.82155 1.5172 1.29523 2.93005 1.29523 5.23074Z" fill="white"/>
</g>
<g clip-path="url(#paint1_angular_2940_266_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.00492404 -0.00147305 0.00130106 0.00432464 9.1737 1.94174)"><foreignObject x="-4318.48" y="-4318.48" width="8636.96" height="8636.96"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(235, 0, 23, 1) 0deg,rgba(186, 2, 20, 1) 108deg,rgba(127, 5, 17, 1) 216deg,rgba(235, 69, 69, 1) 288deg,rgba(229, 126, 126, 1) 288deg,rgba(235, 0, 23, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M1.29523 5.23074V16.3293C1.29523 18.63 3.82155 20.0429 5.79024 18.8432L14.8966 13.2939C16.7817 12.1451 16.7817 9.41495 14.8966 8.26618L5.79024 2.7169C3.82155 1.5172 1.29523 2.93005 1.29523 5.23074Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.0,&#34;b&#34;:0.090196080505847931,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.7294117808341980,&#34;g&#34;:0.0078431377187371254,&#34;b&#34;:0.078431375324726105,&#34;a&#34;:1.0},&#34;position&#34;:0.30000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.49803921580314636,&#34;g&#34;:0.019607843831181526,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.60000002384185791},{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.27058824896812439,&#34;b&#34;:0.27058824896812439,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.89803922176361084,&#34;g&#34;:0.49411764740943909,&#34;b&#34;:0.49411764740943909,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.0,&#34;b&#34;:0.090196080505847931,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.7294117808341980,&#34;g&#34;:0.0078431377187371254,&#34;b&#34;:0.078431375324726105,&#34;a&#34;:1.0},&#34;position&#34;:0.30000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.49803921580314636,&#34;g&#34;:0.019607843831181526,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.60000002384185791},{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.27058824896812439,&#34;b&#34;:0.27058824896812439,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.89803922176361084,&#34;g&#34;:0.49411764740943909,&#34;b&#34;:0.49411764740943909,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896}],&#34;transform&#34;:{&#34;m00&#34;:9.8480844497680664,&#34;m01&#34;:2.6021246910095215,&#34;m02&#34;:2.9485905170440674,&#34;m10&#34;:-2.9460909366607666,&#34;m11&#34;:8.6492786407470703,&#34;m12&#34;:-0.90985643863677979},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" stroke="url(#paint2_linear_2940_266)" stroke-opacity="0.3" stroke-width="0.68" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#filter2_f_2940_266)">
<rect width="8.28605" height="61.1973" transform="matrix(0.573569 0.819158 -0.786803 0.617204 30.7356 -14.7528)" fill="url(#paint3_linear_2940_266)"/>
<rect x="-0.00639703" y="0.0430909" width="8.22605" height="61.1373" transform="matrix(0.573569 0.819158 -0.786803 0.617204 30.7668 -14.7311)" stroke="url(#paint4_linear_2940_266)" stroke-width="0.06"/>
</g>
<g filter="url(#filter3_f_2940_266)">
<path d="M1.29523 5.23074V16.3293C1.29523 18.63 3.82155 20.0429 5.79024 18.8432L14.8966 13.2939C16.7817 12.1451 16.7817 9.41495 14.8966 8.26618L5.79024 2.7169C3.82155 1.5172 1.29523 2.93005 1.29523 5.23074Z" stroke="url(#paint5_linear_2940_266)" stroke-width="0.46" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_2940_266" x="2.93255e-05" y="2.93255e-05" width="19.5752" height="21.56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.14" result="effect1_foregroundBlur_2940_266"/>
</filter>
<filter id="filter1_f_2940_266" x="-19.0048" y="-18.02" width="55.6152" height="57.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="10.15" result="effect1_foregroundBlur_2940_266"/>
</filter>
<clipPath id="paint1_angular_2940_266_clip_path"><path d="M1.29523 5.23074V16.3293C1.29523 18.63 3.82155 20.0429 5.79024 18.8432L14.8966 13.2939C16.7817 12.1451 16.7817 9.41495 14.8966 8.26618L5.79024 2.7169C3.82155 1.5172 1.29523 2.93005 1.29523 5.23074Z"/></clipPath><filter id="filter2_f_2940_266" x="-18.3046" y="-15.6428" width="54.6828" height="46.3388" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.445" result="effect1_foregroundBlur_2940_266"/>
</filter>
<filter id="filter3_f_2940_266" x="-1.21475" y="-0.230256" width="20.0352" height="22.0206" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.14" result="effect1_foregroundBlur_2940_266"/>
</filter>
<linearGradient id="paint0_linear_2940_266" x1="17.5446" y1="-1.00435" x2="-1.09887" y2="24.0879" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7B7B"/>
<stop offset="1" stop-color="#E50000"/>
</linearGradient>
<linearGradient id="paint2_linear_2940_266" x1="8.80282" y1="-1.98638" x2="8.80282" y2="25.5105" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="0.5001" stop-color="white"/>
</linearGradient>
<linearGradient id="paint3_linear_2940_266" x1="4.14303" y1="0" x2="4.14303" y2="61.1973" gradientUnits="userSpaceOnUse">
<stop stop-color="#F26161"/>
<stop offset="1" stop-color="#F26161" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_2940_266" x1="10.9097" y1="31.6715" x2="-2.06125" y2="31.3697" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_2940_266" x1="8.80282" y1="-1.98638" x2="8.80282" y2="25.5105" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="0.5001" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>


        `;

  const iconPause = `

<svg width="20" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2941_278)">
<path d="M2.28003 4.40503C2.28003 3.23142 3.17546 2.28003 4.28003 2.28003H6.28003C7.3846 2.28003 8.28003 3.23142 8.28003 4.40503V17.155C8.28003 18.3286 7.3846 19.28 6.28003 19.28H4.28003C3.17546 19.28 2.28003 18.3286 2.28003 17.155V4.40503Z" fill="#FF0000"/>
<path d="M11.28 4.40503C11.28 3.23142 12.1755 2.28003 13.28 2.28003H15.28C16.3846 2.28003 17.28 3.23142 17.28 4.40503V17.155C17.28 18.3286 16.3846 19.28 15.28 19.28H13.28C12.1755 19.28 11.28 18.3286 11.28 17.155V4.40503Z" fill="#FF0000"/>
</g>
<mask id="mask0_2941_278" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="18">
<path d="M2.28003 4.40503C2.28003 3.23142 3.17546 2.28003 4.28003 2.28003H6.28003C7.3846 2.28003 8.28003 3.23142 8.28003 4.40503V17.155C8.28003 18.3286 7.3846 19.28 6.28003 19.28H4.28003C3.17546 19.28 2.28003 18.3286 2.28003 17.155V4.40503Z" fill="#FF0000"/>
<path d="M11.28 4.40503C11.28 3.23142 12.1755 2.28003 13.28 2.28003H15.28C16.3846 2.28003 17.28 3.23142 17.28 4.40503V17.155C17.28 18.3286 16.3846 19.28 15.28 19.28H13.28C12.1755 19.28 11.28 18.3286 11.28 17.155V4.40503Z" fill="#FF0000"/>
</mask>
<g mask="url(#mask0_2941_278)">
</g>
<mask id="mask1_2941_278" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="16" height="18">
<path d="M1.28003 4.40503C1.28003 3.23142 2.17546 2.28003 3.28003 2.28003H5.28003C6.3846 2.28003 7.28003 3.23142 7.28003 4.40503V17.155C7.28003 18.3286 6.3846 19.28 5.28003 19.28H3.28003C2.17546 19.28 1.28003 18.3286 1.28003 17.155V4.40503Z" fill="url(#paint0_linear_2941_278)"/>
<path d="M10.28 4.40503C10.28 3.23142 11.1755 2.28003 12.28 2.28003H14.28C15.3846 2.28003 16.28 3.23142 16.28 4.40503V17.155C16.28 18.3286 15.3846 19.28 14.28 19.28H12.28C11.1755 19.28 10.28 18.3286 10.28 17.155V4.40503Z" fill="url(#paint1_linear_2941_278)"/>
</mask>
<g mask="url(#mask1_2941_278)">
<mask id="mask2_2941_278" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="16" height="18">
<path d="M1.28003 4.40503C1.28003 3.23142 2.17546 2.28003 3.28003 2.28003H5.28003C6.3846 2.28003 7.28003 3.23142 7.28003 4.40503V17.155C7.28003 18.3286 6.3846 19.28 5.28003 19.28H3.28003C2.17546 19.28 1.28003 18.3286 1.28003 17.155V4.40503Z" fill="white"/>
<path d="M10.28 4.40503C10.28 3.23142 11.1755 2.28003 12.28 2.28003H14.28C15.3846 2.28003 16.28 3.23142 16.28 4.40503V17.155C16.28 18.3286 15.3846 19.28 14.28 19.28H12.28C11.1755 19.28 10.28 18.3286 10.28 17.155V4.40503Z" fill="white"/>
</mask>
<g mask="url(#mask2_2941_278)">
<g filter="url(#filter1_f_2941_278)">
<path d="M1.28003 4.40503C1.28003 3.23142 2.17546 2.28003 3.28003 2.28003H5.28003C6.3846 2.28003 7.28003 3.23142 7.28003 4.40503V17.155C7.28003 18.3286 6.3846 19.28 5.28003 19.28H3.28003C2.17546 19.28 1.28003 18.3286 1.28003 17.155V4.40503Z" fill="white"/>
<path d="M10.28 4.40503C10.28 3.23142 11.1755 2.28003 12.28 2.28003H14.28C15.3846 2.28003 16.28 3.23142 16.28 4.40503V17.155C16.28 18.3286 15.3846 19.28 14.28 19.28H12.28C11.1755 19.28 10.28 18.3286 10.28 17.155V4.40503Z" fill="white"/>
</g>
<g clip-path="url(#paint2_angular_2941_278_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.006 0.0010625 -0.000937501 0.00597656 8.78003 -0.376221)"><foreignObject x="-3546.52" y="-3546.52" width="7093.04" height="7093.04"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(235, 0, 23, 1) 0deg,rgba(186, 2, 20, 1) 108deg,rgba(127, 5, 17, 1) 216deg,rgba(235, 69, 69, 1) 288deg,rgba(229, 126, 126, 1) 288deg,rgba(235, 0, 23, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M1.28003 4.40503C1.28003 3.23142 2.17546 2.28003 3.28003 2.28003H5.28003C6.3846 2.28003 7.28003 3.23142 7.28003 4.40503V17.155C7.28003 18.3286 6.3846 19.28 5.28003 19.28H3.28003C2.17546 19.28 1.28003 18.3286 1.28003 17.155V4.40503Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.0,&#34;b&#34;:0.090196080505847931,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.7294117808341980,&#34;g&#34;:0.0078431377187371254,&#34;b&#34;:0.078431375324726105,&#34;a&#34;:1.0},&#34;position&#34;:0.30000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.49803921580314636,&#34;g&#34;:0.019607843831181526,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.60000002384185791},{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.27058824896812439,&#34;b&#34;:0.27058824896812439,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.89803922176361084,&#34;g&#34;:0.49411764740943909,&#34;b&#34;:0.49411764740943909,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.0,&#34;b&#34;:0.090196080505847931,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.7294117808341980,&#34;g&#34;:0.0078431377187371254,&#34;b&#34;:0.078431375324726105,&#34;a&#34;:1.0},&#34;position&#34;:0.30000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.49803921580314636,&#34;g&#34;:0.019607843831181526,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.60000002384185791},{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.27058824896812439,&#34;b&#34;:0.27058824896812439,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.89803922176361084,&#34;g&#34;:0.49411764740943909,&#34;b&#34;:0.49411764740943909,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896}],&#34;transform&#34;:{&#34;m00&#34;:12.000000953674316,&#34;m01&#34;:-1.8750011920928955,&#34;m02&#34;:3.7175288200378418,&#34;m10&#34;:2.1250014305114746,&#34;m11&#34;:11.953125953674316,&#34;m12&#34;:-7.4152851104736328},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
<g clip-path="url(#paint3_angular_2941_278_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.006 0.0010625 -0.000937501 0.00597656 8.78003 -0.376221)"><foreignObject x="-3546.52" y="-3546.52" width="7093.04" height="7093.04"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(235, 0, 23, 1) 0deg,rgba(186, 2, 20, 1) 108deg,rgba(127, 5, 17, 1) 216deg,rgba(235, 69, 69, 1) 288deg,rgba(229, 126, 126, 1) 288deg,rgba(235, 0, 23, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M10.28 4.40503C10.28 3.23142 11.1755 2.28003 12.28 2.28003H14.28C15.3846 2.28003 16.28 3.23142 16.28 4.40503V17.155C16.28 18.3286 15.3846 19.28 14.28 19.28H12.28C11.1755 19.28 10.28 18.3286 10.28 17.155V4.40503Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.0,&#34;b&#34;:0.090196080505847931,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.7294117808341980,&#34;g&#34;:0.0078431377187371254,&#34;b&#34;:0.078431375324726105,&#34;a&#34;:1.0},&#34;position&#34;:0.30000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.49803921580314636,&#34;g&#34;:0.019607843831181526,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.60000002384185791},{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.27058824896812439,&#34;b&#34;:0.27058824896812439,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.89803922176361084,&#34;g&#34;:0.49411764740943909,&#34;b&#34;:0.49411764740943909,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.0,&#34;b&#34;:0.090196080505847931,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.7294117808341980,&#34;g&#34;:0.0078431377187371254,&#34;b&#34;:0.078431375324726105,&#34;a&#34;:1.0},&#34;position&#34;:0.30000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.49803921580314636,&#34;g&#34;:0.019607843831181526,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.60000002384185791},{&#34;color&#34;:{&#34;r&#34;:0.92156863212585449,&#34;g&#34;:0.27058824896812439,&#34;b&#34;:0.27058824896812439,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896},{&#34;color&#34;:{&#34;r&#34;:0.89803922176361084,&#34;g&#34;:0.49411764740943909,&#34;b&#34;:0.49411764740943909,&#34;a&#34;:1.0},&#34;position&#34;:0.80000001192092896}],&#34;transform&#34;:{&#34;m00&#34;:12.000000953674316,&#34;m01&#34;:-1.8750011920928955,&#34;m02&#34;:3.7175288200378418,&#34;m10&#34;:2.1250014305114746,&#34;m11&#34;:11.953125953674316,&#34;m12&#34;:-7.4152851104736328},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
<path d="M1.28003 4.40503C1.28003 3.23142 2.17546 2.28003 3.28003 2.28003H5.28003C6.3846 2.28003 7.28003 3.23142 7.28003 4.40503V17.155C7.28003 18.3286 6.3846 19.28 5.28003 19.28H3.28003C2.17546 19.28 1.28003 18.3286 1.28003 17.155V4.40503Z" stroke="url(#paint4_linear_2941_278)" stroke-opacity="0.3" stroke-width="0.68" stroke-linejoin="round"/>
<path d="M10.28 4.40503C10.28 3.23142 11.1755 2.28003 12.28 2.28003H14.28C15.3846 2.28003 16.28 3.23142 16.28 4.40503V17.155C16.28 18.3286 15.3846 19.28 14.28 19.28H12.28C11.1755 19.28 10.28 18.3286 10.28 17.155V4.40503Z" stroke="url(#paint5_linear_2941_278)" stroke-opacity="0.3" stroke-width="0.68" stroke-linejoin="round"/>
<g filter="url(#filter2_f_2941_278)">
<rect width="8.78753" height="63.7226" transform="matrix(0.54918 0.835704 -0.767278 0.641315 32.6746 -16.845)" fill="url(#paint6_linear_2941_278)"/>
<rect x="-0.00654294" y="0.0443106" width="8.72753" height="63.6626" transform="matrix(0.54918 0.835704 -0.767278 0.641315 32.7056 -16.8236)" stroke="url(#paint7_linear_2941_278)" stroke-width="0.06"/>
</g>
<g filter="url(#filter3_f_2941_278)">
<path d="M1.28003 4.40503C1.28003 3.23142 2.17546 2.28003 3.28003 2.28003H5.28003C6.3846 2.28003 7.28003 3.23142 7.28003 4.40503V17.155C7.28003 18.3286 6.3846 19.28 5.28003 19.28H3.28003C2.17546 19.28 1.28003 18.3286 1.28003 17.155V4.40503Z" stroke="url(#paint8_linear_2941_278)" stroke-width="0.46" stroke-linejoin="round"/>
<path d="M10.28 4.40503C10.28 3.23142 11.1755 2.28003 12.28 2.28003H14.28C15.3846 2.28003 16.28 3.23142 16.28 4.40503V17.155C16.28 18.3286 15.3846 19.28 14.28 19.28H12.28C11.1755 19.28 10.28 18.3286 10.28 17.155V4.40503Z" stroke="url(#paint9_linear_2941_278)" stroke-width="0.46" stroke-linejoin="round"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_f_2941_278" x="2.93255e-05" y="2.93255e-05" width="19.56" height="21.56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.14" result="effect1_foregroundBlur_2941_278"/>
</filter>
<filter id="filter1_f_2941_278" x="-19.02" y="-18.02" width="55.6" height="57.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="10.15" result="effect1_foregroundBlur_2941_278"/>
</filter>
<clipPath id="paint2_angular_2941_278_clip_path"><path d="M1.28003 4.40503C1.28003 3.23142 2.17546 2.28003 3.28003 2.28003H5.28003C6.3846 2.28003 7.28003 3.23142 7.28003 4.40503V17.155C7.28003 18.3286 6.3846 19.28 5.28003 19.28H3.28003C2.17546 19.28 1.28003 18.3286 1.28003 17.155V4.40503Z"/></clipPath><clipPath id="paint3_angular_2941_278_clip_path"><path d="M10.28 4.40503C10.28 3.23142 11.1755 2.28003 12.28 2.28003H14.28C15.3846 2.28003 16.28 3.23142 16.28 4.40503V17.155C16.28 18.3286 15.3846 19.28 14.28 19.28H12.28C11.1755 19.28 10.28 18.3286 10.28 17.155V4.40503Z"/></clipPath><filter id="filter2_f_2941_278" x="-17.1084" y="-17.735" width="55.4989" height="49.99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.445" result="effect1_foregroundBlur_2941_278"/>
</filter>
<filter id="filter3_f_2941_278" x="-1.22995" y="-0.229951" width="20.02" height="22.02" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.14" result="effect1_foregroundBlur_2941_278"/>
</filter>
<linearGradient id="paint0_linear_2941_278" x1="19.28" y1="-3.03247" x2="-5.70591" y2="21.4844" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7B7B"/>
<stop offset="1" stop-color="#E50000"/>
</linearGradient>
<linearGradient id="paint1_linear_2941_278" x1="19.28" y1="-3.03247" x2="-5.70591" y2="21.4844" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7B7B"/>
<stop offset="1" stop-color="#E50000"/>
</linearGradient>
<linearGradient id="paint4_linear_2941_278" x1="8.78003" y1="-4.09497" x2="8.78003" y2="27.2488" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="0.5001" stop-color="white"/>
</linearGradient>
<linearGradient id="paint5_linear_2941_278" x1="8.78003" y1="-4.09497" x2="8.78003" y2="27.2488" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="0.5001" stop-color="white"/>
</linearGradient>
<linearGradient id="paint6_linear_2941_278" x1="4.39376" y1="0" x2="4.39376" y2="63.7226" gradientUnits="userSpaceOnUse">
<stop stop-color="#F26161"/>
<stop offset="1" stop-color="#F26161" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_2941_278" x1="11.5699" y1="32.9785" x2="-2.18572" y2="32.6524" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint8_linear_2941_278" x1="8.78003" y1="-4.09497" x2="8.78003" y2="27.2488" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="0.5001" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_2941_278" x1="8.78003" y1="-4.09497" x2="8.78003" y2="27.2488" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.5" stop-color="white"/>
<stop offset="0.5001" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;

  // Play / Pause
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = iconPause; // показываем паузу
    } else {
      audio.pause();
      playPauseBtn.innerHTML = iconPlay; // показываем play
    }
  });

  // Когда трек закончился — возвращаем иконку Play
  audio.addEventListener("ended", () => {
    playPauseBtn.innerHTML = iconPlay;
  });

  function updateMetadata() {
    // readyState >= 1 – метаданные (и длительность) уже загружены
    if (audio.readyState >= 1) {
      seekBar.max = audio.duration;
      duration.textContent = formatTime(audio.duration);
    }
  }

  audio.addEventListener("loadedmetadata", updateMetadata);

  // Если метаданные уже загружены к моменту выполнения скрипта – применяем сразу
  if (audio.readyState >= 1) {
    updateMetadata();
  }

  // Обновление времени
  audio.addEventListener("timeupdate", () => {
    seekBar.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
  });

  // Перемотка ползунком
  seekBar.addEventListener("input", () => {
    audio.currentTime = seekBar.value;
  });

  skipButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const skipValue = btn.dataset.skip;
      if (skipValue === undefined) return;

      const seconds = parseInt(skipValue, 10);
      audio.currentTime = Math.max(
        0,
        Math.min(audio.duration, audio.currentTime + seconds),
      );
    });
  });

  // Скорость
  speedBtn.addEventListener("click", () => {
    speed = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1;
    audio.playbackRate = speed;
    speedBtn.textContent = speed + "×";
  });

  // Формат mm:ss
  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }
});
