"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Card = ({ note }: any) => {
  const { id, title, content, created } = note || {};

  const router = useRouter();

  //deleting the note on cross click
  async function deleteNote() {
    await fetch(
      `http://127.0.0.1:8090/api/collections/Notes/records/${note.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );

    router.refresh();
  }

  async function updateNote() {
    await fetch(
      `http://127.0.0.1:8090/api/collections/Notes/records/${note.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );
  }

  return (
    <article
      key={id}
      className=" relative max-w-md overflow-hidden rounded-lg border border-border_hero bg-light p-4"
    >
      <div className="icons absolute right-4 top-4 flex items-center justify-center gap-1">
        {/* update note */}
        <svg
          onClick={updateNote}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6  cursor-pointer rounded-full p-1 duration-300 hover:bg-border"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>

        {/* delete note */}
        <svg
          onClick={deleteNote}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" h-6 w-6 cursor-pointer rounded-full p-1 duration-300 hover:bg-border"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <h2 className="xlarge pb-2 md:pb-3 lg:pb-4">{title}</h2>
      <p className="base">{content}</p>
      <p className="ultrasmall">{created}</p>
    </article>
  );
};

export default Card;
