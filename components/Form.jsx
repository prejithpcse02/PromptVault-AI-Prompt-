import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="sub-text text-left">
        <span>{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-semibold text-base font-mono text-white">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-mono font-semibold text-base text-white">
            Prompt Tag{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className="black-btn">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
