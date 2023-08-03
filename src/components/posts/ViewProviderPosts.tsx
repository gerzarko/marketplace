import { Component, createEffect, createSignal } from "solid-js";
import { ViewCard } from "../services/ViewCard";
import { supabase } from "../../lib/supabaseClient";
import type { AuthSession } from "@supabase/supabase-js";

// Define the type for the ProviderPost interface
interface ProviderPost {
  user_id: string;
  content: string;
  id: number;
  category: string;
  title: string;
  provider_name: string;
  major_municipality: string;
  minor_municipality: string;
  governing_district: string;
}

// Get the user session
const { data: User, error: UserError } = await supabase.auth.getSession();

export const ViewProviderPosts: Component = () => {
  // initialize posts and session
  const [posts, setPosts] = createSignal<Array<ProviderPost>>([]);
  const [session, setSession] = createSignal<AuthSession | null>(null);

  if (UserError) {
    console.log("User Error: " + UserError.message);
  } else {
    setSession(User.session);
    console.log(User);
  }

  // get posts from supabase that match with the user id and set them to posts. After that render them through ViewCard.
  // if there is a modification to the posts table, the page will refresh and the posts will be updated.
  createEffect(async () => {
    const { data, error } = await supabase
      .from("providerposts")
      .select("*")
      .eq("user_id", session()!.user.id);
    if (!data) {
      alert("No posts available.");
    }
    if (error) {
      console.log("supabase error: " + error.message);
    } else {
      setPosts(data);
      console.log("got posts", posts());
    }
  });
  return (
    <div>
      <ViewCard posts={posts()} />
    </div>
  );
};