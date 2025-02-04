

export const GroupSchedule = () => {
    return (
        <section className="my-[40px] dt:my-[96px]">
            <div className="max-w-[364px] mx-auto dt:max-w-[1120px]">
                <h1 className="font-[AsgardBold] text-[36px] leading-9 text-[#343434] font-normal mb-[40px] -tracking-[.02em] dt:text-[48px] dt:leading-[48px]">Расписание встреч</h1>
                <div className="bg-[#343434] rounded-[8px] px-[28px] py-[32px]">
                    <p className="font-normal text-lg text-white max-w-[292px] text-center dt:text-start dt:max-w-[736px]">
                        Встречи будут проходить по <span className="font-semibold">средам</span> и <span className="font-semibold">воскресеньям</span>, в <span className="font-semibold">19:00.</span>
                        <br/>
                        После регистрации вы получите файл с домашними работами на почту, которую укажете при регистрации.
                    </p>
                    <ul className="flex flex-col items-center dt:flex-row">
                        <li className="p-[16px] bg-[#F4B8A9] relative flex flex-col items-center w-[100%] mt-[30px] rounded-[4px] overflow-hidden dt:mr-[20px] dt:p-[25px] dt:text-center dt:pb-[11px]">
                            <svg className="absolute top-0 left-0 z-[1] dt:left-[-20px] dt:top-[-25px]" width="124" height="139" viewBox="0 0 124 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.604 50.5703C43.1072 51.2041 44.7301 51.1614 46.1377 50.5811C47.5848 49.9843 48.8196 48.8116 49.4964 47.2065C50.1733 45.601 50.151 43.898 49.5681 42.4454C49.001 41.0323 47.8986 39.8404 46.3954 39.2066C42.177 37.4279 37.6273 37.5454 33.6832 39.1717C29.699 40.815 26.317 44.005 24.4842 48.3517C22.6512 52.6991 22.7281 57.3476 24.3334 61.3465C25.9222 65.3063 29.0142 68.6457 33.2327 70.4244C40.1664 73.348 47.6429 73.1563 54.1243 70.4833C60.6456 67.7945 66.1741 62.5866 69.1627 55.4986C72.1513 48.4107 72.0208 40.8162 69.3934 34.2699C66.7827 27.7631 61.7005 22.2762 54.7667 19.3527C45.1177 15.2842 34.7145 15.5499 25.6962 19.2693C16.6377 23.0045 8.96198 30.2303 4.81761 40.0594C0.673182 49.8886 0.858244 60.4295 4.50734 69.5222C8.14006 78.5756 15.2122 86.2104 24.8612 90.2788C37.225 95.492 50.5559 95.1514 62.1107 90.3863C73.7051 85.6052 83.5279 76.3613 88.8283 63.7905C94.1287 51.2197 93.89 37.7335 89.2191 26.0941C84.5644 14.4945 75.502 4.71176 63.1381 -0.5014C48.059 -6.85941 31.802 -6.44425 17.7096 -0.63287C3.57832 5.19437 -8.39135 16.4558 -14.8475 31.7677C-21.3037 47.0798 -21.011 63.5122 -15.3182 77.6982C-9.64116 91.8452 1.41068 103.775 16.4898 110.133C34.2847 117.636 53.4682 117.146 70.0972 110.288C86.7657 103.415 100.882 90.1358 108.494 72.0826C116.106 54.0295 115.759 34.6518 109.044 17.9186C102.346 1.22508 89.3043 -12.8522 71.5094 -20.3554C50.9997 -29.0031 28.8892 -28.4391 9.72239 -20.5353C-9.48272 -12.6154 -25.7464 2.68118 -34.5141 23.4754C-43.2822 44.2703 -42.88 66.5934 -35.1444 85.8738C-27.4228 105.114 -12.3914 121.34 8.11827 129.987L4.53842 138.478C-18.3961 128.807 -35.2022 110.669 -43.8324 89.1624C-52.4467 67.6958 -52.9121 42.8838 -43.1868 19.8186C-33.4616 -3.24643 -15.3718 -20.2336 6.01214 -29.0523C27.4356 -37.8867 52.1548 -38.5159 75.0893 -28.8457C95.3086 -20.3204 110.124 -4.32969 117.733 14.6298C125.325 33.5501 125.737 55.4155 117.167 75.7394C108.598 96.0634 92.6549 111.033 73.8081 118.806C54.9213 126.593 33.1292 127.148 12.91 118.623C-4.59394 111.243 -17.42 97.4003 -24.0071 80.987C-30.5771 64.6133 -30.9344 45.6936 -23.5207 28.1107C-16.1069 10.5276 -2.31142 -2.42358 13.9985 -9.1497C30.3488 -15.8916 49.214 -16.372 66.7179 -8.99155C81.5061 -2.7562 92.3431 8.93902 97.9076 22.8056C103.456 36.6316 103.759 52.6058 97.5013 67.4474C91.2433 82.2895 79.5942 93.2235 65.8216 98.903C52.0084 104.599 36.0695 105.005 21.2813 98.7692C9.2081 93.6786 0.360642 84.1307 -4.18141 72.8108C-8.70804 61.5311 -8.95682 48.5027 -3.85491 36.4027C1.24693 24.3028 10.7487 15.3861 21.9853 10.752C33.2611 6.10249 46.2734 5.77183 58.3466 10.8624C67.7047 14.8082 74.5624 22.2086 78.0818 30.9808C81.5862 39.714 81.7813 49.7966 77.8352 59.1554C73.8892 68.5141 66.5341 75.4127 57.8347 79.0002C49.097 82.6041 39.0109 82.8605 29.6528 78.9147C23.0097 76.1137 18.1423 70.861 15.6446 64.6356C13.1617 58.4496 13.0212 51.3131 15.8117 44.695C18.6019 38.0775 23.8099 33.1954 29.9723 30.6549C36.1738 28.0975 43.3322 27.9154 49.9753 30.7164C53.9028 32.3724 56.7806 35.4768 58.2567 39.1567C59.7171 42.7956 59.8035 46.987 58.1691 50.8632C56.5348 54.7392 53.4736 57.6032 49.8487 59.0978C46.1834 60.61 41.9516 60.7168 38.0241 59.0608L41.604 50.5703Z" fill="#F3E5D8"/>
                            </svg>
                            <div className="relative z-[2] w-[100%]">
                                <ul className="text-end w-[100%] mb-[16px] dt:absolute">
                                    <li className="font-bold text-sm text-white tracking-[.02em]">16 НОЯБРЯ</li>
                                    <li className="font-bold text-sm text-white tracking-[.02em]">23 НОЯБРЯ</li>
                                    <li className="font-bold text-sm text-white tracking-[.02em]">30 НОЯБРЯ</li>
                                </ul>
                                <div className="text-start w-[100%] mb-[35px] dt:mb-[4px]">
                                    <h3 className="font-[AsgardBold] text-[30px] leading-[30px] text-[#343434] font-bold mb-[4px] -tracking-[.02em]">Среда</h3>
                                    <p className="font-extrabold text-lg text-[#343434] tracking-[.02em]">1 группа</p>
                                </div>
                                <div className="text-end w-[100%] mb-[16px] dt:text-start dt:mb-[20px]">
                                    <p className="font-bold text-sm text-white tracking-[.02em]">ОСТАЛОСЬ МЕСТ: 5</p>
                                </div>
                                <button className="text-[18px] leading-[23px] text-white font-bold py-[16px] bg-[#343434] rounded-[32px] w-[100%] dt:w-[278px]">ЗАПИСАТЬСЯ</button>
                            </div>
                        </li>
                        <li className="p-[16px] bg-[#F4B8A9] relative flex flex-col items-center w-[100%] mt-[30px] rounded-[4px] overflow-hidden dt:p-[25px] dt:text-center dt:pb-[11px]">
                            <svg className="absolute top-0 left-0 z-[1] dt:left-[-20px] dt:top-[-25px]" width="132" height="138" viewBox="0 0 132 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.1562 -8.00206L26.3095 26.3L-4.95985 13.21L14.4186 41.9708L-14.7299 58.9664L18.5922 61.1894L13.1074 96.3438L36.1573 70.0948L59.2052 96.3438L53.7215 61.1894L87.0425 58.9664L57.895 41.9708L77.2725 13.21L46.0042 26.3L36.1562 -8.00206ZM36.1562 -8.00206L26.3095 26.3L-4.95985 13.21L14.4186 41.9708L-14.7299 58.9664L18.5922 61.1894L13.1074 96.3438L36.1573 70.0948L59.2052 96.3438L53.7215 61.1894L87.0425 58.9664L57.895 41.9708L77.2725 13.21L46.0042 26.3L36.1562 -8.00206ZM18.4816 8.56641L36.1562 -53L53.831 8.56641L112.159 -15.8514L76.2614 37.4262L131.313 69.5269L68.1841 73.7379L78.1023 137.313L36.1562 89.5441L-5.78962 137.313L4.12738 73.7379L-59 69.5269L-3.9488 37.4262L-39.845 -15.8514L18.4816 8.56641Z" fill="#F3E5D8"/>
                            </svg>
                            <div className="relative z-[2] w-[100%]">
                                <ul className="text-end w-[100%] mb-[16px] dt:absolute">
                                    <li className="font-bold text-sm text-white tracking-[.02em]">13 НОЯБРЯ</li>
                                    <li className="font-bold text-sm text-white tracking-[.02em]">20 НОЯБРЯ</li>
                                    <li className="font-bold text-sm text-white tracking-[.02em]">27 НОЯБРЯ</li>
                                </ul>
                                <div className="text-start w-[100%] mb-[35px] dt:mb-[4px]">
                                    <h3 className="font-[AsgardBold] text-[30px] leading-[30px] text-[#343434] font-bold mb-[4px] -tracking-[.02em]">Воскресенье</h3>
                                    <p className="font-extrabold text-lg text-[#343434] tracking-[.02em]">2 группы</p>
                                </div>
                                <div className="text-end w-[100%] mb-[16px] dt:text-start dt:mb-[20px]">
                                    <p className="font-bold text-sm text-white tracking-[.02em]">ОСТАЛОСЬ МЕСТ: 5</p>
                                </div>
                                <button className="text-[18px] leading-[23px] text-white font-bold py-[16px] bg-[#343434] rounded-[32px] w-[100%] dt:w-[278px]">ЗАПИСАТЬСЯ</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}