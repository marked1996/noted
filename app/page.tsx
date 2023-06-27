import React from "react";
import Card from "../components/Card";
import CreateNote from "@/components/CreateNote";

async function getNotes() {
  try {
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/Notes/records",
      { cache: "no-store" }
    );
    const data = await res.json();
    return data?.items as any[];
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <main>
      <CreateNote />
      <section className="cards grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {notes?.map((note) => (
          <Card key={note.id} note={note} />
        ))}
      </section>
    </main>
  );
}

// function Card({ note }: any) {
//   const { id, title, content, created } = note || {};

//   return (
//     <article
//       key={id}
//       className=" relative max-w-md overflow-hidden rounded-lg border border-border_hero bg-light p-4"
//     >
//       <h2 className="xlarge pb-2 md:pb-3 lg:pb-4">{title}</h2>
//       <p className="base">{content}</p>
//       <p className="ultrasmall">{created}</p>
//     </article>
//   );
// }
