import { useState } from "react";
//
import { useLocation } from "react-router-dom";
//
import PI from "react-phone-input-2";
const ReactPhoneInput = PI.default ? PI.default : PI;
import "react-phone-input-2/lib/plain.css";
//
export default function DignityForm2(prop) {
    function sumbitFunc(e) {
        e.preventDefault();
        prop.toggleMsg(true);
        console.log("sumbitFunc");
        fbq("track", "Lead");
        isSubmited(true);
        //
        const data = new FormData(e.target);
        fetch("https://sobakipavlova23493.activehosted.com/proc.php", {
            method: "POST",
            body: data,
            mode: "no-cors",
            cache: "no-cache",
        }).catch((error) => console.log("Request failed", error));
    }
    //
    const [submited, isSubmited] = useState(false);
    const location = useLocation();
    //
    // const phoneInput = document.querySelector("input[type=tel]");
    setTimeout(() => {
        const phoneInput = document.querySelector(".react-tel-input .form-control");
        phoneInput?.setAttribute("type", "tel");
        phoneInput?.setAttribute("id", "phone");
        phoneInput?.setAttribute("name", "phone");
    }, 1000);
    return (
        <div>
            {submited && (
                <div
                    className="w-screen h-screen fixed top-0 left-0 z-[500] grid place-items-center"
                    id={`${location.pathname}-success`}
                >
                    <div
                        onClick={() => {
                            isSubmited(false);
                        }}
                        className="w-screen h-screen bg-black/80 fixed top-0 left-0"
                    />
                    <div className="flex flex-col bg-white rounded-[10px] w-96 aspect-video items-center justify-center gap-[15px] p-[25px] relative">
                        <button
                            onClick={() => {
                                isSubmited(false);
                            }}
                            className="absolute top-4 right-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-[80px] aspect-square stroke-green-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>
            )}
            <form
                method="POST"
                // action="https://sobakipavlova23493.activehosted.com/proc.php"
                id="_form_4_"
                className="dignity-form"
                
                onSubmit={(e) => {
                    sumbitFunc(e);
                }}
            >
                <input type="hidden" name="u" value="4" />
                <input type="hidden" name="f" value="4" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input
                    type="hidden"
                    name="or"
                    value="aff7854179c8dca119fc24ec49221b70"
                />
                <div className="_form-content w-[300px] flex flex-col gap-[20px] mx-auto lg:w-[362px] ">
                    <div className="_form_element _x54994482 _full_width ">
                        <label htmlFor="fullname" className="_form-label"></label>
                        <div className="_field-wrapper">
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="  Имя"
                                required
                                className="dignity-form__input"
                            />
                        </div>
                    </div>
                    <div className="_form_element _x16231362 _full_width ">
                        <label htmlFor="email" className="_form-label"></label>
                        <div className="_field-wrapper">
                            <input
                                type="text"
                                id="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                name="email"
                                placeholder=" e-mail"
                                required
                                className="dignity-form__input"
                            />
                        </div>
                    </div>
                    <div className="_form_element _x92297975 ">
                        <label htmlFor="phone" className="_form-label"></label>
                        <div className="_field-wrapper">
                            <ReactPhoneInput
                                country={"ru"}
                                className="rounded-[5px] overflow-hidden lg:bg-red-500 lg:overflow-visible lg:rounded-[15px]"
                                style={window.innerWidth > 1023 ? {border: "1px black solid", borderRadius: "5px"} : {border: "1px black solid", maxWidth: "270px", marginLeft:"15px"}}
                                required
                            />
                        </div>
                    </div>
                    <div className="_button-wrapper _full_width">
                        <button
                            id="_form_4_submit"
                            type="submit"
                            className="dignity-form__btn"
                        >
                            ПРИСОЕДИНИТЬСЯ
                        </button>
                    </div>
                    <div className="_clear-element"></div>
                </div>
            </form>
        </div>
    );
}
