"use client";
import { cache, use, useState } from "react";

/**
 * update to get id from query params or searchparams
 */
const getPostList = cache(async () =>
  fetch("/api/posts?id=1").then((res) => res.json())
);

function RouteHandlersPage({ searchParams }: PostPageContext) {
  const [editMode, setEditMode] = useState(false);
  const [createMode, setCreateMode] = useState(false);
  const { post } = use(getPostList());
  const handleOnSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    fetch("/api/posts?id=1", {
      method: "PUT",
      body: JSON.stringify({
        userId: post.userId,
        id: post.id,
        title: formData.get("title"),
        body: formData.get("body"),
      }),
    });
  };

  const handleOnSubmitCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: post.userId,
        title: formData.get("title"),
        body: formData.get("body"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(`Post created successfully with Id ${res.post.id}`);
      });
  };

  const handleOnClickDelete = () => {
    fetch(`/api/posts?id=1`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        alert(`Post deleted successfully with Id ${res.id}`);
      });
  };

  const handleOnClickEdit = () => setEditMode((prev) => !prev);
  const handleOnClickCreate = () => setCreateMode((prev) => !prev);
  return (
    <div>
      <h1 className="text-purple-400">
        RouteHandlersPage to show specific post
      </h1>

      <div className="border-2 border-purple-400">
        <pre>{JSON.stringify(post, null, 4)}</pre>
      </div>
      <div className="p-2 inline-flex gap-x-2 items-center">
        Actions:
        <button
          className="action-button"
          onClick={handleOnClickEdit}
          disabled={createMode}
        >
          {editMode ? "Stop editing" : "Edit"}
        </button>
        <button
          className="action-button"
          onClick={handleOnClickCreate}
          disabled={editMode}
        >
          {createMode ? "Stop creating" : "New Post"}
        </button>
        <button
          className="action-button"
          onClick={handleOnClickDelete}
          disabled={editMode || createMode}
        >
          Delete current post
        </button>
      </div>
      {editMode && (
        <form
          onSubmit={handleOnSubmitEdit}
          className="border-2 border-purple-400 hover:border-purple-600"
        >
          <label htmlFor="title">
            Title:
            <input type="text" name="title" defaultValue={post.title} />
          </label>
          <label htmlFor="body">
            Body:
            <textarea name="body" defaultValue={post.body} />
          </label>
          <button>Submit changes</button>
        </form>
      )}
      {createMode && (
        <form
          onSubmit={handleOnSubmitCreate}
          className="border-2 border-purple-400 hover:border-purple-600"
        >
          <label htmlFor="title">
            Title:
            <input type="text" name="title" placeholder="I am a title" />
          </label>
          <label htmlFor="body">
            Body:
            <textarea name="body" placeholder="I am a body" />
          </label>
          <button>Submit changes</button>
        </form>
      )}
    </div>
  );
}

export default RouteHandlersPage;
