"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  //open close when clicked
  const [isClicked, setIsClicked] = useState(false);
  const formRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //router.refresh() so we don't have to refresh the page on submitting a new note
  const router = useRouter();

  //clicking outside the form to close it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //stop changing the state is isClicked when clicking on the form for the second, third,...n-time
  const handleFormClick = (e: any) => {
    e.stopPropagation();
    setIsClicked(true);
  };

  //======================================================
  //CREATE NOTE
  //======================================================
  const createNote = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/Notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setContent("");
    setTitle("");

    router.refresh();
  };

  //======================================================
  //UPDATE NOTE
  //======================================================

  return (
    <form
      onSubmit={createNote}
      onClick={(e) => handleFormClick(e)}
      ref={formRef}
      className={`base m-auto grid w-96 gap-3 rounded-lg border border-border_hero ${
        isClicked ? "px-4 py-4 lg:px-6 lg:py-6" : "px-4 py-2 md:py-3"
      } `}
    >
      {isClicked ? (
        <>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            type="text"
            placeholder="Title"
            className="text-gray-900 placeholder:text-gray-400 focus:border-b-1 xlarge block break-words border-dark"
          />
          <input
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            placeholder="Text"
            className="text-gray-900 placeholder:text-gray-400 focus:border-b-1 block break-words border-dark  text-base"
          />
          <button
            type="submit"
            className="base rounded-lg border border-border bg-light px-5 py-2 text-gray duration-300 hover:border-dark hover:text-dark"
          >
            Submit the note
          </button>
        </>
      ) : (
        <input
          type="text"
          placeholder="Make a note"
          className=" text-gray-900 placeholder:text-gray-400 focus:border-b-1 block border-dark  sm:text-xs md:text-base"
        />
      )}
    </form>
  );
}
