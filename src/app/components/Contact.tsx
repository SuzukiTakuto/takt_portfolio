"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitButtonMsg, setSubmitButtonMsg] = useState("送信");
  const [submittedMsg, setSubmittedMsg] = useState("");
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-20px",
    triggerOnce: true, // 最初の一度だけ実行
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSubmitButtonMsg("送信中...");
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          msg,
        }),
      });

      console.log("Response received");

      if (response.status === 200) {
        console.log("Response succeeded!");
        // フォームをリセット
        setName("");
        setEmail("");
        setMsg("");
        setSubmitButtonMsg("送信");
        setSubmittedMsg(
          "お問い合わせありがとうございます。送信が完了しました。"
        );
      } else {
        console.log(`Error: Status Code ${response.status}`);
        setSubmitButtonMsg("送信");
        setSubmittedMsg("送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      setSubmitButtonMsg("送信");
      setSubmittedMsg("送信に失敗しました。もう一度お試しください。");
    }
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
            <form className="w-2/3" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="お名前"
                className="block text-xs md:text-sm w-full bg-[#1E1E1E] px-2 py-3"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                name="email"
                type="email"
                placeholder="メールアドレス"
                className="block text-xs md:text-sm w-full mt-10 mb-10 bg-[#1E1E1E] px-2 py-3"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="content"
                id="content"
                cols={30}
                rows={5}
                placeholder="お問い合わせ内容"
                className="w-full text-xs md:text-sm bg-[#1E1E1E] px-2 py-1"
                value={msg}
                required
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value={submitButtonMsg}
                  className="block text-xs md:text-sm w-2/12 min-w-[80px] mt-5 mb-5 bg-[#89B8BD] text-[#050605] py-1 cursor-pointer"
                />
              </div>
              <div className="flex justify-center">
                <span className="text-xs md:text-sm">{submittedMsg}</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
