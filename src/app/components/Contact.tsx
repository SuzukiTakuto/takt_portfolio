"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isItemClicked, setIsItemClicked] = useState(false);
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-20px",
    triggerOnce: true, // 最初の一度だけ実行
  });

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        msg: msg,
      }),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  return (
    <div ref={ref}>
      {inView && (
        <div
          id="contact"
          className="animate-fade-in text-[#89B8BD] border border-[#89B8BD] mr-4 ml-4 mb-40"
        >
          <div className="title lg:text-5xl text-3xl mt-3 mb-3 flex justify-center font-bold">
            <h1>contact</h1>
          </div>
          <div className="flex justify-center">
            <form className="w-2/3">
              <input
                name="name"
                type="text"
                placeholder="お名前"
                className="block text-xs md:text-sm w-full bg-[#1E1E1E] px-2 py-3"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                name="email"
                type="email"
                placeholder="メールアドレス"
                className="block text-xs md:text-sm w-full mt-10 mb-10 bg-[#1E1E1E] px-2 py-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="content"
                id="content"
                cols={30}
                rows={5}
                placeholder="お問い合わせ内容"
                className="w-full text-xs md:text-sm bg-[#1E1E1E] px-2 py-1"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="send"
                  className="block text-xs md:text-sm w-2/12 min-w-[80px] mt-5 mb-5 bg-[#89B8BD] text-[#050605] py-1 cursor-pointer"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
